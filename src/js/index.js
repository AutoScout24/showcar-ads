import waitUntilAdsCanBeLoaded from './ads-can-be-loaded';

import registerAdSlotElement from './as24-ad-slot';
import registerAdTargetingElement, { getTargetingData } from './as24-ad-targeting';
import { gptinit } from './double-click-ad-slots';
import { loadScript, ready as domready } from './dom';
import { loadIndexExchange } from './indexexchange';
import { loadAPS } from './aps';
import * as OpenX from './openx';
import * as NewOpenX from './new-openx';

waitUntilAdsCanBeLoaded()
    .then(domready)
    .then(() => {
        loadIndexExchange();
        gptinit();
        registerAdSlotElement();
        registerAdTargetingElement();
        loadAPS();
    })
    .then(() => {
        if (NewOpenX.isEnabled()) {
            return NewOpenX.init().then(() => loadScript('https://www.googletagservices.com/tag/js/gpt.js'));
        } else {
            const tld = location.hostname.split('.').pop();
            const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
            const lang = htmlLang.split('-')[0];
            const useOpenX = OpenX.isEnabled(tld);


            if (!useOpenX) {
                loadScript('https://www.googletagservices.com/tag/js/gpt.js');
            }

            if (useOpenX) {
                const convertSizes = sizes => {
                    return JSON.parse(sizes).filter(x => Array.isArray(x) && x.length === 2).map(x => x.join('x'));
                };

                const activeSlots = Array.from(document.querySelectorAll('as24-ad-slot[sizes]:not([sizes="[]"]):not([out-of-page]):not([immediate]):not([openx-ignore])'));

                window.OX_dfp_ads = activeSlots.map(element => [element.getAttribute('ad-unit'), convertSizes(element.getAttribute('sizes')), element.children[0].id]);

                window.OX_cmds = window.OX_cmds || [];
                window.OX_cmds.push(function() {
                    var oAR = (window.OX && window.OX.AdRequest);
                    if (oAR) {
                        window.OX.AdRequest = function() {
                            var ret = oAR.apply(this, arguments);
                            const targeting = getTargetingData('as24-ad-targeting');

                            if (targeting.splz) {
                                this.addVariable('splz', targeting.splz);
                            }

                            if (targeting.zip2) {
                                this.addVariable('zipcode', targeting.zip2);
                            }

                            return ret;
                        };

                        window.OX.prototype = oAR.prototype;
                    }
                });

                const openxScriptUrl = OpenX.getScriptUrl(tld, lang);
                loadScript(openxScriptUrl);

                var oxTimeout;
                const oxCallback = () => {
                    clearTimeout(oxTimeout);
                    loadScript('https://www.googletagservices.com/tag/js/gpt.js');
                };

                oxTimeout = setTimeout(oxCallback, 1500);
                window.OX_dfp_options = {callback: oxCallback};
            }
        }
    })
    .catch(e => {
        window.console.warn(e);
    });
