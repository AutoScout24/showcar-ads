export const isEnabled = (domain) => {
    const isFeatureShouldBeOff = location.hash.indexOf('ads-do-not-use-openx') >= 0;

    if (isFeatureShouldBeOff) {
        return false;
    }

    const isCorrectCountry = domain === 'nl';
    const isFeatureFlagOn = location.hash.indexOf('ads-use-openx') >= 0;

    return isCorrectCountry || isFeatureFlagOn;
};

export const getScriptUrl = (domain, language) => {
    const urls = {
        de: 'https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout',
        at: 'https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-at',
        it: 'https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-it',
        nl: 'https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-nl',
        es: 'https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-es',
        fr: 'https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-fr',
        be: 'https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-be-{lang}',
        lu: 'https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-lu'
    };

    return (urls[domain] || urls['de']).replace('{lang}', language);
};
