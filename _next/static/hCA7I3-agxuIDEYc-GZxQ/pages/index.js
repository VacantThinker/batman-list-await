(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(e,t,n){"use strict";var r=n("KI45");n("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("ln6h")),s=r(n("+oT+")),u=r(n("q1tI")),a=r(n("h09O")),c=r(n("u7ub")),i=r(n("zgjP")),l=u.default.createElement,f=function(e){var t=e.shows;return l(a.default,null,l("h1",null,"batman list"),l("ul",null,t.map(function(e){return l("li",{key:e.id},l(c.default,{href:"".concat("/show/").concat(e.id),as:"".concat("/show/").concat(e.id)},l("a",null,e.name)))})))};f.getInitialProps=(0,s.default)(o.default.mark(function e(){var t,n;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.default)("https://api.tvmaze.com/search/shows?q=batman");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log("Show data fetched. Count: ".concat(n.length)),e.abrupt("return",{shows:n.map(function(e){return e.show})});case 8:case"end":return e.stop()}},e)}));var d=f;t.default=d},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest,s=[],u=[],a={},c=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:c,headers:{keys:function(){return s},entries:function(){return u},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var i in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){s.push(t=t.toLowerCase()),u.push([t,n]),a[t]=a[t]?a[t]+","+n:n}),n(c())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(i,t.headers[i]);o.send(t.body||null)})}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["vlRD",1,0]]]);