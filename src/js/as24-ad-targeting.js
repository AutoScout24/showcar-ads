import { addCss } from './dom';
import * as Krux from './krux';

const registerElement = (name = 'as24-ad-targeting') => {
    const googletag = window.googletag || (window.googletag = { cmd: [] });

    const refreshTargeting = () => {
        const targeting = getTargetingData(name);

        googletag.cmd.push(() => {
            const pubads = googletag.pubads();
            const oldTargetingKeys = pubads.getTargetingKeys();

            oldTargetingKeys.forEach(key => pubads.clearTargeting(key));

            for (let key in targeting) {
                const value = `${targeting[key]}`.split(',');
                pubads.setTargeting(key, value);
            }

            const kuid = Krux.retrieveUser();
            if (kuid) {
                pubads.setTargeting('kuid', kuid);
            }
            
            const ksg = Krux.retrieveSegments();
            if (ksg && ksg.length > 0) {
                pubads.setTargeting('ksg', Krux.retrieveSegments());
            }
        });
    };

    const AS24AdTargetingPrototype = Object.create(HTMLElement.prototype,  {
        attachedCallback: {
            value: refreshTargeting
        },

        detachedCallback: {
            value: refreshTargeting
        }
    });

    addCss(`${name}{display:none}`);
    document.registerElement(name, { prototype: AS24AdTargetingPrototype });
};

export default registerElement;

export const getTargetingData = (tagName) => {
    const targetingElements = Array.from(document.querySelectorAll(tagName) || []);
    const targetingObjects = targetingElements.map(el => JSON.parse(el.innerHTML.trim() || '{}'));
    const targeting = {};

    targetingObjects.forEach(obj => Object.assign(targeting, obj));

    return targeting;
};
