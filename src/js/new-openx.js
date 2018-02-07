import { registerHBLite } from './openx-hb-light-min';
import { isDE } from './helpers';

export const isEnabled = () => {
    const isFeatureFlagOn = location.hash.indexOf('ads-use-new-openx') >= 0;
    return isFeatureFlagOn;
};

const oxAdunitMap = {
    '/4467/ms24_de/Detailpage/SkyRight': 538655030,
    '/4467/ms24_de/Listpage/Contentbanner_2': 538615014,
    '/4467/ms24_de/Listpage/Contentbanner_3': 538615009,
    '/4467/ms24_de/Listpage/Contentbanner_4': 538615011,
    '/4467/ms24_de/Listpage/Contentbanner_1': 538615007,
    '/4467/ms24_de/Detailpage/GalleryMR': 538621138,
    '/4467/ms24_de/Listpage/SkyRight': 538615016,
    '/4467/as24_de/Listpage/Top': 538615010,
    '/4467/as24_de/Listpage/SkyLeft': 538473049,
    '/4467/as24_de/Detailpage/SkyRight': 538665959,
    '/4467/ms24_de/Detailpage': 538473562,
    '/4467/ms24_de/Listpage/Top': 538615015,
    '/4467/ms24_de/Listpage/SkyLeft': 538473560,
    '/4467/ms24_de/Listpage': 538473559,
    '/4467/ms24_de/Homepage': 538624366,
    '/4467/as24_de/Listpage': 538473052,
    '/4467/as24_de/Detailpage/Top': 538621133,
    '/4467/as24_de/Detailpage/GalleryMR': 538621136,
    '/4467/as24_de/Gallery': 538473564,
    '/4467/as24_de/Detailpage_HPA': 538473051,
    '/4467/as24_de/Detailpage/Contentbanner_1': 538655031,
    '/4467/ms24_de/Detailpage/SkyLeft': 538621139,
    '/4467/as24_de/Listpage/SkyRight': 538615005,
    '/4467/as24_de/Detailpage/Contentbanner_2': 538655032,
    '/4467/as24_de/Detailpage': 538473050,
    '/4467/as24_de/Listpage/Contentbanner_1': 538615008,
    '/4467/as24_de/Listpage/Contentbanner_2': 538615012,
    '/4467/as24_de/Listpage/Contentbanner_3': 538615006,
    '/4467/ms24_de/Detailpage/Contentbanner_1': 538621135,
    '/4467/as24_de/Listpage/Contentbanner_4': 538615013,
    '/4467/ms24_de/Detailpage/Contentbanner_2': 538621137,
    '/4467/ms24_de/Detailpage/Top': 538621140,
    '/4467/as24_de/Detailpage/SkyLeft': 538621134
};

//setting up the config for hb-lite
const bidderConfig = {
    timeLimit: 1500,
    deliveryDomain: 'scout24-d.openx.net1',
    singleRequest: true,
    contentTopidId: '99',
    adMappings: [],
};

export const init = () => {
    registerHBLite();

    const activeSlots = Array.from(document.querySelectorAll('as24-ad-slot[sizes]:not([sizes="[]"]):not([out-of-page]):not([immediate]):not([openx-ignore])'));

    const targeting = window.getTargetingData('as24-ad-targeting');
    const splz = targeting.splz ? {'splz': targeting.splz} : {};
    const zip2 = targeting.zip2 ? {'zip2': targeting.zip2} : {};
    const customKeyValuePairs = Object.assign(splz, zip2);

    activeSlots.forEach(activeSlot => {
        const dfpAdUnitKey = activeSlot.getAttribute('ad-unit');
        const oxAdunitValue = oxAdunitMap[dfpAdUnitKey];

        if (!oxAdunitValue) {
            return false;
        }

        bidderConfig.adMappings.push({
            type: 'display',
            divId: activeSlot.children[0].id,
            adUnit: dfpAdUnitKey,
            sizes: JSON.parse(activeSlot.getAttribute('sizes')),
            oxAdUnitId: oxAdunitValue,
            customKeyValuePairs: customKeyValuePairs
        });
    });

    window.oxhbjs = new window.HeaderBidder(bidderConfig);
};
