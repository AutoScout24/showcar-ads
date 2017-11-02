import { loadScript } from './dom';

export const loadIndexExchange = () => {
    const tld = location.hostname.split('.').pop();
    const isDE = tld === 'de';
    const isAT = tld === 'at';
    const isIT = tld === 'it';
    const isNL = tld === 'nl';
    const isBE = tld === 'be';
    const isFR = tld === 'fr';
    const isIndexExchangeEnabled = isDE || isAT || isIT || isNL || isBE || isFR
        || location.search.indexOf('indexexchange=1') >= 0 || document.cookie.indexOf('indexexchange=1') >= 0;

    if (!isIndexExchangeEnabled) return false;

    if (isDE) loadScript('//js-sec.indexww.com/ht/p/185725-52080520089380.js');
    else if (isAT) loadScript('//js-sec.indexww.com/ht/p/185725-71871796647060.js');
    else if (isIT) loadScript('//js-sec.indexww.com/ht/p/185725-124648354720881.js');
    else if (isNL) loadScript('//js-sec.indexww.com/ht/p/185725-60876680248506.js');
    else if (isBE) loadScript('//js-sec.indexww.com/ht/p/185725-36693753739424.js');
    else if (isFR) loadScript('//js-sec.indexww.com/ht/p/185725-93868358308799.js');
};
