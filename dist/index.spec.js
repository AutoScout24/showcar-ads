function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}function isObject$1(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function getRawTag$1(e){var t=hasOwnProperty.call(e,symToStringTag$1),n=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var o=!0}catch(e){}var i=nativeObjectToString.call(e);return o&&(t?e[symToStringTag$1]=n:delete e[symToStringTag$1]),i}function objectToString$1(e){return nativeObjectToString$1.call(e)}function baseGetTag$1(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e)}function isObjectLike$1(e){return null!=e&&"object"==typeof e}function isSymbol$1(e){return"symbol"==typeof e||isObjectLike(e)&&baseGetTag(e)==symbolTag}function toNumber$1(e){if("number"==typeof e)return e;if(isSymbol(e))return NAN;if(isObject$2(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject$2(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var n=reIsBinary.test(e);return n||reIsOctal.test(e)?freeParseInt(e.slice(2),n?2:8):reIsBadHex.test(e)?NAN:+e}function debounce(e,t,n){function o(t){var n=p,o=f;return p=f=void 0,x=t,m=e.apply(o,n)}function i(e){return x=e,b=setTimeout(s,t),v?o(e):m}function r(e){var n=e-h,o=e-x,i=t-n;return y?nativeMin(i,g-o):i}function a(e){var n=e-h,o=e-x;return void 0===h||n>=t||n<0||y&&o>=g}function s(){var e=now();if(a(e))return c(e);b=setTimeout(s,r(e))}function c(e){return b=void 0,w&&p?o(e):(p=f=void 0,m)}function u(){void 0!==b&&clearTimeout(b),x=0,p=h=f=b=void 0}function l(){return void 0===b?m:c(now())}function d(){var e=now(),n=a(e);if(p=arguments,f=this,h=e,n){if(void 0===b)return i(h);if(y)return b=setTimeout(s,t),o(h)}return void 0===b&&(b=setTimeout(s,t)),m}var p,f,g,m,b,h,x=0,v=!1,y=!1,w=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return t=toNumber(t)||0,isObject(n)&&(v=!!n.leading,y="maxWait"in n,g=y?nativeMax(toNumber(n.maxWait)||0,t):g,w="trailing"in n?!!n.trailing:w),d.cancel=u,d.flush=l,d}function head(e){return e&&e.length?e[0]:void 0}function last(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}function retrieve(e){try{var t,n="kx"+e;return window.localStorage?window.localStorage[n]||"":navigator.cookieEnabled?(t=document.cookie.match(n+"=([^;]*)"))&&window.unescape(t[1])||"":""}catch(e){return""}}function truncateSegmentsToMaxChars(e,t){for(var n="%252C".length,o=[],i=0,r=0;r<e.length;r++){var a=e[r].length+n;if(!(i+a<=t))break;o.push(e[r]),i+=a}return o}var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},chaiAsPromised=createCommonjsModule(function(e,t){!function(){"use strict";function n(e,t){function o(e){return"function"!=typeof e.catch&&"function"==typeof e.always&&"function"==typeof e.done&&"function"==typeof e.fail&&"function"==typeof e.pipe&&"function"==typeof e.progress&&"function"==typeof e.state}function i(e){if("function"!=typeof e._obj.then)throw new TypeError(t.inspect(e._obj)+" is not a thenable.");if(o(e._obj))throw new TypeError("Chai as Promised is incompatible with thenables of jQuery<3.0.0, sorry! Please upgrade jQuery or use another Promises/A+ compatible library (see http://promisesaplus.com/).")}function r(e,n){t.addMethod(p.prototype,e,function(){return i(this),n.apply(this,arguments)})}function a(e,n){t.addProperty(p.prototype,e,function(){return i(this),n.apply(this,arguments)})}function s(e,t){e.then(function(){t()},t)}function c(e,t,n){e.assert(!0,null,t,n.expected,n.actual)}function u(e,t,n){e.assert(!1,t,null,n.expected,n.actual)}function l(e){return"function"==typeof e.then?e:e._obj}function d(e,o,i){if(!t.flag(o,"eventually"))return e.apply(o,i);var r=l(o).then(function(e){return o._obj=e,t.flag(o,"eventually",!1),i?n.transformAsserterArgs(i):i}).then(function(t){return e.apply(o,t),o._obj});n.transferPromiseness(o,r)}var p=e.Assertion,f=e.assert,g=Object.getOwnPropertyNames(p.prototype),m={};g.forEach(function(e){m[e]=Object.getOwnPropertyDescriptor(p.prototype,e)}),a("fulfilled",function(){var e=this,t=l(e).then(function(t){return e._obj=t,c(e,"expected promise not to be fulfilled but it was fulfilled with #{act}",{actual:t}),t},function(t){u(e,"expected promise to be fulfilled but it was rejected with #{act}",{actual:t})});n.transferPromiseness(e,t)}),a("rejected",function(){var e=this,t=l(e).then(function(t){return e._obj=t,u(e,"expected promise to be rejected but it was fulfilled with #{act}",{actual:t}),t},function(t){return c(e,"expected promise not to be rejected but it was rejected with #{act}",{actual:t}),t});n.transferPromiseness(e,t)}),r("rejectedWith",function(e,o){var i=null,r=null;e instanceof RegExp||"string"==typeof e?(o=e,e=null):e&&e instanceof Error?(i=e,e=null,o=null):"function"==typeof e?r=(new e).name:e=null;var a=this,s=l(a).then(function(t){var n=null,s=null;if(e)n="expected promise to be rejected with #{exp} but it was fulfilled with #{act}",s=r;else if(o){var c=o instanceof RegExp?"matching":"including";n="expected promise to be rejected with an error "+c+" #{exp} but it was fulfilled with #{act}",s=o}else i&&(n="expected promise to be rejected with #{exp} but it was fulfilled with #{act}",s=i);a._obj=t,u(a,n,{expected:s,actual:t})},function(n){e&&a.assert(n instanceof e,"expected promise to be rejected with #{exp} but it was rejected with #{act}","expected promise not to be rejected with #{exp} but it was rejected with #{act}",r,n);var s="object"===t.type(n)&&"message"in n?n.message:""+n;o&&null!==s&&void 0!==s&&(o instanceof RegExp&&a.assert(o.test(s),"expected promise to be rejected with an error matching #{exp} but got #{act}","expected promise not to be rejected with an error matching #{exp}",o,s),"string"==typeof o&&a.assert(-1!==s.indexOf(o),"expected promise to be rejected with an error including #{exp} but got #{act}","expected promise not to be rejected with an error including #{exp}",o,s)),i&&a.assert(n===i,"expected promise to be rejected with #{exp} but it was rejected with #{act}","expected promise not to be rejected with #{exp}",i,n)});n.transferPromiseness(a,s)}),a("eventually",function(){t.flag(this,"eventually",!0)}),r("notify",function(e){s(l(this),e)}),r("become",function(e,t){return this.eventually.deep.equal(e,t)}),g.filter(function(e){return"assert"!==e&&"function"==typeof m[e].value}).forEach(function(e){p.overwriteMethod(e,function(e){return function(){d(e,this,arguments)}})}),g.filter(function(e){return"_obj"!==e&&"function"==typeof m[e].get}).forEach(function(e){p.prototype.__methods.hasOwnProperty(e)?p.overwriteChainableMethod(e,function(e){return function(){d(e,this,arguments)}},function(e){return function(){d(e,this)}}):p.overwriteProperty(e,function(e){return function(){d(e,this)}})});var b=Object.getOwnPropertyNames(f).filter(function(e){return"function"==typeof f[e]});f.isFulfilled=function(e,t){return new p(e,t).to.be.fulfilled},f.isRejected=function(e,t,n){"string"==typeof t&&(n=t,t=void 0);var o=new p(e,n);return void 0!==t?o.to.be.rejectedWith(t):o.to.be.rejected},f.becomes=function(e,t,n){return f.eventually.deepEqual(e,t,n)},f.doesNotBecome=function(e,t,n){return f.eventually.notDeepEqual(e,t,n)},f.eventually={},b.forEach(function(n){f.eventually[n]=function(o){var i,r=Array.prototype.slice.call(arguments,1),a=arguments[f[n].length-1];"string"==typeof a&&(i=function(n){throw new e.AssertionError(a+"\n\nOriginal reason: "+t.inspect(n))});var c=o.then(function(e){return f[n].apply(f,[e].concat(r))},i);return c.notify=function(e){s(c,e)},c}})}"function"==typeof commonjsRequire&&"object"==typeof t&&"object"==typeof e?e.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):(chai.use(n),self.chaiAsPromised=n),n.transferPromiseness=function(e,t){e.then=t.then.bind(t)},n.transformAsserterArgs=function(e){return e}}()}),waitUntilAdsCanBeLoaded=function(){return new Promise(function(e,t){var n=window.location,o=document.cookie,i=n.href.indexOf("ads-off=true")>=0,r=o.indexOf("CustomerType=D")>=0,a=o.indexOf("testrun=true")>=0,s="www.autoscout24.de"==n.host&&n.href.indexOf("/angebote/")>=0;if(i||r&&!s||a)return void t();!function(){var e=n.hostname,t=/\.(nl|it)$/.test(e)||n.hash.indexOf("cookie-consent-needed")>=0,i=o.indexOf("cookieConsent=1;")>=0;return t&&!i}()?e():window.addEventListener("cookie-consent-given",e)})};chai.use(chaiAsPromised),describe("Loading ads",function(){afterEach(function(){document.cookie="User=;expires=0",window.location.hash=""}),it("Do not load ads when ads=off in URL",function(){return window.location.hash="ads-off=true",waitUntilAdsCanBeLoaded().should.be.rejected}),it("Do not load ads when user is a dealer",function(){return document.cookie="User=CustomerType=D;",waitUntilAdsCanBeLoaded().should.be.rejected}),it("Wait until cookie consent is given",function(){return window.location.hash="cookie-consent-needed",setTimeout(function(){return window.dispatchEvent(new Event("cookie-consent-given",{bubbles:!0}))}),waitUntilAdsCanBeLoaded().should.eventually.be.fulfilled})});var uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},getAttribute=function(e,t,n){return e&&e.getAttribute&&e.getAttribute(t)||n},hasAttribute=function(e,t){return e&&e.hasAttribute(t)},setAttribute=function(e,t,n){return e&&e.setAttribute(t,n)},removeAttribute=function(e,t){return e&&e.removeAttribute(t)},isElementInViewport=function(e,t){if(void 0===t&&(t=0),!e||!document.body.contains(e))return!1;var n=e.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return n.bottom>0-t&&n.top<o+t&&n.right>0-t&&n.left<i+t},addCss=function(e){var t=document.createElement("style");t.innerHTML=e,document.querySelector("head").appendChild(t)},isObject_1=isObject$1,freeGlobal$1="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal$1,freeGlobal=_freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root$1=freeGlobal||freeSelf||Function("return this")(),_root=root$1,root=_root,now$1=function(){return root.Date.now()},now_1=now$1,root$2=_root,Symbol$1=root$2.Symbol,_Symbol=Symbol$1,Symbol$2=_Symbol,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag$1=Symbol$2?Symbol$2.toStringTag:void 0,_getRawTag=getRawTag$1,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString,_objectToString=objectToString$1,Symbol=_Symbol,getRawTag=_getRawTag,objectToString=_objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol?Symbol.toStringTag:void 0,_baseGetTag=baseGetTag$1,isObjectLike_1=isObjectLike$1,baseGetTag=_baseGetTag,isObjectLike=isObjectLike_1,symbolTag="[object Symbol]",isSymbol_1=isSymbol$1,isObject$2=isObject_1,isSymbol=isSymbol_1,NAN=NaN,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,toNumber_1=toNumber$1,isObject=isObject_1,now=now_1,toNumber=toNumber_1,FUNC_ERROR_TEXT="Expected a function",nativeMax=Math.max,nativeMin=Math.min,debounce_1$1=debounce,gt$1=function(){return window.googletag||(window.googletag={cmd:[]})},tld=location.hostname.split(".").pop(),isDE="de"===tld,isAT="at"===tld,isIT="it"===tld,isNL="nl"===tld,isCorrectCountry=isDE||isAT||isIT||isNL,isFeatureFlagOn=location.hash.indexOf("ads-use-aps")>=0,isEnabled=function(){return isCorrectCountry||isFeatureFlagOn},slotsCache={},destroyAdSlotById=function(e){var t=slotsCache[e].slot;gt$1().cmd.push(function(){return gt$1().destroySlots([t])})},refreshAdSlotById=function(e){var t=slotsCache[e];t&&(t.waitsForRefresh=!0,refreshAdslotsWaitingToBeRefreshed())},register=function(e){var t=e.adunit,n=e.container,o=e.outOfPage,i=e.sizeMapping,r=e.slotElement,a=e.immediate,s=e.collapseEmpty,c=e.openxIgnore,u=e.preload;void 0===u&&(u=0);var l=uuid(),d={refresh:function(){return refreshAdSlotById(l)},destroy:function(){return destroyAdSlotById(l)}};return slotsCache[l]={ret:d,container:n,slotElement:r,preload:u},gt$1().cmd.push(function(){var e=gt$1().pubads(),r=o?gt$1().defineOutOfPageSlot(t,n.id).addService(e):gt$1().defineSlot(t,[],n.id).defineSizeMapping(i).addService(e);s&&r.setCollapseEmptyDiv(!0),gt$1().display(n.id),slotsCache[l].slot=r,slotsCache[l].outOfPage=o,slotsCache[l].immediate=a,slotsCache[l].openxIgnore=c,refreshAdSlotById(l)}),d},refreshOxBids=!1,refreshAdslotsWaitingToBeRefreshed=debounce_1$1(function(){var e=[];Object.keys(slotsCache).forEach(function(t){var n=slotsCache[t];n.waitsForRefresh&&(n.outOfPage||isElementInViewport(n.slotElement,n.preload)||n.immediate)&&(e.push(n),n.waitsForRefresh=!1,n.ret.onrefresh&&n.ret.onrefresh())}),e.length>0&&gt$1().cmd.push(function(){var t=window.OX&&window.OX.dfp_bidder&&window.OX.dfp_bidder.refresh&&window.OX.dfp_bidder.setOxTargeting,n=isEnabled(),o=e.filter(function(e){return!e.openxIgnore}).map(function(e){return e.slot}),i=e.map(function(e){return e.slot}),r=e.filter(function(e){return!e.openxIgnore}),a=r.map(function(e){return{slotID:e.slot.getSlotElementId(),slotName:e.slot.getAdUnitPath(),sizes:JSON.parse(e.slotElement.getAttribute("sizes")).filter(function(e){return e[0]>20&&e[1]>20})}}).filter(function(e){return e.sizes.length>0});Promise.all([function(){return refreshOxBids?new Promise(function(e){setTimeout(e,1500),window.OX.dfp_bidder.refresh(e)}):Promise.resolve()}(),function(){return n?new Promise(function(e){setTimeout(e,1500),window.apstag.fetchBids({slots:a,timeout:1500},e)}):Promise.resolve()}()]).then(function(){t&&(refreshOxBids=!0,window.OX.dfp_bidder.setOxTargeting(o)),n&&window.apstag.setDisplayBids(),gt$1().pubads().refresh(i,{changeCorrelator:!1})})})},50),findXIdByGptSlot=function(e){var t=Object.keys(slotsCache).filter(function(t){return slotsCache[t].slot===e}).map(function(e){return slotsCache[e]});return t.length?t[0]:null};gt$1().cmd.push(function(){gt$1().pubads().addEventListener("slotRenderEnded",function(e){var t=findXIdByGptSlot(e.slot);e.isEmpty?t&&t.ret.onempty&&t.ret.onempty():t&&t.ret.onload&&t.ret.onload()})}),window.addEventListener("load",refreshAdslotsWaitingToBeRefreshed),window.addEventListener("scroll",refreshAdslotsWaitingToBeRefreshed),window.addEventListener("animationend",refreshAdslotsWaitingToBeRefreshed),window.addEventListener("transitionend",refreshAdslotsWaitingToBeRefreshed);var head_1=head,first=head_1,last_1=last,parseResolution=function(e){if(/fluid/.test(e))return"fluid";var t=e.replace(/[\s]/g,"").match(/([\d]+)x([\d]+)/i);return t&&t[2]?[0|t[1],0|t[2]]:null},parseAttributes=function(e){return Array.from(e).filter(function(e){return/size-map-/.test(e.nodeName)}).map(function(e){return[parseResolution(e.nodeName),e.value.split(",").map(parseResolution).filter(function(e){return"fluid"===e||Array.isArray(e)&&2===e.length})]})},consolidateSizeMapping=function(e){var t=e.sort(function(e,t){return t[0][0]-e[0][0]||t[0][1]-e[0][1]});return function(t){var n=last_1(t);return n&&0===n[0][0]&&0===n[0][1]||e.push([[0,0],[]]),e}(t)},getEligibleSizesForResolution=function(e,t){var n=first(e.filter(function(e){return"fluid"===e||e[0][0]<=t.x&&e[0][1]<=t.y}));return n&&n[1]||[]},parseAttributesIntoValidMapping=function(e){var t=parseAttributes(e);return consolidateSizeMapping(t)},styles="as24-ad-slot{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}as24-ad-slot>div{display:inline-block}as24-ad-slot{background-image:url(data:image/svg+xml;charset=utf-8,%3Csvg%20id%3D%22Ebene_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22141.7%22%20height%3D%2270.7%22%20viewBox%3D%220%200%20141.7%2070.7%22%3E%3Cstyle%3E%3C%21%5BCDATA%5B%0D%0A%09.st0%7Bfill%3A%23C4C4C4%3B%7D%0D%0A%5D%5D%3E%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M14.7%2061.4h-.2c-2.8%200-5.2-1.9-5.2-5.2%200-2%203-2%203%200%200%201.4.9%202.2%202.2%202.2h.2c1.3%200%202.3-.7%202.3-2%200-3.2-7.5-3.5-7.5-8.3v-.5c0-2.8%202.8-4.4%205-4.4h.2c2.7%200%205%201.7%205%204.1%200%201.9-3%202-3%20.1%200-.7-.8-1.2-2.1-1.2h-.2c-1.1%200-2%20.6-2%201.6v.4c0%202%207.5%202.9%207.5%208.3.1%202.9-2.2%204.9-5.2%204.9zM27.7%2061.4h-.2c-2.8%200-5.2-2.2-5.2-5.1v-8.1c0-2.9%202.3-5%205.2-5h.2c2.6%200%204.8%201.8%205.1%204.3v.3c0%20.9-.8%201.4-1.5%201.4s-1.3-.4-1.4-1.3c-.2-1.1-1.1-1.8-2.2-1.8h-.2c-1.2%200-2.2.9-2.2%202.1v8.1c0%201.2%201%202.1%202.2%202.1h.2c1.1%200%202-.7%202.2-1.8.1-.9.8-1.3%201.4-1.3.8%200%201.5.5%201.5%201.4v.3c-.3%202.6-2.5%204.4-5.1%204.4zM40.4%2061.4h-.2c-2.8%200-5.2-2.2-5.2-5.1v-8c0-2.9%202.3-5.1%205.2-5.1h.2c2.9%200%205.2%202.2%205.2%205.1v8c-.1%202.9-2.4%205.1-5.2%205.1zm2.2-13.1c0-1.2-1-2.1-2.2-2.1h-.2c-1.2%200-2.2.9-2.2%202.1v8c0%201.2%201%202.1%202.2%202.1h.2c1.2%200%202.2-.9%202.2-2.1v-8zM54%2061.4h-.2c-2.8%200-5.2-2.3-5.2-5.2V44.8c0-1%20.7-1.5%201.5-1.5.7%200%201.5.5%201.5%201.5v11.5c0%201.2%201%202.2%202.2%202.2h.2c1.2%200%202.2-1%202.2-2.2V44.8c0-1%20.7-1.5%201.5-1.5s1.5.5%201.5%201.5v11.5c0%202.8-2.3%205.1-5.2%205.1zM69.8%2046.4h-2.1v13.5c0%201-.7%201.5-1.5%201.5-.7%200-1.5-.5-1.5-1.5V46.4h-2.1c-1%200-1.5-.7-1.5-1.5%200-.7.5-1.5%201.5-1.5h7.1c1%200%201.5.7%201.5%201.5.1.7-.4%201.5-1.4%201.5zM83.7%2061.2H77c-1%200-1.5-.9-1.5-1.8%200-.3.1-.6.2-.9l5.9-9.4c.3-.5.3-.8.3-1.2v-.2c0-.8-.7-1.5-1.5-1.5h-.1c-.9%200-1.5.7-1.5%201.5v.3c0%201-.8%201.5-1.5%201.5s-1.5-.5-1.5-1.5v-.4c0-2.5%202-4.3%204.5-4.3h.1c2.4%200%204.5%201.8%204.5%204.3v.3c0%201-.4%201.8-.9%202.7l-4.7%207.7h4.5c1%200%201.5.7%201.5%201.5-.1.7-.6%201.4-1.6%201.4zM95.5%2057.7h-.6v2.2c0%201-.7%201.5-1.5%201.5s-1.4-.5-1.4-1.5v-2.2h-4.1c-1%200-1.7-.6-1.7-1.6%200-.3.1-.6.2-.8l4.8-11.2c.3-.6.8-.9%201.3-.9.8%200%201.5.6%201.5%201.4%200%20.2%200%20.4-.1.6l-4.3%209.4H92v-1.5c0-1%20.7-1.5%201.5-1.5s1.5.5%201.5%201.5v1.5h.6c1%200%201.5.7%201.5%201.5s-.6%201.6-1.6%201.6zM16.3%2014.6l-1.7%205.5h3.3zM54.7%2024.3h.2c1.2%200%202.2-.9%202.2-2.1v-8c0-1.2-1-2.1-2.2-2.1h-.2c-1.2%200-2.2.9-2.2%202.1v8c0%201.2%201%202.1%202.2%202.1z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M0%200v70.7h123.3c10.1%200%2018.4-8.2%2018.4-18.3V0H0zm49.5%2014.2c0-2.9%202.3-5.1%205.2-5.1h.2c2.9%200%205.2%202.2%205.2%205.1v8c0%202.9-2.3%205.1-5.2%205.1h-.2c-2.8%200-5.2-2.2-5.2-5.1v-8zm-10.4-5h7.1c1%200%201.5.7%201.5%201.5%200%20.7-.5%201.5-1.5%201.5h-2.1v13.5c0%201-.7%201.5-1.5%201.5-.7%200-1.5-.5-1.5-1.5V12.2H39c-1%200-1.5-.8-1.5-1.5.1-.7.6-1.5%201.6-1.5zm-14.3%201.4c0-1%20.7-1.5%201.5-1.5.7%200%201.5.5%201.5%201.5v11.5c0%201.2%201%202.2%202.2%202.2h.2c1.2%200%202.2-1%202.2-2.2V10.6c0-1%20.7-1.5%201.5-1.5.7%200%201.5.5%201.5%201.5v11.5c0%202.8-2.3%205.2-5.2%205.2H30c-2.8%200-5.2-2.3-5.2-5.2V10.6zM9.9%2025.3l4.7-14.9c.4-1.2%201-1.3%201.7-1.3.6%200%201.3.1%201.7%201.3l4.7%2014.9c.1.2.1.3.1.5%200%20.9-.8%201.4-1.5%201.4-.6%200-1.2-.3-1.4-1.1l-1-3.1h-5.1l-1%203.1c-.2.7-.8%201.1-1.4%201.1-.8%200-1.5-.6-1.5-1.4-.1-.2-.1-.3%200-.5zm129.6%2027.2c0%208.7-7.2%2016-16.2%2016H2.2V35.3h137.3v17.2z%22%2F%3E%3C%2Fsvg%3E);background-size:70px 35px;background-position:center center;background-repeat:no-repeat;position:relative}as24-ad-slot[out-of-page],.sc-ads-no-placeholder,.sc-ads-silent-placeholder,as24-ad-slot[loaded]:not([empty]){background-image:none}.sc-ads-silent-placeholder>div{box-shadow:inset 0 0 1px #cdcdcd}.sc-ads-silent-placeholder[loaded]:not([empty])>div{box-shadow:none}as24-ad-slot[loaded][ad-label]:not([empty]):before{content:attr(ad-label);position:absolute;top:-17px;display:inline-block;font-size:0.8125rem}\n",registerElement=function(e){void 0===e&&(e="as24-ad-slot");var t=Object.create(HTMLElement.prototype,{attachedCallback:{value:function(){var e=this,t={x:window.innerWidth,y:window.innerHeight},n=parseAttributesIntoValidMapping(this.attributes),o=getEligibleSizesForResolution(n,t),i=o&&o.length>0;if(setAttribute(this,"size-mapping",JSON.stringify(n)),setAttribute(this,"sizes",JSON.stringify(o)),!i)return setAttribute(this,"empty",""),void this.dispatchEvent(new Event("ad-slot-empty"),{bubbles:!0});var r="ad-"+uuid(),a=getAttribute(this,"ad-unit"),s=hasAttribute(this,"out-of-page"),c=hasAttribute(this,"immediate"),u=hasAttribute(this,"collapse-empty"),l=hasAttribute(this,"openx-ignore"),d=0|getAttribute(this,"preload"),p=this.container=document.createElement("div");if(p.id=r,this.appendChild(p),!u){var f=o.filter(function(e){return"fluid"!==e}).sort(function(e,t){return e[1]-t[1]}),g=f[0][1],m=f[0][0];p.style.minHeight=this.style.minHeight=g+"px",p.style.minWidth=this.style.minWidth=m+"px"}this.adslot=register({adunit:a,outOfPage:s,sizeMapping:n,container:p,slotElement:this,immediate:c,collapseEmpty:u,openxIgnore:l,preload:d}),this.adslot.onempty=function(){setAttribute(e,"empty",""),e.dispatchEvent(new Event("ad-slot-empty"),{bubbles:!0})},this.adslot.onload=function(){if(setAttribute(e,"loaded",""),e.className+=" rnd-"+(1e4*Math.random()|0),e.dispatchEvent(new Event("ad-slot-loaded"),{bubbles:!0}),!u){var t=parseInt(e.style.minHeight,10),n=p.clientHeight,o=parseInt(e.style.minWidth,10),i=p.clientWidth;e.style.minHeight=Math.max(t,n)+"px",e.style.minWidth=Math.max(o,i)+"px"}},this.adslot.onrefresh=function(){removeAttribute(e,"loaded"),removeAttribute(e,"empty")}}},detachedCallback:{value:function(){this.adslot&&this.adslot.destroy()}},refreshAdSlot:{value:function(){this.adslot&&(this.container.innerHTML="",this.adslot.refresh())}}}),n=styles.replace(/as24-ad-slot/g,e);addCss(n),document.registerElement(e,{prototype:t})},mockGoogletag=function(){var e={},t={clearTargeting:function(t){delete e[t]},getTargetingKeys:function(){return Object.keys(e)},setTargeting:function(t,n){e[t]=n},enableSingleRequest:function(){},disableInitialLoad:function(){},collapseEmptyDivs:function(){}};window.googletag={cmd:[],enableServices:function(){},pubads:function(){return t}}},testContainer=document.createElement("div");document.body.appendChild(testContainer),describe("The as24-ad-slot element",function(){var e;beforeEach(function(){e="x-"+uuid(),mockGoogletag(),registerElement(e)}),it("Correctly parsing size-mapping from size-map-*x* attributes",function(){testContainer.innerHTML="<"+e+' size-map-0x0="300x50, 320x100" size-map-728x300="728x90, 300x50"></'+e+">";var t=document.querySelector(""+e),n=JSON.parse(t.getAttribute("size-mapping"));expect(n).to.deep.equal([[[728,300],[[728,90],[300,50]]],[[0,0],[[300,50],[320,100]]]])}),it("Automatically sets size map for 0x0 to empty array",function(){testContainer.innerHTML="<"+e+' size-map-728x300="728x90, 300x50"></'+e+">";var t=document.querySelector(""+e),n=JSON.parse(t.getAttribute("size-mapping"));expect(n).to.deep.equal([[[728,300],[[728,90],[300,50]]],[[0,0],[]]])}),it("Elements have refreshAdSlot method",function(){var t=document.createElement(e);expect(t.refreshAdSlot).to.be.exist})});var kruxSegmentsCharacterLimit=4500,retrieveUser=function(){return retrieve("user")},retrieveSegments=function(){return truncateSegmentsToMaxChars(retrieve("segs")&&retrieve("segs").split(",")||[],kruxSegmentsCharacterLimit)},registerElement$2=function(e){void 0===e&&(e="as24-ad-targeting");var t=window.googletag||(window.googletag={cmd:[]}),n=function(){var n=getTargetingData(e);t.cmd.push(function(){var e=t.pubads();e.getTargetingKeys().forEach(function(t){return e.clearTargeting(t)});for(var o in n){var i=(""+n[o]).split(",");e.setTargeting(o,i)}var r=retrieveUser();r&&e.setTargeting("kuid",r);var a=retrieveSegments();a&&a.length>0&&e.setTargeting("ksg",retrieveSegments())})},o=Object.create(HTMLElement.prototype,{attachedCallback:{value:n},detachedCallback:{value:n}});addCss(e+"{display:none}"),document.registerElement(e,{prototype:o})},getTargetingData=function(e){var t=Array.from(document.querySelectorAll(e)||[]),n=t.map(function(e){return JSON.parse(e.innerHTML.trim()||"{}")}),o={};return n.forEach(function(e){return Object.assign(o,e)}),o},testContainer$1=document.createElement("div");document.body.appendChild(testContainer$1),describe("The as24-ad-targeting element",function(){var e;beforeEach(function(){mockGoogletag(),e="x-"+uuid()}),afterEach(function(e){testContainer$1.innerHTML="",delete window.googletag,setTimeout(e,100)}),it("Sets targeting correctly with only one element",function(){var t=sinon.spy(window.googletag.pubads(),"setTargeting");registerElement$2(e),testContainer$1.innerHTML+="<"+e+'>{ "a": 1, "b": 2 }</'+e+">",window.googletag.cmd.forEach(function(e){e()}),expect(t.callCount).to.equal(2),expect(t.firstCall.calledWith("a",["1"])).to.be.true,expect(t.secondCall.calledWith("b",["2"])).to.be.true}),it("Sets targeting corectly and clears out old values with multiple elements",function(){var t=sinon.spy(window.googletag.pubads(),"setTargeting"),n=sinon.spy(window.googletag.pubads(),"clearTargeting");registerElement$2(e),testContainer$1.innerHTML="<"+e+'>{ "a": 1, "b": 2 }</'+e+"><"+e+'>{ "b": 3, "c": 4, "d": 5 }</'+e+">",window.googletag.cmd.forEach(function(e){return e()}),expect(window.googletag.pubads().getTargetingKeys()).to.deep.equal(["a","b","c","d"]),expect(n.callCount).to.equal(4),expect(t.callCount).to.equal(8)}),it("Sets Krux parameters correctly from localStorage or cookie",function(){var t=sinon.spy(window.googletag.pubads(),"setTargeting");localStorage.setItem("kxuser","user"),localStorage.setItem("kxsegs","seg1,seg2"),registerElement$2(e),testContainer$1.innerHTML+="<"+e+'>{ "a": 1 }</'+e+">",window.googletag.cmd.forEach(function(e){e()}),expect(t.callCount).to.equal(3),expect(t.firstCall.calledWith("a",["1"])).to.be.true,expect(t.secondCall.calledWith("kuid","user")).to.be.true,expect(t.thirdCall.calledWith("ksg",["seg1","seg2"])).to.be.true,localStorage.removeItem("kxuser"),localStorage.removeItem("kxsegs")})});var createAttribute=function(e,t){return{nodeName:e,value:t}};describe("Size mapping",function(){it("Happy case",function(){var e=[createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-728x200","600x100")],t=parseAttributesIntoValidMapping(e);expect(t).to.deep.equal([[[728,200],[[600,100]]],[[0,0],[[300,100],[300,50]]]])}),it("Without 0x0 mapping, default empty sizes array should be added",function(){var e=[createAttribute("size-map-728x200","600x100")],t=parseAttributesIntoValidMapping(e);expect(t).to.deep.equal([[[728,200],[[600,100]]],[[0,0],[]]])}),it("Size mapping should be sorted by resolution from greater to smaller",function(){var e=[createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-728x200","600x100"),createAttribute("size-map-1024x0","600x300, 600x100"),createAttribute("size-map-1400x1","600x400, 600x300"),createAttribute("size-map-1400x0","600x400, 600x300")],t=[createAttribute("size-map-1400x1","600x400, 600x300"),createAttribute("size-map-1400x0","600x400, 600x300"),createAttribute("size-map-1024x0","600x300, 600x100"),createAttribute("size-map-728x200","600x100"),createAttribute("size-map-0x0","300x100, 300x50")],n=[createAttribute("size-map-728x200","600x100"),createAttribute("size-map-1024x0","600x300, 600x100"),createAttribute("size-map-1400x0","600x400, 600x300"),createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-1400x1","600x400, 600x300")],o=[createAttribute("size-map-728x200","600x100"),createAttribute("size-map-1400x0","600x400, 600x300"),createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-1400x1","600x400, 600x300"),createAttribute("size-map-1024x0","600x300, 600x100")],i=[[[1400,1],[[600,400],[600,300]]],[[1400,0],[[600,400],[600,300]]],[[1024,0],[[600,300],[600,100]]],[[728,200],[[600,100]]],[[0,0],[[300,100],[300,50]]]];expect(parseAttributesIntoValidMapping(e)).to.deep.equal(i),expect(parseAttributesIntoValidMapping(t)).to.deep.equal(i),expect(parseAttributesIntoValidMapping(n)).to.deep.equal(i),expect(parseAttributesIntoValidMapping(o)).to.deep.equal(i)}),it("Empty mapping should be tolerated",function(){var e=[];expect(parseAttributesIntoValidMapping(e)).to.deep.equal([[[0,0],[]]])}),it("Mapping with empty sizes is tolerated",function(){var e=[createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-1024x768","600x300, 600x100"),createAttribute("size-map-728x200","")];expect(parseAttributesIntoValidMapping(e)).to.deep.equal([[[1024,768],[[600,300],[600,100]]],[[728,200],[]],[[0,0],[[300,100],[300,50]]]])}),it("getEligibleSizesForResolution",function(){var e=[],t=parseAttributesIntoValidMapping([createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-1024x768","600x300, 600x100"),createAttribute("size-map-728x200","")]),n={x:1024,y:768},o={x:460,y:240},i={x:800,y:600};expect(getEligibleSizesForResolution(e,n)).to.deep.equal([]),expect(getEligibleSizesForResolution(t,n)).to.deep.equal([[600,300],[600,100]]),expect(getEligibleSizesForResolution(t,o)).to.deep.equal([[300,100],[300,50]]),expect(getEligibleSizesForResolution(t,i)).to.deep.equal([])}),it('"fluid" size should be supported',function(){var e=[createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-1024x768","600x300, 600x100, fluid"),createAttribute("size-map-728x200","")];expect(parseAttributesIntoValidMapping(e)).to.deep.equal([[[1024,768],[[600,300],[600,100],"fluid"]],[[728,200],[]],[[0,0],[[300,100],[300,50]]]])})});var isEnabled$1=function(e){return"de"===e||"at"===e||"it"===e||location.hash.indexOf("ads-use-openx")>=0},getScriptUrl=function(e,t){var n={de:"https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout",at:"https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-at",it:"https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-it",nl:"https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-nl",es:"https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-es",fr:"https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-fr",be:"https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-be-{lang}",lu:"https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-lu"};return(n[e]||n.de).replace("{lang}",t)};describe("OpenX",function(){it("isEnabled",function(){expect(isEnabled$1("de")).to.equal(!0),expect(isEnabled$1("at")).to.equal(!0),expect(isEnabled$1("it")).to.equal(!0)}),it("getScriptUrl",function(){expect(getScriptUrl("de")).to.equal("https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout"),expect(getScriptUrl("be","fr")).to.equal("https://scout24-d.openx.net/w/1.0/jstag?nc=4467-autoscout-be-fr")})});

//# sourceMappingURL=index.spec.js.map
