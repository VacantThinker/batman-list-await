(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(e,n,t){"use strict";var a=t("KI45");t("hfKm")(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("/HRN")),r=a(t("WaGi")),u=a(t("ZDA2")),s=a(t("/+P4")),i=a(t("N9n2")),d=a(t("q1tI")),l=a(t("h09O")),c=(a(t("zgjP")),a(t("YFqc")),a(t("u7ub"))),f=d.default.createElement,m=function(e){function n(){return(0,o.default)(this,n),(0,u.default)(this,(0,s.default)(n).apply(this,arguments))}return(0,i.default)(n,e),(0,r.default)(n,[{key:"render",value:function(){return f(l.default,null,f("h1",null,"batman list"),f("ul",null,[{id:975,name:"Batman"},{id:481,name:"The Batman"},{id:504,name:"Batman Beyond"},{id:757,name:"Batman: The Animated Series"},{id:3557,name:"Beware the Batman"},{id:11464,name:"Batman Unlimited"},{id:900,name:"Batman: The Brave and the Bold"},{id:22309,name:"Batman: Black and White"},{id:5951,name:"The New Batman Adventures"},{id:33618,name:"The Adventures of Batman"}].map(function(e){return f("li",{key:e.id},f(c.default,{href:"".concat("/show/").concat("[id]"),as:"".concat("/show/").concat(e.id)},f("a",{target:"_top"},e.name)))})))}}]),n}(d.default.Component);n.default=m},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,a){var o=new XMLHttpRequest,r=[],u=[],s={},i=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:i,headers:{keys:function(){return r},entries:function(){return u},get:function(e){return s[e.toLowerCase()]},has:function(e){return e.toLowerCase()in s}}}};for(var d in o.open(n.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){r.push(n=n.toLowerCase()),u.push([n,t]),s[n]=s[n]?s[n]+","+t:t}),t(i())},o.onerror=a,o.withCredentials="include"==n.credentials,n.headers)o.setRequestHeader(d,n.headers[d]);o.send(n.body||null)})}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["vlRD",1,0]]]);