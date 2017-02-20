function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}function isObject$1(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function getRawTag$1(e){var t=hasOwnProperty.call(e,symToStringTag$1),n=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var i=!0}catch(e){}var o=nativeObjectToString.call(e);return i&&(t?e[symToStringTag$1]=n:delete e[symToStringTag$1]),o}function objectToString$1(e){return nativeObjectToString$1.call(e)}function baseGetTag$1(e){return null==e?void 0===e?undefinedTag:nullTag:(e=Object(e),symToStringTag&&symToStringTag in e?getRawTag(e):objectToString(e))}function isObjectLike$1(e){return null!=e&&"object"==typeof e}function isSymbol$1(e){return"symbol"==typeof e||isObjectLike(e)&&baseGetTag(e)==symbolTag}function toNumber$1(e){if("number"==typeof e)return e;if(isSymbol(e))return NAN;if(isObject$2(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject$2(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var n=reIsBinary.test(e);return n||reIsOctal.test(e)?freeParseInt(e.slice(2),n?2:8):reIsBadHex.test(e)?NAN:+e}function debounce(e,t,n){function i(t){var n=f,i=p;return f=p=void 0,x=t,b=e.apply(i,n)}function o(e){return x=e,m=setTimeout(s,t),y?i(e):b}function r(e){var n=e-h,i=e-x,o=t-n;return v?nativeMin(o,g-i):o}function a(e){var n=e-h,i=e-x;return void 0===h||n>=t||n<0||v&&i>=g}function s(){var e=now();return a(e)?c(e):void(m=setTimeout(s,r(e)))}function c(e){return m=void 0,w&&f?i(e):(f=p=void 0,b)}function u(){void 0!==m&&clearTimeout(m),x=0,f=h=p=m=void 0}function l(){return void 0===m?b:c(now())}function d(){var e=now(),n=a(e);if(f=arguments,p=this,h=e,n){if(void 0===m)return o(h);if(v)return m=setTimeout(s,t),i(h)}return void 0===m&&(m=setTimeout(s,t)),b}var f,p,g,b,m,h,x=0,y=!1,v=!1,w=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return t=toNumber(t)||0,isObject(n)&&(y=!!n.leading,v="maxWait"in n,g=v?nativeMax(toNumber(n.maxWait)||0,t):g,w="trailing"in n?!!n.trailing:w),d.cancel=u,d.flush=l,d}function head(e){return e&&e.length?e[0]:void 0}function last(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},chaiAsPromised=createCommonjsModule(function(e,t){!function(){"use strict";function n(e,t){function i(e){return"function"!=typeof e.catch&&"function"==typeof e.always&&"function"==typeof e.done&&"function"==typeof e.fail&&"function"==typeof e.pipe&&"function"==typeof e.progress&&"function"==typeof e.state}function o(e){if("function"!=typeof e._obj.then)throw new TypeError(t.inspect(e._obj)+" is not a thenable.");if(i(e._obj))throw new TypeError("Chai as Promised is incompatible with thenables of jQuery<3.0.0, sorry! Please upgrade jQuery or use another Promises/A+ compatible library (see http://promisesaplus.com/).")}function r(e,n){t.addMethod(f.prototype,e,function(){return o(this),n.apply(this,arguments)})}function a(e,n){t.addProperty(f.prototype,e,function(){return o(this),n.apply(this,arguments)})}function s(e,t){e.then(function(){t()},t)}function c(e,t,n){e.assert(!0,null,t,n.expected,n.actual)}function u(e,t,n){e.assert(!1,t,null,n.expected,n.actual)}function l(e){return"function"==typeof e.then?e:e._obj}function d(e,i,o){if(!t.flag(i,"eventually"))return e.apply(i,o);var r=l(i).then(function(e){return i._obj=e,t.flag(i,"eventually",!1),o?n.transformAsserterArgs(o):o}).then(function(t){return e.apply(i,t),i._obj});n.transferPromiseness(i,r)}var f=e.Assertion,p=e.assert,g=Object.getOwnPropertyNames(f.prototype),b={};g.forEach(function(e){b[e]=Object.getOwnPropertyDescriptor(f.prototype,e)}),a("fulfilled",function(){var e=this,t=l(e).then(function(t){return e._obj=t,c(e,"expected promise not to be fulfilled but it was fulfilled with #{act}",{actual:t}),t},function(t){u(e,"expected promise to be fulfilled but it was rejected with #{act}",{actual:t})});n.transferPromiseness(e,t)}),a("rejected",function(){var e=this,t=l(e).then(function(t){return e._obj=t,u(e,"expected promise to be rejected but it was fulfilled with #{act}",{actual:t}),t},function(t){return c(e,"expected promise not to be rejected but it was rejected with #{act}",{actual:t}),t});n.transferPromiseness(e,t)}),r("rejectedWith",function(e,i){var o=null,r=null;e instanceof RegExp||"string"==typeof e?(i=e,e=null):e&&e instanceof Error?(o=e,e=null,i=null):"function"==typeof e?r=(new e).name:e=null;var a=this,s=l(a).then(function(t){var n=null,s=null;if(e)n="expected promise to be rejected with #{exp} but it was fulfilled with #{act}",s=r;else if(i){var c=i instanceof RegExp?"matching":"including";n="expected promise to be rejected with an error "+c+" #{exp} but it was fulfilled with #{act}",s=i}else o&&(n="expected promise to be rejected with #{exp} but it was fulfilled with #{act}",s=o);a._obj=t,u(a,n,{expected:s,actual:t})},function(n){e&&a.assert(n instanceof e,"expected promise to be rejected with #{exp} but it was rejected with #{act}","expected promise not to be rejected with #{exp} but it was rejected with #{act}",r,n);var s="object"===t.type(n)&&"message"in n?n.message:""+n;i&&null!==s&&void 0!==s&&(i instanceof RegExp&&a.assert(i.test(s),"expected promise to be rejected with an error matching #{exp} but got #{act}","expected promise not to be rejected with an error matching #{exp}",i,s),"string"==typeof i&&a.assert(s.indexOf(i)!==-1,"expected promise to be rejected with an error including #{exp} but got #{act}","expected promise not to be rejected with an error including #{exp}",i,s)),o&&a.assert(n===o,"expected promise to be rejected with #{exp} but it was rejected with #{act}","expected promise not to be rejected with #{exp}",o,n)});n.transferPromiseness(a,s)}),a("eventually",function(){t.flag(this,"eventually",!0)}),r("notify",function(e){s(l(this),e)}),r("become",function(e,t){return this.eventually.deep.equal(e,t)});var m=g.filter(function(e){return"assert"!==e&&"function"==typeof b[e].value});m.forEach(function(e){f.overwriteMethod(e,function(e){return function(){d(e,this,arguments)}})});var h=g.filter(function(e){return"_obj"!==e&&"function"==typeof b[e].get});h.forEach(function(e){var t=f.prototype.__methods.hasOwnProperty(e);t?f.overwriteChainableMethod(e,function(e){return function(){d(e,this,arguments)}},function(e){return function(){d(e,this)}}):f.overwriteProperty(e,function(e){return function(){d(e,this)}})});var x=Object.getOwnPropertyNames(p).filter(function(e){return"function"==typeof p[e]});p.isFulfilled=function(e,t){return new f(e,t).to.be.fulfilled},p.isRejected=function(e,t,n){"string"==typeof t&&(n=t,t=void 0);var i=new f(e,n);return void 0!==t?i.to.be.rejectedWith(t):i.to.be.rejected},p.becomes=function(e,t,n){return p.eventually.deepEqual(e,t,n)},p.doesNotBecome=function(e,t,n){return p.eventually.notDeepEqual(e,t,n)},p.eventually={},x.forEach(function(n){p.eventually[n]=function(i){var o,r=Array.prototype.slice.call(arguments,1),a=arguments[p[n].length-1];"string"==typeof a&&(o=function(n){throw new e.AssertionError(a+"\n\nOriginal reason: "+t.inspect(n))});var c=i.then(function(e){return p[n].apply(p,[e].concat(r))},o);return c.notify=function(e){s(c,e)},c}})}"function"==typeof commonjsRequire&&"object"==typeof t&&"object"==typeof e?e.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):(chai.use(n),self.chaiAsPromised=n),n.transferPromiseness=function(e,t){e.then=t.then.bind(t)},n.transformAsserterArgs=function(e){return e}}()}),waitUntilAdsCanBeLoaded=function(){return new Promise(function(e,t){var n=window.location,i=document.cookie,o=n.href.indexOf("ads-off=true")>=0,r=i.indexOf("CustomerType=D")>=0,a=i.indexOf("testrun=true")>=0,s="www.autoscout24.de"==n.host&&n.href.indexOf("/angebote/")>=0;if(o||r&&!s||a)return void t();var c=function(){var e=n.hostname,t=/\.(nl|it)$/.test(e)||n.hash.indexOf("cookie-consent-needed")>=0,o=i.indexOf("cookieConsent=1;")>=0;return t&&!o};c()?window.addEventListener("cookie-consent-given",e):e()})};chai.use(chaiAsPromised),describe("Loading ads",function(){afterEach(function(){document.cookie="User=;expires=0",window.location.hash=""}),it("Do not load ads when ads=off in URL",function(){return window.location.hash="ads-off=true",waitUntilAdsCanBeLoaded().should.be.rejected}),it("Do not load ads when user is a dealer",function(){return document.cookie="User=CustomerType=D;",waitUntilAdsCanBeLoaded().should.be.rejected}),it("Wait until cookie consent is given",function(){return window.location.hash="cookie-consent-needed",setTimeout(function(){return window.dispatchEvent(new Event("cookie-consent-given",{bubbles:!0}))}),waitUntilAdsCanBeLoaded().should.eventually.be.fulfilled})});var uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)})},getAttribute=function(e,t,n){return e&&e.getAttribute&&e.getAttribute(t)||n},hasAttribute=function(e,t){return e&&e.hasAttribute(t)},setAttribute=function(e,t,n){return e&&e.setAttribute(t,n)},removeAttribute=function(e,t){return e&&e.removeAttribute(t)},isElementInViewport=function(e){if(!e||!document.body.contains(e))return!1;var t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t.bottom>0&&t.top<n&&t.right>0&&t.left<i},addCss=function(e){var t=document.createElement("style");t.innerHTML=e,document.querySelector("head").appendChild(t)},isObject_1=isObject$1,freeGlobal$1="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal$1,freeGlobal=_freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root$1=freeGlobal||freeSelf||Function("return this")(),_root=root$1,root=_root,now$1=function(){return root.Date.now()},now_1=now$1,root$2=_root,Symbol$1=root$2.Symbol,_Symbol=Symbol$1,Symbol$2=_Symbol,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag$1=Symbol$2?Symbol$2.toStringTag:void 0,_getRawTag=getRawTag$1,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString,_objectToString=objectToString$1,Symbol=_Symbol,getRawTag=_getRawTag,objectToString=_objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol?Symbol.toStringTag:void 0,_baseGetTag=baseGetTag$1,isObjectLike_1=isObjectLike$1,baseGetTag=_baseGetTag,isObjectLike=isObjectLike_1,symbolTag="[object Symbol]",isSymbol_1=isSymbol$1,isObject$2=isObject_1,isSymbol=isSymbol_1,NAN=NaN,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,toNumber_1=toNumber$1,isObject=isObject_1,now=now_1,toNumber=toNumber_1,FUNC_ERROR_TEXT="Expected a function",nativeMax=Math.max,nativeMin=Math.min,debounce_1$1=debounce,gt$1=function(){return window.googletag||(window.googletag={cmd:[]})},slotsCache={},destroyAdSlotById=function(e){var t=slotsCache[e].slot;gt$1().cmd.push(function(){return gt$1().destroySlots([t])})},refreshAdSlotById=function(e){var t=slotsCache[e];t&&(t.waitsForRefresh=!0,refreshAdslotsWaitingToBeRefreshed())},register=function(e){var t=e.adunit,n=e.container,i=e.outOfPage,o=e.sizeMapping,r=e.slotElement,a=e.immediate,s=e.collapseEmpty,c=e.openxIgnore,u=uuid(),l={refresh:function(){return refreshAdSlotById(u)},destroy:function(){return destroyAdSlotById(u)}};return slotsCache[u]={ret:l,container:n,slotElement:r},gt$1().cmd.push(function(){setTimeout(function(){var e=gt$1().pubads(),r=i?gt$1().defineOutOfPageSlot(t,n.id).addService(e):gt$1().defineSlot(t,[],n.id).defineSizeMapping(o).addService(e);s&&r.setCollapseEmptyDiv(!0),gt$1().display(n.id),slotsCache[u].slot=r,slotsCache[u].outOfPage=i,slotsCache[u].immediate=a,slotsCache[u].openxIgnore=c,refreshAdSlotById(u)},20)}),l},refreshOxBids=!1,refreshAdslotsWaitingToBeRefreshed=debounce_1$1(function(){var e=[];Object.keys(slotsCache).forEach(function(t){var n=slotsCache[t];n.waitsForRefresh&&(n.outOfPage||isElementInViewport(n.slotElement)||n.immediate)&&(e.push(n),n.waitsForRefresh=!1,n.ret.onrefresh&&n.ret.onrefresh())}),e.length>0&&gt$1().cmd.push(function(){var t=window.OX&&window.OX.dfp_bidder&&window.OX.dfp_bidder.refresh&&window.OX.dfp_bidder.setOxTargeting,n=e.filter(function(e){return!e.openxIgnore}).map(function(e){return e.slot}),i=e.map(function(e){return e.slot});if(t)if(refreshOxBids){var o=function(){window.OX.dfp_bidder.setOxTargeting(n),gt$1().pubads().refresh(i,{changeCorrelator:!1})},r=setTimeout(function(){o()},1500);window.OX.dfp_bidder.refresh(function(){clearTimeout(r),o()},n)}else refreshOxBids=!0,window.OX.dfp_bidder.setOxTargeting(n),gt$1().pubads().refresh(i,{changeCorrelator:!1});else gt$1().pubads().refresh(i,{changeCorrelator:!1})})},50),findXIdByGptSlot=function(e){var t=Object.keys(slotsCache).filter(function(t){return slotsCache[t].slot===e}).map(function(e){return slotsCache[e]});return t.length?t[0]:null};gt$1().cmd.push(function(){var e=gt$1().pubads();e.addEventListener("slotRenderEnded",function(e){var t=findXIdByGptSlot(e.slot);e.isEmpty?t&&t.ret.onempty&&t.ret.onempty():t&&t.ret.onload&&t.ret.onload()})}),window.addEventListener("load",refreshAdslotsWaitingToBeRefreshed),window.addEventListener("scroll",refreshAdslotsWaitingToBeRefreshed),window.addEventListener("animationend",refreshAdslotsWaitingToBeRefreshed),window.addEventListener("transitionend",refreshAdslotsWaitingToBeRefreshed);var head_1=head,first=head_1,last_1=last,parseResolution=function(e){if(/fluid/.test(e))return"fluid";var t=e.replace(/[\s]/g,"").match(/([\d]+)x([\d]+)/i);return t&&t[2]?[0|t[1],0|t[2]]:null},parseAttributes=function(e){return Array.from(e).filter(function(e){return/size-map-/.test(e.nodeName)}).map(function(e){return[parseResolution(e.nodeName),e.value.split(",").map(parseResolution).filter(function(e){return"fluid"===e||Array.isArray(e)&&2===e.length})]})},consolidateSizeMapping=function(e){var t=function(t){var n=last_1(t);return n&&0===n[0][0]&&0===n[0][1]||e.push([[0,0],[]]),e},n=e.sort(function(e,t){return t[0][0]-e[0][0]||t[0][1]-e[0][1]}),i=t(n);return i},getEligibleSizesForResolution=function(e,t){var n=first(e.filter(function(e){return"fluid"===e||e[0][0]<=t.x&&e[0][1]<=t.y}));return n&&n[1]||[]},parseAttributesIntoValidMapping=function(e){var t=parseAttributes(e),n=consolidateSizeMapping(t);return n},styles="as24-ad-slot{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}as24-ad-slot>div{display:inline-block;margin:0 auto}as24-ad-slot{background-image:url(data:image/svg+xml;charset=utf-8,%3Csvg%20id%3D%22Ebene_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22141.7%22%20height%3D%2270.7%22%20viewBox%3D%220%200%20141.7%2070.7%22%3E%3Cstyle%3E%3C%21%5BCDATA%5B%0D%0A%09.st0%7Bfill%3A%23C4C4C4%3B%7D%0D%0A%5D%5D%3E%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M14.7%2061.4h-.2c-2.8%200-5.2-1.9-5.2-5.2%200-2%203-2%203%200%200%201.4.9%202.2%202.2%202.2h.2c1.3%200%202.3-.7%202.3-2%200-3.2-7.5-3.5-7.5-8.3v-.5c0-2.8%202.8-4.4%205-4.4h.2c2.7%200%205%201.7%205%204.1%200%201.9-3%202-3%20.1%200-.7-.8-1.2-2.1-1.2h-.2c-1.1%200-2%20.6-2%201.6v.4c0%202%207.5%202.9%207.5%208.3.1%202.9-2.2%204.9-5.2%204.9zM27.7%2061.4h-.2c-2.8%200-5.2-2.2-5.2-5.1v-8.1c0-2.9%202.3-5%205.2-5h.2c2.6%200%204.8%201.8%205.1%204.3v.3c0%20.9-.8%201.4-1.5%201.4s-1.3-.4-1.4-1.3c-.2-1.1-1.1-1.8-2.2-1.8h-.2c-1.2%200-2.2.9-2.2%202.1v8.1c0%201.2%201%202.1%202.2%202.1h.2c1.1%200%202-.7%202.2-1.8.1-.9.8-1.3%201.4-1.3.8%200%201.5.5%201.5%201.4v.3c-.3%202.6-2.5%204.4-5.1%204.4zM40.4%2061.4h-.2c-2.8%200-5.2-2.2-5.2-5.1v-8c0-2.9%202.3-5.1%205.2-5.1h.2c2.9%200%205.2%202.2%205.2%205.1v8c-.1%202.9-2.4%205.1-5.2%205.1zm2.2-13.1c0-1.2-1-2.1-2.2-2.1h-.2c-1.2%200-2.2.9-2.2%202.1v8c0%201.2%201%202.1%202.2%202.1h.2c1.2%200%202.2-.9%202.2-2.1v-8zM54%2061.4h-.2c-2.8%200-5.2-2.3-5.2-5.2V44.8c0-1%20.7-1.5%201.5-1.5.7%200%201.5.5%201.5%201.5v11.5c0%201.2%201%202.2%202.2%202.2h.2c1.2%200%202.2-1%202.2-2.2V44.8c0-1%20.7-1.5%201.5-1.5s1.5.5%201.5%201.5v11.5c0%202.8-2.3%205.1-5.2%205.1zM69.8%2046.4h-2.1v13.5c0%201-.7%201.5-1.5%201.5-.7%200-1.5-.5-1.5-1.5V46.4h-2.1c-1%200-1.5-.7-1.5-1.5%200-.7.5-1.5%201.5-1.5h7.1c1%200%201.5.7%201.5%201.5.1.7-.4%201.5-1.4%201.5zM83.7%2061.2H77c-1%200-1.5-.9-1.5-1.8%200-.3.1-.6.2-.9l5.9-9.4c.3-.5.3-.8.3-1.2v-.2c0-.8-.7-1.5-1.5-1.5h-.1c-.9%200-1.5.7-1.5%201.5v.3c0%201-.8%201.5-1.5%201.5s-1.5-.5-1.5-1.5v-.4c0-2.5%202-4.3%204.5-4.3h.1c2.4%200%204.5%201.8%204.5%204.3v.3c0%201-.4%201.8-.9%202.7l-4.7%207.7h4.5c1%200%201.5.7%201.5%201.5-.1.7-.6%201.4-1.6%201.4zM95.5%2057.7h-.6v2.2c0%201-.7%201.5-1.5%201.5s-1.4-.5-1.4-1.5v-2.2h-4.1c-1%200-1.7-.6-1.7-1.6%200-.3.1-.6.2-.8l4.8-11.2c.3-.6.8-.9%201.3-.9.8%200%201.5.6%201.5%201.4%200%20.2%200%20.4-.1.6l-4.3%209.4H92v-1.5c0-1%20.7-1.5%201.5-1.5s1.5.5%201.5%201.5v1.5h.6c1%200%201.5.7%201.5%201.5s-.6%201.6-1.6%201.6zM16.3%2014.6l-1.7%205.5h3.3zM54.7%2024.3h.2c1.2%200%202.2-.9%202.2-2.1v-8c0-1.2-1-2.1-2.2-2.1h-.2c-1.2%200-2.2.9-2.2%202.1v8c0%201.2%201%202.1%202.2%202.1z%22%2F%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M0%200v70.7h123.3c10.1%200%2018.4-8.2%2018.4-18.3V0H0zm49.5%2014.2c0-2.9%202.3-5.1%205.2-5.1h.2c2.9%200%205.2%202.2%205.2%205.1v8c0%202.9-2.3%205.1-5.2%205.1h-.2c-2.8%200-5.2-2.2-5.2-5.1v-8zm-10.4-5h7.1c1%200%201.5.7%201.5%201.5%200%20.7-.5%201.5-1.5%201.5h-2.1v13.5c0%201-.7%201.5-1.5%201.5-.7%200-1.5-.5-1.5-1.5V12.2H39c-1%200-1.5-.8-1.5-1.5.1-.7.6-1.5%201.6-1.5zm-14.3%201.4c0-1%20.7-1.5%201.5-1.5.7%200%201.5.5%201.5%201.5v11.5c0%201.2%201%202.2%202.2%202.2h.2c1.2%200%202.2-1%202.2-2.2V10.6c0-1%20.7-1.5%201.5-1.5.7%200%201.5.5%201.5%201.5v11.5c0%202.8-2.3%205.2-5.2%205.2H30c-2.8%200-5.2-2.3-5.2-5.2V10.6zM9.9%2025.3l4.7-14.9c.4-1.2%201-1.3%201.7-1.3.6%200%201.3.1%201.7%201.3l4.7%2014.9c.1.2.1.3.1.5%200%20.9-.8%201.4-1.5%201.4-.6%200-1.2-.3-1.4-1.1l-1-3.1h-5.1l-1%203.1c-.2.7-.8%201.1-1.4%201.1-.8%200-1.5-.6-1.5-1.4-.1-.2-.1-.3%200-.5zm129.6%2027.2c0%208.7-7.2%2016-16.2%2016H2.2V35.3h137.3v17.2z%22%2F%3E%3C%2Fsvg%3E);background-size:70px 35px;background-position:center center;background-repeat:no-repeat;position:relative}as24-ad-slot[out-of-page],.sc-ads-no-placeholder,.sc-ads-silent-placeholder,as24-ad-slot[loaded]:not([empty]){background-image:none}.sc-ads-silent-placeholder>div{box-shadow:inset 0 0 1px #cdcdcd}.sc-ads-silent-placeholder[loaded]:not([empty])>div{box-shadow:none}as24-ad-slot[loaded][ad-label]:not([empty]):before{content:attr(ad-label);position:absolute;top:-17px;display:inline-block;font-size:0.8125rem}\n",registerElement=function(e){void 0===e&&(e="as24-ad-slot");var t=Object.create(HTMLElement.prototype,{attachedCallback:{value:function(){var e=this,t={x:window.innerWidth,y:window.innerHeight},n=parseAttributesIntoValidMapping(this.attributes),i=getEligibleSizesForResolution(n,t),o=i&&i.length>0;if(setAttribute(this,"size-mapping",JSON.stringify(n)),setAttribute(this,"sizes",JSON.stringify(i)),!o)return setAttribute(this,"empty",""),void this.dispatchEvent(new Event("ad-slot-empty"),{bubbles:!0});var r=getAttribute(this,"element-id")||"ad-"+uuid(),a=getAttribute(this,"ad-unit"),s=hasAttribute(this,"out-of-page"),c=hasAttribute(this,"immediate"),u=hasAttribute(this,"collapse-empty"),l=hasAttribute(this,"openx-ignore"),d=this.container=document.createElement("div");if(d.id=r,this.appendChild(d),!u){var f=i.filter(function(e){return"fluid"!==e}).sort(function(e,t){return e[1]-t[1]}),p=f[0][1],g=f[0][0];d.style.minHeight=this.style.minHeight=p+"px",d.style.minWidth=this.style.minWidth=g+"px"}this.adslot=register({adunit:a,outOfPage:s,sizeMapping:n,container:d,slotElement:this,immediate:c,collapseEmpty:u,openxIgnore:l}),this.adslot.onempty=function(){setAttribute(e,"empty",""),e.dispatchEvent(new Event("ad-slot-empty"),{bubbles:!0})},this.adslot.onload=function(){if(setAttribute(e,"loaded",""),e.className+=" rnd-"+(1e4*Math.random()|0),e.dispatchEvent(new Event("ad-slot-loaded"),{bubbles:!0}),!u){var t=parseInt(e.style.minHeight,10),n=d.clientHeight,i=parseInt(e.style.minWidth,10),o=d.clientWidth;e.style.minHeight=Math.max(t,n)+"px",e.style.minWidth=Math.max(i,o)+"px"}},this.adslot.onrefresh=function(){removeAttribute(e,"loaded"),removeAttribute(e,"empty")}}},detachedCallback:{value:function(){this.adslot&&this.adslot.destroy()}},refreshAdSlot:{value:function(){this.adslot&&(this.container.innerHTML="",this.adslot.refresh())}}}),n=styles.replace(/as24-ad-slot/g,e);addCss(n),document.registerElement(e,{prototype:t})},mockGoogletag=function(){var e={},t={clearTargeting:function(t){delete e[t]},getTargetingKeys:function(){return Object.keys(e)},setTargeting:function(t,n){e[t]=n},enableSingleRequest:function(){},disableInitialLoad:function(){},collapseEmptyDivs:function(){}};window.googletag={cmd:[],enableServices:function(){},pubads:function(){return t}}},testContainer=document.createElement("div");document.body.appendChild(testContainer),describe("The as24-ad-slot element",function(){var e;beforeEach(function(){e="x-"+uuid(),mockGoogletag(),registerElement(e)}),it("Correctly parsing size-mapping from size-map-*x* attributes",function(){testContainer.innerHTML="<"+e+' size-map-0x0="300x50, 320x100" size-map-728x300="728x90, 300x50"></'+e+">";var t=document.querySelector(""+e),n=JSON.parse(t.getAttribute("size-mapping"));expect(n).to.deep.equal([[[728,300],[[728,90],[300,50]]],[[0,0],[[300,50],[320,100]]]])}),it("Automatically sets size map for 0x0 to empty array",function(){testContainer.innerHTML="<"+e+' size-map-728x300="728x90, 300x50"></'+e+">";var t=document.querySelector(""+e),n=JSON.parse(t.getAttribute("size-mapping"));expect(n).to.deep.equal([[[728,300],[[728,90],[300,50]]],[[0,0],[]]])}),it("Elements have refreshAdSlot method",function(){var t=document.createElement(e);expect(t.refreshAdSlot).to.be.exist})});var registerElement$2=function(e){void 0===e&&(e="as24-ad-targeting");var t=window.googletag||(window.googletag={cmd:[]}),n=Object.create(HTMLElement.prototype,{attachedCallback:{value:function(){this.refreshTargeting()}},detachedCallback:{value:function(){this.refreshTargeting()}},refreshTargeting:{value:function(){var n=Array.from(document.querySelectorAll(e)||[]),i=n.map(function(e){return JSON.parse(e.innerHTML.trim()||"{}")}),o={};i.forEach(function(e){return Object.assign(o,e)}),t.cmd.push(function(){var e=t.pubads(),n=e.getTargetingKeys();n.forEach(function(t){return e.clearTargeting(t)});for(var i in o){var r=(""+o[i]).split(",");e.setTargeting(i,r)}window.Krux&&(e.setTargeting("ksg",window.Krux.segments),e.setTargeting("kuid",window.Krux.user))})}}});addCss(e+"{display:none}"),document.registerElement(e,{prototype:n})},testContainer$1=document.createElement("div");document.body.appendChild(testContainer$1),describe("The as24-ad-targeting element",function(){var e;beforeEach(function(){mockGoogletag(),e="x-"+uuid()}),afterEach(function(e){testContainer$1.innerHTML="",delete window.googletag,setTimeout(e,100)}),it("Sets targeting correctly with only one element",function(){var t=sinon.spy(window.googletag.pubads(),"setTargeting");registerElement$2(e),testContainer$1.innerHTML+="<"+e+'>{ "a": 1, "b": 2 }</'+e+">",window.googletag.cmd.forEach(function(e){e()}),expect(t.callCount).to.equal(2),expect(t.firstCall.calledWith("a",["1"])).to.be.true,expect(t.secondCall.calledWith("b",["2"])).to.be.true}),it("Sets targeting corectly and clears out old values with multiple elements",function(){var t=sinon.spy(window.googletag.pubads(),"setTargeting"),n=sinon.spy(window.googletag.pubads(),"clearTargeting");registerElement$2(e),testContainer$1.innerHTML="<"+e+'>{ "a": 1, "b": 2 }</'+e+"><"+e+'>{ "b": 3, "c": 4, "d": 5 }</'+e+">",window.googletag.cmd.forEach(function(e){return e()}),expect(window.googletag.pubads().getTargetingKeys()).to.deep.equal(["a","b","c","d"]),expect(n.callCount).to.equal(4),expect(t.callCount).to.equal(8)}),it("Sets Krux parameters correctly if they are present",function(){var t=sinon.spy(window.googletag.pubads(),"setTargeting");window.Krux={segments:"segments",user:"user"},registerElement$2(e),testContainer$1.innerHTML+="<"+e+'>{ "a": 1 }</'+e+">",window.googletag.cmd.forEach(function(e){e()}),expect(t.callCount).to.equal(3),expect(t.firstCall.calledWith("a",["1"])).to.be.true,expect(t.secondCall.calledWith("ksg","segments")).to.be.true,expect(t.thirdCall.calledWith("kuid","user")).to.be.true,delete window.Krux})});var createAttribute=function(e,t){return{nodeName:e,value:t}};describe("Size mapping",function(){it("Happy case",function(){var e=[createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-728x200","600x100")],t=parseAttributesIntoValidMapping(e);expect(t).to.deep.equal([[[728,200],[[600,100]]],[[0,0],[[300,100],[300,50]]]])}),it("Without 0x0 mapping, default empty sizes array should be added",function(){var e=[createAttribute("size-map-728x200","600x100")],t=parseAttributesIntoValidMapping(e);expect(t).to.deep.equal([[[728,200],[[600,100]]],[[0,0],[]]])}),it("Size mapping should be sorted by resolution from greater to smaller",function(){var e=[createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-728x200","600x100"),createAttribute("size-map-1024x0","600x300, 600x100"),createAttribute("size-map-1400x1","600x400, 600x300"),createAttribute("size-map-1400x0","600x400, 600x300")],t=[createAttribute("size-map-1400x1","600x400, 600x300"),createAttribute("size-map-1400x0","600x400, 600x300"),createAttribute("size-map-1024x0","600x300, 600x100"),createAttribute("size-map-728x200","600x100"),createAttribute("size-map-0x0","300x100, 300x50")],n=[createAttribute("size-map-728x200","600x100"),createAttribute("size-map-1024x0","600x300, 600x100"),createAttribute("size-map-1400x0","600x400, 600x300"),createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-1400x1","600x400, 600x300")],i=[createAttribute("size-map-728x200","600x100"),createAttribute("size-map-1400x0","600x400, 600x300"),createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-1400x1","600x400, 600x300"),createAttribute("size-map-1024x0","600x300, 600x100")],o=[[[1400,1],[[600,400],[600,300]]],[[1400,0],[[600,400],[600,300]]],[[1024,0],[[600,300],[600,100]]],[[728,200],[[600,100]]],[[0,0],[[300,100],[300,50]]]];expect(parseAttributesIntoValidMapping(e)).to.deep.equal(o),expect(parseAttributesIntoValidMapping(t)).to.deep.equal(o),expect(parseAttributesIntoValidMapping(n)).to.deep.equal(o),expect(parseAttributesIntoValidMapping(i)).to.deep.equal(o)}),it("Empty mapping should be tolerated",function(){var e=[];expect(parseAttributesIntoValidMapping(e)).to.deep.equal([[[0,0],[]]])}),it("Mapping with empty sizes is tolerated",function(){var e=[createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-1024x768","600x300, 600x100"),createAttribute("size-map-728x200","")];expect(parseAttributesIntoValidMapping(e)).to.deep.equal([[[1024,768],[[600,300],[600,100]]],[[728,200],[]],[[0,0],[[300,100],[300,50]]]])}),it("getEligibleSizesForResolution",function(){var e=[],t=parseAttributesIntoValidMapping([createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-1024x768","600x300, 600x100"),createAttribute("size-map-728x200","")]),n={x:1024,y:768},i={x:460,y:240},o={x:800,y:600};expect(getEligibleSizesForResolution(e,n)).to.deep.equal([]),expect(getEligibleSizesForResolution(t,n)).to.deep.equal([[600,300],[600,100]]),expect(getEligibleSizesForResolution(t,i)).to.deep.equal([[300,100],[300,50]]),expect(getEligibleSizesForResolution(t,o)).to.deep.equal([])}),it('"fluid" size should be supported',function(){var e=[createAttribute("size-map-0x0","300x100, 300x50"),createAttribute("size-map-1024x768","600x300, 600x100, fluid"),createAttribute("size-map-728x200","")];expect(parseAttributesIntoValidMapping(e)).to.deep.equal([[[1024,768],[[600,300],[600,100],"fluid"]],[[728,200],[]],[[0,0],[[300,100],[300,50]]]])})});

//# sourceMappingURL=index.spec.js.map
