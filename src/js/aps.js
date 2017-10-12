const loadAPSJSLibrary = () => {
    //Load the APS JavaScript Library - code form aps docs
    !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r]);}a[a9]={init:function(){q('i',arguments);},fetchBids:function(){q('f',arguments);},setDisplayBids:function(){},targetingKeys:function(){return[];},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g);}('apstag',window,document,'script','//c.amazon-adsystem.com/aax2/apstag.js');
};

export const isEnabled = () => {
    return location.hash.indexOf('ads-use-aps') >= 0;
};

export const loadAPS = () => {
    if (!isEnabled()) return false;

    // (DE, AT, NL, IT)
    // const tld = location.hostname.split('.').pop();
    loadAPSJSLibrary();

    //Initialize the Library
    window.apstag.init({
        pubID: '3620',
        adServer: 'googletag'
    });
};