
const remotePerformanceLoggingEnabled = true;
const remoteLoggingURL = 'https://osa-logging.s24-media.immobilienscout24.de/prod/logs/';

const samplingRate = 0.1;
const samplingGroup = Math.random();
let sendPerformanceLogsTimer = null;
const performanceLogData = {};

export const recordPerfEvent = (perfEventName) => {
    if (perfEventName && remotePerformanceLoggingEnabled && samplingGroup <= samplingRate && performanceLogData[perfEventName] === undefined) {
        performanceLogData[perfEventName] = getTimeSincePageStart();
        queueSendingCollectedPerformanceLogsIfNeeded();
        console.log('[AS24 ShowCar Ads] @' + performanceLogData[perfEventName] + 'ms: ' + perfEventName);
    }
};

const queueSendingCollectedPerformanceLogsIfNeeded = () => {
    if (!sendPerformanceLogsTimer) {
        sendPerformanceLogsTimer = setTimeout(() => {
            console.log('[AS24 ShowCar Ads] @ ' + getTimeSincePageStart() + 'ms: Sending performance logs...');
            POST(remoteLoggingURL + 'showcar-performance', {
                performanceLogData: performanceLogData,
                referrer: window.location.origin,
                userAgent: navigator.userAgent
            });
        }, 10000);
    }
};

const getTimeSincePageStart = () => {
    let duration = '- ';
    const perf = window.performance;
    if (perf && perf.timing) {
        duration = Date.now() - perf.timing.connectStart;
    }
    return duration;
};

const POST = (url, jsonPayload) => {
    const req = new XMLHttpRequest();
    req.open('POST', url);
    req.setRequestHeader('Content-type', 'application/json');
    req.send(JSON.stringify(jsonPayload));
    return req;
};
