(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{L9dH:function(e,n,t){"use strict";var a=t("KI45");t("hfKm")(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("ln6h")),u=a(t("O40h")),o=a(t("q1tI")),s=a(t("h09O")),c=a(t("zgjP")),i=o.default.createElement,l=function(e){var n=e.show;return i(s.default,null,i("h1",null,n.name),i("p",null,n.summary.replace(/<[/]?[pb]>/g,"")),i("img",{alt:"",src:n.image.medium}))};l.getInitialProps=function(){var e=(0,u.default)(r.default.mark(function e(n){var t,a,u;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.id,e.next=3,(0,c.default)("https://api.tvmaze.com/shows/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return u=e.sent,console.log("Fetched show: ".concat(u.name)),e.abrupt("return",{show:u});case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();var d=l;n.default=d},lmRi:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show/[id]",function(){return t("L9dH")}])}},[["lmRi",1,0]]]);