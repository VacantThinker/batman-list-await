(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(n,t,e){"use strict";var a=e("KI45");e("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var u=a(e("ln6h")),o=a(e("+oT+")),r=a(e("q1tI")),c=a(e("h09O")),s=a(e("u7ub")),l=a(e("zgjP")),i=r.default.createElement,d=function(n){var t=n.shows;return i(c.default,null,i("h1",null,"batman list"),i("ul",null,t.map(function(n){return i("li",{key:n.id},i(s.default,{href:"".concat("/show/").concat(n.id),as:"".concat("/show/").concat(n.id)},i("a",null,n.name)))})))};d.getInitialProps=(0,o.default)(u.default.mark(function n(){var t,e;return u.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.default)("https://api.tvmaze.com/search/shows?q=batman");case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,console.log("Show data fetched. Count: ".concat(e.length)),n.abrupt("return",{shows:e.map(function(n){return n.show})});case 8:case"end":return n.stop()}},n)}));var f=d;t.default=f},vlRD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",1,0]]]);