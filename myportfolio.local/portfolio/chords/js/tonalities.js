/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/tonalities.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/common/Btns.js":
/*!***************************!*\
  !*** ./js/common/Btns.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Btns =
/*#__PURE__*/
function () {
  function Btns(options) {
    _classCallCheck(this, Btns);

    this.elem = options.elem;
    this.name = $(this.elem).attr('name');
  }

  _createClass(Btns, [{
    key: "enable",
    value: function enable() {
      $(this.elem).prop('disabled', false);
    }
  }, {
    key: "disable",
    value: function disable() {
      $(this.elem).prop('disabled', true);
    }
  }]);

  return Btns;
}();

/* harmony default export */ __webpack_exports__["default"] = (Btns);

/***/ }),

/***/ "./js/common/chords/chords.js":
/*!************************************!*\
  !*** ./js/common/chords/chords.js ***!
  \************************************/
/*! exports provided: GAMMA_NOTES, CHORD_TONICS, CHORD_TYPES, MAJOR, MINOR, TONALITY_MARGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMMA_NOTES", function() { return GAMMA_NOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHORD_TONICS", function() { return CHORD_TONICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHORD_TYPES", function() { return CHORD_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAJOR", function() { return MAJOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINOR", function() { return MINOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TONALITY_MARGIN", function() { return TONALITY_MARGIN; });
var GAMMA_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'H']; // const CHORD_TONICS = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#','Gb'], 'G', ['G#','Ab'], 'A', ['A#','Hb'], 'H'];

var CHORD_TONICS = [['H#', 'C'], ['C#', 'Db'], 'D', ['D#', 'Eb'], ['E', 'Fb'], ['E#', 'F'], ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Hb'], ['H', 'Cb']];
var CHORD_TYPES = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11'];
var P = 1; // Полутон

var T = 2 * P; // Тон

var MAJOR = [T, T, P, T, T, T, P]; // Мажорный звукоряд

var MINOR = [T, P, T, T, P, T, T]; // Минорный звукоряд



/***/ }),

/***/ "./js/common/menu/Menu.js":
/*!********************************!*\
  !*** ./js/common/menu/Menu.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu =
/*#__PURE__*/
function () {
  function Menu(options) {
    _classCallCheck(this, Menu);

    this.items = [];

    this._createMenu(options);
  }

  _createClass(Menu, [{
    key: "_createMenu",
    value: function _createMenu(options) {
      var nav = $('<nav></nav>');
      var menu = $('<ul></ul>').addClass('nav__menu').prependTo(nav);

      for (var i = 0; i < options.length; i++) {
        var str = "<li class=\"nav__menu-item\">\n               <a href=\"/portfolio/chords/".concat(options[i][1], ".html\">").concat(options[i][0], "</a>\n             </li>");
        $(menu).append(str);
        this.items.push(options[i][0]);
      }

      $('body').prepend(nav);
    }
  }]);

  return Menu;
}();

module.exports = Menu;

/***/ }),

/***/ "./js/common/menu/createMenu.js":
/*!**************************************!*\
  !*** ./js/common/menu/createMenu.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Menu = __webpack_require__(/*! ../menu/Menu */ "./js/common/menu/Menu.js");

var menu = new Menu([['Главная', 'index'], ['Транспонирование аккордов', 'transpose'], ['Тональности', 'tonalities']]);
module.exports.menu = menu;

/***/ }),

/***/ "./js/tonalities.js":
/*!**************************!*\
  !*** ./js/tonalities.js ***!
  \**************************/
/*! exports provided: gamma, selectsTonality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectsTonality", function() { return selectsTonality; });
/* harmony import */ var _common_menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/menu/Menu */ "./js/common/menu/Menu.js");
/* harmony import */ var _common_menu_Menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_menu_Menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tonalities_BtnTonality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tonalities/BtnTonality */ "./js/tonalities/BtnTonality.js");
/* harmony import */ var _tonalities_Gamma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tonalities/Gamma */ "./js/tonalities/Gamma.js");





var gamma;
var selectsTonality;
$(document).ready(function () {
  __webpack_require__(/*! ./common/menu/createMenu */ "./js/common/menu/createMenu.js");

  gamma = new _tonalities_Gamma__WEBPACK_IMPORTED_MODULE_2__["default"]({
    elem: $('.stave__notes')[0]
  });
  selectsTonality = [];
  $('.tonality-selection select').each(function () {
    selectsTonality.push(this);
  });
  var btnTonality = new _tonalities_BtnTonality__WEBPACK_IMPORTED_MODULE_1__["default"]({
    elem: $('.tonality-selection__show')[0]
  });
  gamma.drawStave();
});


