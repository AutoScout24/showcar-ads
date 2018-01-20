export const asArray = xs => Array.prototype.slice.call(xs);

export const once = fn => {
    let count = 1;
    let memo;

    return () => {
        if (count-- > 0) {
            memo = fn();
        }

        return memo;
    };
};

export const batch = fn => {
    const arr = [];
    let to;

    return arg => {
        arr.push(arg);
        clearTimeout(to);
        to = setTimeout(() => {
            fn(arr);
            arr.length = 0;
        }, 50);
    };
};

export const debounce = (fn, delay) => {
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
};

const tld = location.hostname.split('.').pop();

export const isDE = tld === 'de';
export const isAT = tld === 'at';
export const isIT = tld === 'it';
export const isNL = tld === 'nl';
export const isBE = tld === 'be';
export const isFR = tld === 'fr';
export const isES = tld === 'es';
export const isBG = tld === 'bg';
export const isCOM = tld === 'com';
export const isTR = tld === 'tr';
export const isUA = tld === 'ua';
export const isCZ = tld === 'cz';
export const isHR = tld === 'hr';
export const isLU = tld === 'lu';
export const isPL = tld === 'pl';
export const isRO = tld === 'ro';
export const isRU = tld === 'ru';
export const isSE = tld === 'se';
export const isHU = tld === 'hu';


// const logBatch = batch(tx => console.log(tx, 'ASDF'));
//
// logBatch('qwe1');
// logBatch('qwe2');
// logBatch('qwe3');
// logBatch('qwe4');
