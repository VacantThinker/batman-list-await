(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1GQJ":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show/504",function(){return t("di/Y")}])},"di/Y":function(e,n,t){"use strict";var r=t("KI45");t("hfKm")(n,"__esModule",{value:!0}),n.default=void 0;var u=r(t("ln6h")),a=r(t("+oT+")),o=r(t("h09O")),s=(r(t("s3Lg")),r(t("q1tI")).default.createElement),i=function(e){var n=e.show;return s(o.default,null,s("h1",null,n.name),s("div",null,n.summary),s("img",{alt:"",src:n.image.medium}))};i.getInitialProps=function(){var e=(0,a.default)(u.default.mark(function e(n){var t,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.query.id,e.next=3,fetch("https://api.tvmaze.com/shows/504");case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,console.log("Fetched show: Batman Beyond"),e.abrupt("return",{show:r});case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();var c=i;n.default=c}},[["1GQJ",1,0]]]);