/***/ }),

/***/ "./js/tonalities/BtnTonality.js":
/*!**************************************!*\
  !*** ./js/tonalities/BtnTonality.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Btns */ "./js/common/Btns.js");
/* harmony import */ var _tonalities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tonalities */ "./js/tonalities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var BtnTonality =
/*#__PURE__*/
function (_Btns) {
  _inherits(BtnTonality, _Btns);

  function BtnTonality(options) {
    var _this;

    _classCallCheck(this, BtnTonality);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BtnTonality).call(this, options));
    _this.elem.onclick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BtnTonality, [{
    key: "handleClick",
    value: function handleClick() {
      _tonalities__WEBPACK_IMPORTED_MODULE_1__["gamma"].selections.length = 0;
      _tonalities__WEBPACK_IMPORTED_MODULE_1__["selectsTonality"].forEach(function (item) {
        _tonalities__WEBPACK_IMPORTED_MODULE_1__["gamma"].selections.push(item.value);

        if (_tonalities__WEBPACK_IMPORTED_MODULE_1__["gamma"].selections[_tonalities__WEBPACK_IMPORTED_MODULE_1__["gamma"].selections.length - 1] == '0') {
          $('.tonality-selection').find('[data-name=' + item.name + ']').removeClass('tonality-selection__hint_hidden');
        } else {
          $('.tonality-selection').find('[data-name=' + item.name + ']').addClass('tonality-selection__hint_hidden');
        }
      });

      if (_tonalities__WEBPACK_IMPORTED_MODULE_1__["gamma"].selections.every(function (item) {
        return item != '0';
      })) {
        if (!this.gammaDrawn) {
          _tonalities__WEBPACK_IMPORTED_MODULE_1__["gamma"].clearStave();
          _tonalities__WEBPACK_IMPORTED_MODULE_1__["gamma"].drawStave();
        }

        _tonalities__WEBPACK_IMPORTED_MODULE_1__["gamma"].drawGamma();
      }
    }
  }]);

  return BtnTonality;
}(_common_Btns__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BtnTonality);

/***/ }),

/***/ "./js/tonalities/Gamma.js":
/*!********************************!*\
  !*** ./js/tonalities/Gamma.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/chords/chords */ "./js/common/chords/chords.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Gamma =
