(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(e,n,t){"use strict";var a=t("KI45");t("hfKm")(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("ln6h")),o=a(t("+oT+")),u=a(t("/HRN")),s=a(t("WaGi")),i=a(t("ZDA2")),d=a(t("/+P4")),l=a(t("N9n2")),c=a(t("q1tI")),f=a(t("h09O")),m=a(t("u7ub")),h=a(t("zgjP")),w=c.default.createElement,p=function(e){function n(){return(0,u.default)(this,n),(0,i.default)(this,(0,d.default)(n).apply(this,arguments))}return(0,l.default)(n,e),(0,s.default)(n,[{key:"render",value:function(){return w(f.default,null,w("h1",null,"batman list"),w("ul",null,[{id:975,name:"Batman"},{id:481,name:"The Batman"},{id:504,name:"Batman Beyond"},{id:757,name:"Batman: The Animated Series"},{id:3557,name:"Beware the Batman"},{id:11464,name:"Batman Unlimited"},{id:900,name:"Batman: The Brave and the Bold"},{id:22309,name:"Batman: Black and White"},{id:5951,name:"The New Batman Adventures"},{id:33618,name:"The Adventures of Batman"}].map(function(e){return w("li",{key:e.id},w(m.default,{href:"".concat("/show/").concat("[id]"),as:"".concat("/show/").concat(e.id)},w("a",null,e.name)))})))}}]),n}(c.default.Component);p.getInitialProps=(0,o.default)(r.default.mark(function e(){var n,t;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.default)("https://api.tvmaze.com/search/shows?q=batman");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,console.log("Show data fetched. Count: ".concat(t.length)),e.abrupt("return",{shows:t.map(function(e){return e.show})});case 8:case"end":return e.stop()}},e)}));var v=p;n.default=v},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,a){var r=new XMLHttpRequest,o=[],u=[],s={},i=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(JSON.parse(r.responseText))},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:i,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return s[e.toLowerCase()]},has:function(e){return e.toLowerCase()in s}}}};for(var d in r.open(n.method||"get",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),s[n]=s[n]?s[n]+","+t:t}),t(i())},r.onerror=a,r.withCredentials="include"==n.credentials,n.headers)r.setRequestHeader(d,n.headers[d]);r.send(n.body||null)})}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["vlRD",1,0]]]);