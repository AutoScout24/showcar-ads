export const isEnabled = (domain) => {
    return domain === 'de' || domain === 'at' || domain === 'it' || location.hash.indexOf('ads-use-openx') >= 0;
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
