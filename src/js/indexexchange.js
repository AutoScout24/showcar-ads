import { loadScript } from './dom';
import {isDE, isAT, isNL, isIT, isBE, isFR} from './helpers';

export const loadIndexExchange = () => {
    const isCorrectCountry = isDE || isIT || isNL || isBE || isFR;
    const isFeatureFlagOn = location.search.indexOf('indexexchange=1') >= 0 || document.cookie.indexOf('indexexchange=1') >= 0;
    const isIndexExchangeEnabled = isCorrectCountry || isFeatureFlagOn;

    if (!isIndexExchangeEnabled) return false;

    if (isDE) loadScript('//js-sec.indexww.com/ht/p/185725-52080520089380.js');
    else if (isAT) loadScript('//js-sec.indexww.com/ht/p/185725-71871796647060.js');
    else if (isIT) loadScript('//js-sec.indexww.com/ht/p/185725-124648354720881.js');
    else if (isNL) loadScript('//js-sec.indexww.com/ht/p/185725-60876680248506.js');
    else if (isBE) loadScript('//js-sec.indexww.com/ht/p/185725-129054717428262.js');
    else if (isFR && isFeatureFlagOn) loadScript('//js-sec.indexww.com/ht/p/185725-93868358308799.js');
};
