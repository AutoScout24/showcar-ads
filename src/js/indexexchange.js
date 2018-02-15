import { loadScript } from './dom';
import {isDE, isAT, isNL, isIT, isBE, isFR, isES, isBG, isCOM, isTR, isUA, isCZ, isHR, isLU, isPL, isRO, isRU, isSE, isHU} from './helpers';

export const loadIndexExchange = () => {
    const isCorrectCountry = !isHU;
    const isFeatureFlagOn = location.search.indexOf('indexexchange=1') >= 0 || document.cookie.indexOf('indexexchange=1') >= 0;
    const isIndexExchangeEnabled = isCorrectCountry || isFeatureFlagOn;

    if (!isIndexExchangeEnabled) return false;

    if (isDE) loadScript('//js-sec.indexww.com/ht/p/185725-52080520089380.js');
    else if (isAT) loadScript('//js-sec.indexww.com/ht/p/185725-71871796647060.js');
    else if (isIT) loadScript('//js-sec.indexww.com/ht/p/185725-124648354720881.js');
    else if (isNL) loadScript('//js-sec.indexww.com/ht/p/185725-60876680248506.js');
    else if (isBE) loadScript('//js-sec.indexww.com/ht/p/185725-129054717428262.js');
    else if (isFR) loadScript('//js-sec.indexww.com/ht/p/185725-93868358308799.js');
    else if (isES) loadScript('//js-sec.indexww.com/ht/p/185725-80679730502062.js');
    else if (isBG && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-21306986011839.js');
    else if (isCOM && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-16908939592252.js');
    else if (isTR && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-32302102478062.js');
    else if (isUA && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-65287451382876.js');
    else if (isCZ && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-78481591103080.js');
    else if (isHR && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-192830800486883.js');
    else if (isLU && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-107068893625728.js');
    else if (isPL && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-146651312312317.js');
    else if (isRO && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-177437637966217.js');
    else if (isRU && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-181835684532677.js');
    else if (isSE && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-188432754353892.js');
};
