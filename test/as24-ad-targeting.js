import registerElement from '../src/js/as24-ad-targeting';
import uuid from '../src/js/uuid';
import { mockGoogletag } from './mocks';

const testContainer = document.createElement('div');
document.body.appendChild(testContainer);

describe('The as24-ad-targeting element', () => {
    let tagName;

    beforeEach(() => {
        mockGoogletag();
        tagName = `x-${uuid()}`;
    });

    afterEach(done => {
        testContainer.innerHTML = '';
        delete window.googletag;

        setTimeout(done, 100);
    });

    it('Sets targeting correctly with only one element', () => {
        const setTargetingSpy = sinon.spy(window.googletag.pubads(), 'setTargeting');

        registerElement(tagName);
        testContainer.innerHTML += `<${tagName}>{ "a": 1, "b": 2 }</${tagName}>`;

        window.googletag.cmd.forEach(cmd => { cmd(); });

        expect(setTargetingSpy.callCount).to.equal(2);
        expect(setTargetingSpy.firstCall.calledWith('a', ['1'])).to.be.true;
        expect(setTargetingSpy.secondCall.calledWith('b', ['2'])).to.be.true;
    });

    it('Sets targeting corectly and clears out old values with multiple elements', () => {
        const setTargetingSpy = sinon.spy(window.googletag.pubads(), 'setTargeting');
        const clearTargetingSpy = sinon.spy(window.googletag.pubads(), 'clearTargeting');

        registerElement(tagName);
        testContainer.innerHTML = `<${tagName}>{ "a": 1, "b": 2 }</${tagName}><${tagName}>{ "b": 3, "c": 4, "d": 5 }</${tagName}>`;

        window.googletag.cmd.forEach(cmd => cmd());

        expect(window.googletag.pubads().getTargetingKeys()).to.deep.equal(['a', 'b', 'c', 'd']);
        expect(clearTargetingSpy.callCount).to.equal(4);
        expect(setTargetingSpy.callCount).to.equal(8);
    });

    it('Sets Krux parameters correctly from localStorage or cookie', () => {
        const setTargetingSpy = sinon.spy(window.googletag.pubads(), 'setTargeting');

        localStorage.setItem('kxuser', 'user');
        localStorage.setItem('kxsegs', 'seg1,seg2');

        registerElement(tagName);
        testContainer.innerHTML += `<${tagName}>{ "a": 1 }</${tagName}>`;

        window.googletag.cmd.forEach(cmd => { cmd(); });
        expect(setTargetingSpy.callCount).to.equal(3);
        expect(setTargetingSpy.firstCall.calledWith('a', ['1'])).to.be.true;
        expect(setTargetingSpy.secondCall.calledWith('kuid', 'user')).to.be.true;
        expect(setTargetingSpy.thirdCall.calledWith('ksg', ['seg1', 'seg2'])).to.be.true;

        localStorage.removeItem('kxuser');
        localStorage.removeItem('kxsegs');

        // delete window.Krux;
    });
});
