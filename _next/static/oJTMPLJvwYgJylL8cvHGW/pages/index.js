(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0iUn":function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.r(t),e.d(t,"default",function(){return r})},MI3g:function(n,t,e){"use strict";e.r(t);var r=e("XVgq"),u=e.n(r),o=e("Z7t5"),a=e.n(o);function i(n){return(i="function"===typeof a.a&&"symbol"===typeof u.a?function(n){return typeof n}:function(n){return n&&"function"===typeof a.a&&n.constructor===a.a&&n!==a.a.prototype?"symbol":typeof n})(n)}function c(n){return(c="function"===typeof a.a&&"symbol"===i(u.a)?function(n){return i(n)}:function(n){return n&&"function"===typeof a.a&&n.constructor===a.a&&n!==a.a.prototype?"symbol":i(n)})(n)}function f(n,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}e.d(t,"default",function(){return f})},RNiq:function(n,t,e){"use strict";var r=e("KI45");e("hfKm")(t,"__esModule",{value:!0}),t.default=void 0;var u=r(e("ln6h")),o=r(e("O40h")),a=r(e("0iUn")),i=r(e("sLSF")),c=r(e("MI3g")),f=r(e("a7VT")),s=r(e("Tit0")),l=r(e("q1tI")),p=r(e("h09O")),d=r(e("u7ub")),h=l.default.createElement,w=function(n){function t(){return(0,a.default)(this,t),(0,c.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,s.default)(t,n),(0,i.default)(t,[{key:"render",value:function(){var n=this.props.shows;return h(p.default,null,h("h1",null,"batman list"),h("ul",null,n.map(function(n){return h("li",{key:n.id},h(d.default,{href:"".concat("/show/").concat(n.id),as:"".concat("/show/").concat(n.id)},h("a",null,n.name)))})))}}]),t}(l.default.Component);w.getInitialProps=(0,o.default)(u.default.mark(function n(){var t,e;return u.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.tvmaze.com/search/shows?q=batman");case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,console.log("Show data fetched. Count: ".concat(e.length)),n.abrupt("return",{shows:e.map(function(n){return n.show})});case 8:case"end":return n.stop()}},n)}));var y=w;t.default=y},Tit0:function(n,t,e){"use strict";e.r(t);var r=e("SqZg"),u=e.n(r),o=e("TRZx"),a=e.n(o);function i(n,t){return(i=a.a||function(n,t){return n.__proto__=t,n})(n,t)}function c(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=u()(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&i(n,t)}e.d(t,"default",function(){return c})},a7VT:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return i});var r=e("Bhuq"),u=e.n(r),o=e("TRZx"),a=e.n(o);function i(n){return(i=a.a?u.a:function(n){return n.__proto__||u()(n)})(n)}},sLSF:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return a});var r=e("hfKm"),u=e.n(r);function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),u()(n,r.key,r)}}function a(n,t,e){return t&&o(n.prototype,t),e&&o(n,e),n}},vlRD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",1,0]]]);