(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0iUn":function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.r(t),e.d(t,"default",function(){return r})},MI3g:function(n,t,e){"use strict";e.r(t);var r=e("XVgq"),o=e.n(r),u=e("Z7t5"),a=e.n(u);function i(n){return(i="function"===typeof a.a&&"symbol"===typeof o.a?function(n){return typeof n}:function(n){return n&&"function"===typeof a.a&&n.constructor===a.a&&n!==a.a.prototype?"symbol":typeof n})(n)}function s(n){return(s="function"===typeof a.a&&"symbol"===i(o.a)?function(n){return i(n)}:function(n){return n&&"function"===typeof a.a&&n.constructor===a.a&&n!==a.a.prototype?"symbol":i(n)})(n)}function c(n,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}e.d(t,"default",function(){return c})},O40h:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return a});var r=e("eVuF"),o=e.n(r);function u(n,t,e,r,u,a,i){try{var s=n[a](i),c=s.value}catch(f){return void e(f)}s.done?t(c):o.a.resolve(c).then(r,u)}function a(n){return function(){var t=this,e=arguments;return new o.a(function(r,o){var a=n.apply(t,e);function i(n){u(a,r,o,i,s,"next",n)}function s(n){u(a,r,o,i,s,"throw",n)}i(void 0)})}}},RNiq:function(n,t,e){var r,o,u,a=e("hfKm");o=[t,e("ln6h"),e("O40h"),e("0iUn"),e("sLSF"),e("MI3g"),e("a7VT"),e("Tit0"),e("q1tI"),e("h09O"),e("u7ub"),e("zgjP")],void 0===(u="function"===typeof(r=function(n,t,r,o,u,i,s,c,f,l,d,p){"use strict";var h=e("KI45");a(n,"__esModule",{value:!0}),n.default=void 0,t=h(t),r=h(r),o=h(o),u=h(u),i=h(i),s=h(s),c=h(c),f=h(f),l=h(l),d=h(d),p=h(p);var m=f.default.createElement,w=function(n){function t(){return(0,o.default)(this,t),(0,i.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,c.default)(t,n),(0,u.default)(t,[{key:"render",value:function(){return m(l.default,null,m("h1",null,"batman list"),m("ul",null,[{id:975,name:"Batman"},{id:481,name:"The Batman"},{id:504,name:"Batman Beyond"},{id:757,name:"Batman: The Animated Series"},{id:3557,name:"Beware the Batman"},{id:11464,name:"Batman Unlimited"},{id:900,name:"Batman: The Brave and the Bold"},{id:22309,name:"Batman: Black and White"},{id:5951,name:"The New Batman Adventures"},{id:33618,name:"The Adventures of Batman"}].map(function(n){return m("li",{key:n.id},m(d.default,{href:"".concat("/show/").concat("[id]"),as:"".concat("/show/").concat(n.id)},m("a",null,n.name)))})))}}]),t}(f.default.Component);w.getInitialProps=(0,r.default)(t.default.mark(function n(){var e,r;return t.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.default)("https://api.tvmaze.com/search/shows?q=batman");case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,console.log("Show data fetched. Count: ".concat(r.length)),n.abrupt("return",{shows:r.map(function(n){return n.show})});case 8:case"end":return n.stop()}},n)}));var v=w;n.default=v})?r.apply(t,o):r)||(n.exports=u)},Tit0:function(n,t,e){"use strict";e.r(t);var r=e("SqZg"),o=e.n(r),u=e("TRZx"),a=e.n(u);function i(n,t){return(i=a.a||function(n,t){return n.__proto__=t,n})(n,t)}function s(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=o()(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&i(n,t)}e.d(t,"default",function(){return s})},a7VT:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return i});var r=e("Bhuq"),o=e.n(r),u=e("TRZx"),a=e.n(u);function i(n){return(i=a.a?o.a:function(n){return n.__proto__||o()(n)})(n)}},"m/Gl":function(n,t,e){"use strict";e.r(t),t.default=function(n,t){return t=t||{},new Promise(function(e,r){var o=new XMLHttpRequest,u=[],a=[],i={},s=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:s,headers:{keys:function(){return u},entries:function(){return a},get:function(n){return i[n.toLowerCase()]},has:function(n){return n.toLowerCase()in i}}}};for(var c in o.open(t.method||"get",n,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(n,t,e){u.push(t=t.toLowerCase()),a.push([t,e]),i[t]=i[t]?i[t]+","+e:e}),e(s())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(c,t.headers[c]);o.send(t.body||null)})}},sLSF:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return a});var r=e("hfKm"),o=e.n(r);function u(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(n,r.key,r)}}function a(n,t,e){return t&&u(n.prototype,t),e&&u(n,e),n}},vlRD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])},zgjP:function(n,t,e){n.exports=window.fetch||(window.fetch=e("m/Gl").default||e("m/Gl"))}},[["vlRD",1,0]]]);