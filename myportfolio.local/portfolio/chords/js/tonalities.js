!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return s});var i=["C","D","E","F","G","A","H"],r=[["H#","C"],["C#","Db"],"D",["D#","Eb"],["E","Fb"],["E#","F"],["F#","Gb"],"G",["G#","Ab"],"A",["A#","Hb"],["H","Cb"]],o=["m","7","m7","6","m6","sus2","sus4","dim","aug","9","11"],a=[2,2,1,2,2,2,1],s=[2,1,2,2,1,2,2]},function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.elem=e.elem,this.name=$(this.elem).attr("name")}var e,n,r;return e=t,(n=[{key:"enable",value:function(){$(this.elem).prop("disabled",!1)}},{key:"disable",value:function(){$(this.elem).prop("disabled",!0)}}])&&i(e.prototype,n),r&&i(e,r),t}();e.a=r},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=[],this._createMenu(e)}var e,i,r;return e=t,(i=[{key:"_createMenu",value:function(t){for(var e=$("<nav></nav>"),n=$("<ul></ul>").addClass("nav__menu").prependTo(e),i=0;i<t.length;i++){var r='<li class="nav__menu-item">\n               <a href="/portfolio/chords/'.concat(t[i][1],'.html">').concat(t[i][0],"</a>\n             </li>");$(n).append(r),this.items.push(t[i][0])}$("body").prepend(e)}}])&&n(e.prototype,i),r&&n(e,r),t}();t.exports=i},function(t,e,n){var i=new(n(2))([["Главная","index"],["Транспонирование аккордов","transpose"],["Тональности","tonalities"]]);t.exports.menu=i},,,,,,function(t,e,n){"use strict";n.r(e);n(2);var i=n(1);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c=function(t){function e(t){var n,i,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(n=!(o=a(e).call(this,t))||"object"!==r(o)&&"function"!=typeof o?l(i):o).elem.onclick=n.handleClick.bind(l(l(n))),n}var n,c,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,i["a"]),n=e,(c=[{key:"handleClick",value:function(){f.selections.length=0,d.forEach(function(t){f.selections.push(t.value),"0"==f.selections[f.selections.length-1]?$(".tonality-selection").find("[data-name="+t.name+"]").removeClass("tonality-selection__hint_hidden"):$(".tonality-selection").find("[data-name="+t.name+"]").addClass("tonality-selection__hint_hidden")}),f.selections.every(function(t){return"0"!=t})&&(this.gammaDrawn||(f.clearStave(),f.drawStave()),f.drawGamma())}}])&&o(n.prototype,c),u&&o(n,u),e}(),u=n(0);function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f,d,y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.elem=e.elem,this.elem&&(this.ctx=this.elem.getContext("2d"),this.ctx.font="20px Arial",this.ctx.fillStyle="black",this.width=e.width||600,this.height=e.height||200,this.step=e.step||20,this.margin=e.margin||20,this.clefSize=.7*this.height,this.posNoteC=this.margin+6*this.step),this.selections=[],this.notes=[],this.gammaDrawn=!1}var e,n,i;return e=t,(n=[{key:"clearStave",value:function(){this.ctx.clearRect(0,0,this.width,this.height),this.notes.length=0,this.hideErrorMsg(),this._hideTonalityName()}},{key:"drawStave",value:function(){for(var t=2*this.margin,e=1;e<=5;e++)this._drawLine(this.margin,t),t+=this.step;this.gammaDrawn=!0}},{key:"_drawLine",value:function(t,e){this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(this.width-t,e),this.ctx.stroke(),this.ctx.closePath()}},{key:"drawGamma",value:function(){var t=this._defineNotes(this.selections[0],this.selections[1],this.selections[2]);0==t.length?this.showErrorMsg():(this._drawNotes(t),this._showTonalityName())}},{key:"_drawNotes",value:function(t){for(var e=this.margin+this.clefSize,n=3*this.step,i=u.c.indexOf(t[0][0]),r=this.posNoteC-i*this.step/2,o=0;o<t.length;o++)t[o][1]&&this._drawSign(e-1.5*this.step,r+this.step/2,t[o][1]),this._drawNote(e,r),this._drawLetter(e-this.step/2,this.height-this.margin,t[o]),e+=n,r-=this.step/2}},{key:"_drawNote",value:function(t,e){this._drawEllipse(t,e,this.step/2,.3*this.step),(e<=this.margin||e>=this.posNoteC)&&this._drawAdditionalLine(t,e)}},{key:"_drawEllipse",value:function(t,e,n,i){this.ctx.save(),this.ctx.beginPath(),this.ctx.translate(t,e),this.ctx.rotate(-30*Math.PI/180),this.ctx.scale(n/i,1),this.ctx.arc(0,0,i,0,2*Math.PI,!0),this.ctx.restore(),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke()}},{key:"_drawAdditionalLine",value:function(t,e){this.ctx.beginPath(),this.ctx.moveTo(t-.75*this.step,e),this.ctx.lineTo(t+.75*this.step,e),this.ctx.stroke(),this.ctx.closePath()}},{key:"_drawSign",value:function(t,e,n){this.ctx.font="30px Arial",this.ctx.fillText(n,t,e)}},{key:"_drawLetter",value:function(t,e,n){this.ctx.font="20px Arial",this.ctx.fillText(n,t,e)}},{key:"_defineNotes",value:function(t,e,n){var i=[];n=this._defineMode(n);var r=t,o=this._defineNextLetter(r),a=t;"no"!=e&&(a+=e);for(var s=this._definePos(a),l=0;l<n.length;l++){if(i.push(a),(s+=n[l])>=u.a.length&&(s-=u.a.length),!(a=this._defineNote(u.a[s],o)))return[];o=this._defineNextLetter(o)}return i}},{key:"_defineNextLetter",value:function(t){var e=u.c.indexOf(t)+1;return e>=u.c.length&&(e=0),u.c[e]}},{key:"_defineNote",value:function(t,e){if(!Array.isArray(t))return!!t.includes(e)&&t;for(var n=0;n<t.length;n++)if(t[n].includes(e))return t[n]}},{key:"_definePos",value:function(t){for(var e=0;e<u.a.length;e++){if(Array.isArray(u.a[e]))for(var n=0;n<u.a[e].length;n++)if(t==u.a[e][n])return e;if(t==u.a[e])return e}}},{key:"_defineMode",value:function(t){return"major"==t?u.d:u.e}},{key:"_showTonalityName",value:function(){$(".stave__tonality-name").removeClass("stave__tonality-name_hidden"),$(".stave__tonality-tonic").html(this.selections[0],this.selections[1],this.selections[2])}},{key:"_hideTonalityName",value:function(){$(".stave__tonality-name").addClass("stave__tonality-name_hidden"),$(".stave__tonality-tonic").html("")}},{key:"showErrorMsg",value:function(){$(".stave__error-msg").removeClass("stave__error-msg_hidden")}},{key:"hideErrorMsg",value:function(){$(".stave__error-msg").addClass("stave__error-msg_hidden")}}])&&h(e.prototype,n),i&&h(e,i),t}();n.d(e,"gamma",function(){return f}),n.d(e,"selectsTonality",function(){return d}),$(document).ready(function(){n(3),f=new y({elem:$(".stave__notes")[0]}),d=[],$(".tonality-selection select").each(function(){d.push(this)});new c({elem:$(".tonality-selection__show")[0]});f.drawStave()})}]);