/*#__PURE__*/
function () {
  function Gamma(options) {
    _classCallCheck(this, Gamma);

    this.elem = options.elem;

    if (this.elem) {
      this.ctx = this.elem.getContext('2d');
      this.ctx.font = '20px Arial';
      this.ctx.fillStyle = 'black';
      this.width = options.width || 600;
      this.height = options.height || 200;
      this.step = options.step || 20;
      this.margin = options.margin || 20;
      this.clefSize = this.height * 0.7;
      this.posNoteC = this.margin + this.step * 6;
    }

    this.selections = [];
    this.notes = [];
    this.gammaDrawn = false;
  }

  _createClass(Gamma, [{
    key: "clearStave",
    value: function clearStave() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.notes.length = 0;
      this.hideErrorMsg();

      this._hideTonalityName();
    }
  }, {
    key: "drawStave",
    value: function drawStave() {
      var marginT = this.margin * 2;

      for (var i = 1; i <= 5; i++) {
        this._drawLine(this.margin, marginT);

        marginT += this.step;
      }

      this.gammaDrawn = true;
    }
  }, {
    key: "_drawLine",
    value: function _drawLine(marginL, marginT) {
      this.ctx.beginPath();
      this.ctx.moveTo(marginL, marginT);
      this.ctx.lineTo(this.width - marginL, marginT);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }, {
    key: "drawGamma",
    value: function drawGamma() {
      var notes = this._defineNotes(this.selections[0], this.selections[1], this.selections[2]);

      if (notes.length == 0) this.showErrorMsg();else {
        this._drawNotes(notes);

        this._showTonalityName();
      }
    }
  }, {
    key: "_drawNotes",
    value: function _drawNotes(notes) {
      var marginL = this.margin + this.clefSize;
      var stepL = this.step * 3;
      var curPos = _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["GAMMA_NOTES"].indexOf(notes[0][0]);
      var marginT = this.posNoteC - curPos * this.step / 2;

      for (var i = 0; i < notes.length; i++) {
        if (notes[i][1]) this._drawSign(marginL - this.step * 1.5, marginT + this.step / 2, notes[i][1]);

        this._drawNote(marginL, marginT);

        this._drawLetter(marginL - this.step / 2, this.height - this.margin, notes[i]);

        marginL += stepL;
        marginT -= this.step / 2;
      }
    }
  }, {
    key: "_drawNote",
    value: function _drawNote(marginL, marginT) {
      this._drawEllipse(marginL, marginT, this.step / 2, this.step * 0.3);

      if (marginT <= this.margin || marginT >= this.posNoteC) {
        this._drawAdditionalLine(marginL, marginT);
      }
    }
  }, {
    key: "_drawEllipse",
    value: function _drawEllipse(x, y, a, b) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.translate(x, y);
      this.ctx.rotate(-30 * Math.PI / 180);
      this.ctx.scale(a / b, 1);
      this.ctx.arc(0, 0, b, 0, Math.PI * 2, true);
      this.ctx.restore();
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
    }
  }, {
    key: "_drawAdditionalLine",
    value: function _drawAdditionalLine(marginL, marginT) {
      this.ctx.beginPath();
      this.ctx.moveTo(marginL - this.step * 0.75, marginT);
      this.ctx.lineTo(marginL + this.step * 0.75, marginT);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }, {
    key: "_drawSign",
    value: function _drawSign(marginL, marginT, sign) {
      this.ctx.font = '30px Arial';
      this.ctx.fillText(sign, marginL, marginT);
    }
  }, {
    key: "_drawLetter",
    value: function _drawLetter(marginL, marginT, letter) {
      this.ctx.font = '20px Arial';
      this.ctx.fillText(letter, marginL, marginT);
    }
  }, {
    key: "_defineNotes",
    value: function _defineNotes(tonic, sign, mode) {
      var notes = [];
      mode = this._defineMode(mode);
      var currentLetter = tonic;

      var nextLetter = this._defineNextLetter(currentLetter);

      var currentNote = tonic;
      if (sign != 'no') currentNote += sign;

      var currentNotePos = this._definePos(currentNote);

      for (var i = 0; i < mode.length; i++) {
        notes.push(currentNote);
        currentNotePos += mode[i];
        if (currentNotePos >= _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"].length) currentNotePos = currentNotePos - _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"].length;
        currentNote = this._defineNote(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"][currentNotePos], nextLetter);
        if (!currentNote) return [];
        nextLetter = this._defineNextLetter(nextLetter);
      }

      return notes;
    }
  }, {
    key: "_defineNextLetter",
    value: function _defineNextLetter(currentTonic) {
      var currentTonicPos = _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["GAMMA_NOTES"].indexOf(currentTonic);
      var nextTonicPos = currentTonicPos + 1;
      if (nextTonicPos >= _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["GAMMA_NOTES"].length) nextTonicPos = 0;
      return _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["GAMMA_NOTES"][nextTonicPos];
    }
  }, {
    key: "_defineNote",
    value: function _defineNote(note, letter) {
      if (Array.isArray(note)) {
        for (var i = 0; i < note.length; i++) {
          if (note[i].includes(letter)) return note[i];
        }
      } else if (note.includes(letter)) {
        return note;
      } else {
        return false;
      }
    }
  }, {
    key: "_definePos",
    value: function _definePos(elem) {
      for (var i = 0; i < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"].length; i++) {
        if (Array.isArray(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"][i])) {
          for (var j = 0; j < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"][i].length; j++) {
            if (elem == _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"][i][j]) return i;
          }
        }

        if (elem == _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"][i]) return i;
      }
    }
  }, {
    key: "_defineMode",
    value: function _defineMode(mode) {
      if (mode == 'major') return _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["MAJOR"];else return _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["MINOR"];
    }
  }, {
    key: "_showTonalityName",
    value: function _showTonalityName() {
      $('.stave__tonality-name').removeClass('stave__tonality-name_hidden');
      $('.stave__tonality-tonic').html(this.selections[0], this.selections[1], this.selections[2]);
    }
  }, {
    key: "_hideTonalityName",
    value: function _hideTonalityName() {
      $('.stave__tonality-name').addClass('stave__tonality-name_hidden');
      $('.stave__tonality-tonic').html('');
    }
  }, {
    key: "showErrorMsg",
    value: function showErrorMsg() {
      $('.stave__error-msg').removeClass('stave__error-msg_hidden');
    }
  }, {
    key: "hideErrorMsg",
    value: function hideErrorMsg() {
      $('.stave__error-msg').addClass('stave__error-msg_hidden');
    }
  }]);

  return Gamma;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gamma);

/***/ })

/******/ });
//# sourceMappingURL=tonalities.js.map