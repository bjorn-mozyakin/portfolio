!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return u});var r=["C","D","E","F","G","A","H"],o=[["H#","C"],["C#","Db"],"D",["D#","Eb"],["E","Fb"],["E#","F"],["F#","Gb"],"G",["G#","Ab"],"A",["A#","Hb"],["H","Cb"]],i=["m","7","m7","6","m6","sus2","sus4","dim","aug","9","11"],a=[2,2,1,2,2,2,1],u=[2,1,2,2,1,2,2]},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elem=t.elem,this.name=$(this.elem).attr("name")}var t,n,o;return t=e,(n=[{key:"enable",value:function(){$(this.elem).prop("disabled",!1)}},{key:"disable",value:function(){$(this.elem).prop("disabled",!0)}}])&&r(t.prototype,n),o&&r(t,o),e}();t.a=o},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.items=[],this._createMenu(t)}var t,r,o;return t=e,(r=[{key:"_createMenu",value:function(e){for(var t=$("<nav></nav>"),n=$("<ul></ul>").addClass("nav__menu").prependTo(t),r=0;r<e.length;r++){var o='<li class="nav__menu-item">\n               <a href="/portfolio/chords/'.concat(e[r][1],'.html">').concat(e[r][0],"</a>\n             </li>");$(n).append(o),this.items.push(e[r][0])}$("body").prepend(t)}}])&&n(t.prototype,r),o&&n(t,o),e}();e.exports=r},function(e,t,n){var r=new(n(2))([["Главная","index"],["Транспонирование аккордов","transpose"],["Тональности","tonalities"]]);e.exports.menu=r},,,,,function(e,t,n){"use strict";n.r(t);n(2);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elem=t.elem}var t,n,o;return t=e,(n=[{key:"toggle",value:function(){$(this.elem).toggleClass("transpose__textarea_hidden")}},{key:"setText",value:function(e){this.text=e}}])&&r(t.prototype,n),o&&r(t,o),e}(),i=n(0);var a=function(){for(var e=[],t=[],n=0;n<i.a.length;n++)if(Array.isArray(i.a[n]))for(var r=0;r<i.a[n].length;r++)t.push(i.a[n][r]);else t.push(i.a[n]);e=e.concat(t);for(var o=0;o<t.length;o++)for(var a=0;a<i.b.length;a++)e.push(t[o]+i.b[a]);return e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elem=t.elem,this.text=null,this.sign=null}var t,n,r;return t=e,(n=[{key:"toggle",value:function(){$(this.elem).toggleClass("song_hidden")}},{key:"changeChordsVisibility",value:function(){$(".song__chord").toggleClass("song__chord_hidden")}},{key:"setText",value:function(e){this.text=e,$(this.elem).html(this.text)}},{key:"clearText",value:function(){this.text=""}},{key:"clearSign",value:function(){this.sign=null}},{key:"wrapChords",value:function(){var e=this.text,t=!0,n=!1,r=void 0;try{for(var o,i=a[Symbol.iterator]();!(t=(o=i.next()).done);t=!0)for(var u=o.value,l=0;;){var c=e.indexOf(u,l);if(-1==c)break;var s=c+u.length;if(!(" "!=e[c-1]&&"\n"!=e[c-1]&&null!=e[c-1]||" "!=e[s]&&"\n"!=e[s]&&null!=e[s])){var f="<span>"+e.slice(c,s)+"</span>",h=e.slice(0,c),p=e.slice(s);e=h+f+p,l=s+13+1}else l=s+1}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}this.text=e,$(this.elem).html(this.text),$(".song span").addClass("song__chord chord"),this.wrapChordsTonics()}},{key:"wrapChordsTonics",value:function(){$(".chord").each(function(){var e=$(this).html().slice(0,1);"#"==$(this).html().slice(1,2)&&(e+="#"),"b"==$(this).html().slice(1,2)&&(e+="b");var t=$(this).html().indexOf(e)+e.length,n=$("<span></span>").addClass("chord__tonic").html(e),r=$(this).html().slice(t);$(this).html(n[0].outerHTML+r)})}}])&&u(t.prototype,n),r&&u(t,r),e}(),c=n(1);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,p(t).call(this,e))).tone=0,n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,c["a"]),n=t,(r=[{key:"reset",value:function(){this.tone=0,$(this.elem).html(this.tone)}},{key:"changeToneValue",value:function(e){this.tone+=e,$(this.elem).html(this.tone)}}])&&f(n.prototype,r),o&&f(n,o),t}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=v(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?g(r):o).elem.onclick=n.handleClick.bind(g(g(n))),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,c["a"]),n=t,(r=[{key:"handleClick",value:function(){var e=this.defineStep();this.changeTone(e),F.changeToneValue(e),F.tone>=12||F.tone<=-12?this.disable():D.forEach(function(e){e.enable()})}},{key:"defineStep",value:function(){return"transpose__tone-up"==this.name?1:"transpose__tone-down"==this.name?-1:null}},{key:"changeTone",value:function(e){var t=this;V.sign||(V.sign=this.defineSign()),$(".chord__tonic").each(function(n,r){var o=t.definePos(r)+e;if(o>=i.a.length&&(o=0),o<0&&(o=i.a.length-1),Array.isArray(i.a[o])){var a=t.getShortestTonic(i.a[o]);a?$(r).html(a):$(r).html(i.a[o][V.sign])}else $(r).html(i.a[o])})}},{key:"definePos",value:function(e){for(var t=0;t<i.a.length;t++){if(Array.isArray(i.a[t]))for(var n=0;n<i.a[t].length;n++)if($(e).html()==i.a[t][n])return t;if($(e).html()==i.a[t])return t}}},{key:"defineSign",value:function(){for(var e=0;e<$(".chord__tonic").length;e++){if($(".chord__tonic")[e].innerHTML.includes("#"))return 0;if($(".chord__tonic")[e].innerHTML.includes("b"))return 1}return 0}},{key:"getShortestTonic",value:function(e){return e[0].length<e[1].length?e[0]:e[0].length>e[1].length&&e[1]}}])&&m(n.prototype,r),o&&m(n,o),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var x=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=j(t).call(this,e))||"object"!==O(o)&&"function"!=typeof o?S(r):o).elem.onclick=n.handleClick.bind(S(S(n))),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,c["a"]),n=t,(r=[{key:"handleClick",value:function(){"transpose__start"==this.name?($(this.elem).toggleClass("transpose__start_hidden"),$(".transpose__stop").toggleClass("transpose__stop_hidden"),D.forEach(function(e){return e.enable()}),G.enable(),H.setText($(H.elem).val()),H.toggle(),V.setText(H.text),V.toggle(),V.wrapChords()):"transpose__stop"==this.name?($(this.elem).toggleClass("transpose__stop_hidden"),$(".transpose__start").toggleClass("transpose__start_hidden"),D.forEach(function(e){return e.disable()}),G.reset(),V.clearText(),V.clearSign(),V.toggle(),H.setText(H.text),H.toggle(),F.reset()):new Error("Warn: unknown button was pushed")}}])&&k(n.prototype,r),o&&k(n,o),t}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var H,V,D,F,G,R=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=E(t).call(this,e))||"object"!==T(o)&&"function"!=typeof o?M(r):o).elem.onclick=n.handleClick.bind(M(M(n))),n.valDefault=$(n.elem).html(),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,c["a"]),n=t,(r=[{key:"handleClick",value:function(){this.changeValue(),V.changeChordsVisibility(),D.forEach(function(e){$(e.elem).is(":disabled")?e.enable():e.disable()})}},{key:"changeValue",value:function(){$(this.elem).toggleClass("transpose__chords-btn_hide"),$(this.elem).hasClass("transpose__chords-btn_hide")?$(this.elem).html($(this.elem).data("chordsShow")):$(this.elem).html($(this.elem).data("chordsHide"))}},{key:"reset",value:function(){this.disable(),$(this.elem).removeClass("transpose__chords-btn_hide"),$(this.elem).html(this.valDefault)}}])&&P(n.prototype,r),o&&P(n,o),t}();n.d(t,"textarea",function(){return H}),n.d(t,"song",function(){return V}),n.d(t,"btnsChangeTone",function(){return D}),n.d(t,"toneValue",function(){return F}),n.d(t,"btnChords",function(){return G}),$(document).ready(function(){n(3);var e=[];$(".transpose__startstop").each(function(){e.push(new x({elem:this}))}),D=[],$(".transpose__change-tone").each(function(){D.push(new w({elem:this}))}),G=new R({elem:$(".transpose__chords-btn")[0]}),F=new b({elem:$(".transpose__tone-value")[0]}),H=new o({elem:$(".transpose__textarea")[0]}),V=new l({elem:$(".song")[0]})})}]);
//# sourceMappingURL=transpose.js.map