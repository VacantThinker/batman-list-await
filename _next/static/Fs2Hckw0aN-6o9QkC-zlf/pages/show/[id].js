(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{L9dH:function(e,t,n){"use strict";var r=n("KI45");n("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("ln6h")),s=r(n("+oT+")),u=r(n("h09O")),a=r(n("s3Lg")),c=r(n("q1tI")),i=r(n("zgjP")),l=c.default.createElement,d=function(e){var t=e.show;return l(u.default,null,l("h1",null,"`$",t.name,"`"),"`$",t.summary,"`",l(a.default,{alt:"",src:"".concat(t.image.medium)}))};d.getInitialProps=function(){var e=(0,s.default)(o.default.mark(function e(t){var n,r,s;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.id,e.next=3,(0,i.default)("https://api.tvmaze.com/shows/".concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,console.log("Fetched show: ".concat(s.name)),e.abrupt("return",{show:s});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();var f=d;t.default=f},lmRi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show/[id]",function(){return n("L9dH")}])},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest,s=[],u=[],a={},c=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:c,headers:{keys:function(){return s},entries:function(){return u},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var i in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){s.push(t=t.toLowerCase()),u.push([t,n]),a[t]=a[t]?a[t]+","+n:n}),n(c())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(i,t.headers[i]);o.send(t.body||null)})}},s3Lg:function(e,t,n){"use strict";var r=n("KI45");n("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")).default.createElement,s=function(e){var t=e.alt,n=void 0===t?"":t,r=e.src;return o("img",{alt:"".concat(n),src:"".concat("/batman-list-await").concat(r)})};t.default=s},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["lmRi",1,0]]]);