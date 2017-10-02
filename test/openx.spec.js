import * as OpenX from '../src/js/openx';

describe('OpenX', () => {
    it('isEnabled', () => {
        expect(OpenX.isEnabled('de')).to.equal(true);
        expect(OpenX.isEnabled('at')).to.equal(true);
        expect(OpenX.isEnabled('it')).to.equal(true);
    });

    it('getScriptUrl', () => {
        expect(OpenX.getScriptUrl('de')).to.equal('https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout');
        expect(OpenX.getScriptUrl('be', 'fr')).to.equal('https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-be-fr');
    });
});