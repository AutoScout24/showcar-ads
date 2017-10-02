// This code is based on: https://github.com/AutoScout24/information-js/blob/master/src/modules/krux.js

const kruxSegmentsCharacterLimit = 4500;

function retrieve(n) {
    try {

        var cookieData, id = 'kx' + n;
        
        if (window.localStorage) {
            return window.localStorage[id] || '';
        } else if (navigator.cookieEnabled) {
            cookieData = document.cookie.match(id + '=([^;]*)');
            return (cookieData && window.unescape(cookieData[1])) || '';
        } else {
            return '';
        }
    }
    catch(ex) {
        return '';
    }
}

function truncateSegmentsToMaxChars(segments, maxChars) {
    var encodedCommaLength = '%252C'.length;   // double urlencoded ","
    var truncatedSegments = [];
    var totalStringLength = 0;
    for (var i = 0; i < segments.length; i++) {
        var segmentLength = segments[i].length + encodedCommaLength;
        if (totalStringLength + segmentLength <= maxChars) {
            truncatedSegments.push(segments[i]);
            totalStringLength += segmentLength;
        } else {
            break;
        }
    }
    return truncatedSegments;
}

export const retrieveUser = () => retrieve('user');
export const retrieveSegments = () => {
    const segments = retrieve('segs') && retrieve('segs').split(',') || [];
    const truncatedSegments = truncateSegmentsToMaxChars(segments, kruxSegmentsCharacterLimit);
    return truncatedSegments;
};
