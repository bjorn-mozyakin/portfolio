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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/transpose.js");
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

/***/ "./js/transpose.js":
/*!*************************!*\
  !*** ./js/transpose.js ***!
  \*************************/
/*! exports provided: textarea, song, btnsChangeTone, toneValue, btnChords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textarea", function() { return textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "song", function() { return song; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnsChangeTone", function() { return btnsChangeTone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toneValue", function() { return toneValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnChords", function() { return btnChords; });
/* harmony import */ var _common_menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/menu/Menu */ "./js/common/menu/Menu.js");
/* harmony import */ var _common_menu_Menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_menu_Menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transpose_Textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transpose/Textarea */ "./js/transpose/Textarea.js");
/* harmony import */ var _transpose_Song__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transpose/Song */ "./js/transpose/Song.js");
/* harmony import */ var _transpose_ToneValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transpose/ToneValue */ "./js/transpose/ToneValue.js");
/* harmony import */ var _transpose_BtnChangeTone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transpose/BtnChangeTone */ "./js/transpose/BtnChangeTone.js");
/* harmony import */ var _transpose_BtnStartStop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transpose/BtnStartStop */ "./js/transpose/BtnStartStop.js");
/* harmony import */ var _transpose_BtnChords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transpose/BtnChords */ "./js/transpose/BtnChords.js");
/* harmony import */ var _transpose_getAllChords__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transpose/getAllChords */ "./js/transpose/getAllChords.js");










var textarea;
var song;
var btnsChangeTone;
var toneValue;
var btnChords;
$(document).ready(function () {
  __webpack_require__(/*! ./common/menu/createMenu */ "./js/common/menu/createMenu.js");

  var btnsStartStop = [];
  $('.transpose__startstop').each(function () {
    btnsStartStop.push(new _transpose_BtnStartStop__WEBPACK_IMPORTED_MODULE_5__["default"]({
      elem: this
    }));
  });
  btnsChangeTone = [];
  $('.transpose__change-tone').each(function () {
    btnsChangeTone.push(new _transpose_BtnChangeTone__WEBPACK_IMPORTED_MODULE_4__["default"]({
      elem: this
    }));
  });
  btnChords = new _transpose_BtnChords__WEBPACK_IMPORTED_MODULE_6__["default"]({
    elem: $('.transpose__chords-btn')[0]
  });
  toneValue = new _transpose_ToneValue__WEBPACK_IMPORTED_MODULE_3__["default"]({
    elem: $('.transpose__tone-value')[0]
  });
  textarea = new _transpose_Textarea__WEBPACK_IMPORTED_MODULE_1__["default"]({
    elem: $('.transpose__textarea')[0]
  });
  song = new _transpose_Song__WEBPACK_IMPORTED_MODULE_2__["default"]({
    elem: $('.song')[0]
  });
});


/***/ }),

/***/ "./js/transpose/BtnChangeTone.js":
/*!***************************************!*\
  !*** ./js/transpose/BtnChangeTone.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Btns */ "./js/common/Btns.js");
/* harmony import */ var _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/chords/chords */ "./js/common/chords/chords.js");
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transpose */ "./js/transpose.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var BtnChangeTone =
/*#__PURE__*/
function (_Btns) {
  _inherits(BtnChangeTone, _Btns);

  function BtnChangeTone(options) {
    var _this;

    _classCallCheck(this, BtnChangeTone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BtnChangeTone).call(this, options));
    _this.elem.onclick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BtnChangeTone, [{
    key: "handleClick",
    value: function handleClick() {
      var step = this.defineStep();
      this.changeTone(step);
      _transpose__WEBPACK_IMPORTED_MODULE_2__["toneValue"].changeToneValue(step);

      if (_transpose__WEBPACK_IMPORTED_MODULE_2__["toneValue"].tone >= 12 || _transpose__WEBPACK_IMPORTED_MODULE_2__["toneValue"].tone <= -12) {
        this.disable();
      } else {
        _transpose__WEBPACK_IMPORTED_MODULE_2__["btnsChangeTone"].forEach(function (btn) {
          btn.enable();
        });
      }
    }
  }, {
    key: "defineStep",
    value: function defineStep() {
      var step;
      this.name == 'transpose__tone-up' ? step = 1 : this.name == 'transpose__tone-down' ? step = -1 : step = null;
      return step;
    }
  }, {
    key: "changeTone",
    value: function changeTone(step) {
      var _this2 = this;

      if (!_transpose__WEBPACK_IMPORTED_MODULE_2__["song"].sign) _transpose__WEBPACK_IMPORTED_MODULE_2__["song"].sign = this.defineSign();
      $('.chord__tonic').each(function (i, elem) {
        var currentTonePos = _this2.definePos(elem);

        var newTonicPos = currentTonePos + step;
        if (newTonicPos >= _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"].length) newTonicPos = 0;
        if (newTonicPos < 0) newTonicPos = _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"].length - 1;

        if (Array.isArray(_common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"][newTonicPos])) {
          var tonic = _this2.getShortestTonic(_common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"][newTonicPos]);

          if (tonic) $(elem).html(tonic);else $(elem).html(_common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"][newTonicPos][_transpose__WEBPACK_IMPORTED_MODULE_2__["song"].sign]);
        } else $(elem).html(_common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"][newTonicPos]);
      });
    }
  }, {
    key: "definePos",
    value: function definePos(elem) {
      for (var i = 0; i < _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"].length; i++) {
        if (Array.isArray(_common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"][i])) {
          for (var j = 0; j < _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"][i].length; j++) {
            if ($(elem).html() == _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"][i][j]) return i;
          }
        }

        if ($(elem).html() == _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__["CHORD_TONICS"][i]) return i;
      }
    }
  }, {
    key: "defineSign",
    value: function defineSign() {
      for (var i = 0; i < $('.chord__tonic').length; i++) {
        if ($('.chord__tonic')[i].innerHTML.includes('#')) return 0;
        if ($('.chord__tonic')[i].innerHTML.includes('b')) return 1;
      }

      return 0;
    }
  }, {
    key: "getShortestTonic",
    value: function getShortestTonic(chords) {
      return chords[0].length < chords[1].length ? chords[0] : chords[0].length > chords[1].length ? chords[1] : false;
    }
  }]);

  return BtnChangeTone;
}(_common_Btns__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BtnChangeTone);

/***/ }),

/***/ "./js/transpose/BtnChords.js":
/*!***********************************!*\
  !*** ./js/transpose/BtnChords.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Btns */ "./js/common/Btns.js");
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transpose */ "./js/transpose.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var BtnChords =
/*#__PURE__*/
function (_Btns) {
  _inherits(BtnChords, _Btns);

  function BtnChords(options) {
    var _this;

    _classCallCheck(this, BtnChords);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BtnChords).call(this, options));
    _this.elem.onclick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.valDefault = $(_this.elem).html();
    return _this;
  }

  _createClass(BtnChords, [{
    key: "handleClick",
    value: function handleClick() {
      this.changeValue();
      _transpose__WEBPACK_IMPORTED_MODULE_1__["song"].changeChordsVisibility();
      _transpose__WEBPACK_IMPORTED_MODULE_1__["btnsChangeTone"].forEach(function (btn) {
        $(btn.elem).is(':disabled') ? btn.enable() : btn.disable();
      });
    }
  }, {
    key: "changeValue",
    value: function changeValue() {
      $(this.elem).toggleClass('transpose__chords-btn_hide');

      if ($(this.elem).hasClass('transpose__chords-btn_hide')) {
        $(this.elem).html($(this.elem).data('chordsShow'));
      } else {
        $(this.elem).html($(this.elem).data('chordsHide'));
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.disable();
      $(this.elem).removeClass('transpose__chords-btn_hide');
      $(this.elem).html(this.valDefault);
    }
  }]);

  return BtnChords;
}(_common_Btns__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BtnChords);

/***/ }),

/***/ "./js/transpose/BtnStartStop.js":
/*!**************************************!*\
  !*** ./js/transpose/BtnStartStop.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Btns */ "./js/common/Btns.js");
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transpose */ "./js/transpose.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var BtnStartStop =
/*#__PURE__*/
function (_Btns) {
  _inherits(BtnStartStop, _Btns);

  function BtnStartStop(options) {
    var _this;

    _classCallCheck(this, BtnStartStop);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BtnStartStop).call(this, options));
    _this.elem.onclick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BtnStartStop, [{
    key: "handleClick",
    value: function handleClick() {
      if (this.name == 'transpose__start') {
        $(this.elem).toggleClass('transpose__start_hidden');
        $('.transpose__stop').toggleClass('transpose__stop_hidden');
        _transpose__WEBPACK_IMPORTED_MODULE_1__["btnsChangeTone"].forEach(function (btn) {
          return btn.enable();
        });
        _transpose__WEBPACK_IMPORTED_MODULE_1__["btnChords"].enable();
        _transpose__WEBPACK_IMPORTED_MODULE_1__["textarea"].setText($(_transpose__WEBPACK_IMPORTED_MODULE_1__["textarea"].elem).val());
        _transpose__WEBPACK_IMPORTED_MODULE_1__["textarea"].toggle();
        _transpose__WEBPACK_IMPORTED_MODULE_1__["song"].show(_transpose__WEBPACK_IMPORTED_MODULE_1__["textarea"]); // song.setData(textarea.text, textarea.height);
        // song.toggle();
        // song.wrapChords();
      } else if (this.name == 'transpose__stop') {
        $(this.elem).toggleClass('transpose__stop_hidden');
        $('.transpose__start').toggleClass('transpose__start_hidden');
        _transpose__WEBPACK_IMPORTED_MODULE_1__["btnsChangeTone"].forEach(function (btn) {
          return btn.disable();
        });
        _transpose__WEBPACK_IMPORTED_MODULE_1__["btnChords"].reset(); // song.clearText();
        // song.clearSign();
        // song.toggle();

        _transpose__WEBPACK_IMPORTED_MODULE_1__["song"].hide();
        _transpose__WEBPACK_IMPORTED_MODULE_1__["textarea"].setText(_transpose__WEBPACK_IMPORTED_MODULE_1__["textarea"].text);
        _transpose__WEBPACK_IMPORTED_MODULE_1__["textarea"].toggle();
        _transpose__WEBPACK_IMPORTED_MODULE_1__["toneValue"].reset();
      } else {
        new Error('Warn: unknown button was pushed');
      }
    }
  }]);

  return BtnStartStop;
}(_common_Btns__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BtnStartStop);

/***/ }),

/***/ "./js/transpose/Song.js":
/*!******************************!*\
  !*** ./js/transpose/Song.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose_getAllChords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transpose/getAllChords */ "./js/transpose/getAllChords.js");
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transpose */ "./js/transpose.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Song =
/*#__PURE__*/
function () {
  function Song(options) {
    _classCallCheck(this, Song);

    this.elem = options.elem;
    this.text = null;
    this.sign = null;
  }

  _createClass(Song, [{
    key: "show",
    value: function show(textarea) {
      this.setData(textarea.text, textarea.height);
      this.toggle();
      this.wrapChords();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.clearText();
      this.clearSign();
      this.toggle();
      this.elem.style.height = '';
    }
  }, {
    key: "toggle",
    value: function toggle() {
      $(this.elem).toggleClass('song_hidden');
    }
  }, {
    key: "changeChordsVisibility",
    value: function changeChordsVisibility() {
      $('.song__chord').toggleClass('song__chord_hidden');
    }
  }, {
    key: "setData",
    value: function setData(text, height) {
      this.text = text;
      $(this.elem).html(this.text);
      this.elem.style.height = height;
    }
  }, {
    key: "clearText",
    value: function clearText() {
      this.text = '';
    }
  }, {
    key: "clearSign",
    value: function clearSign() {
      this.sign = null;
    }
  }, {
    key: "wrapChords",
    value: function wrapChords() {
      var text = this.text;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _transpose_getAllChords__WEBPACK_IMPORTED_MODULE_0__["ALL_CHORDS"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var chord = _step.value;
          var position = 0;

          while (true) {
            var startPos = text.indexOf(chord, position);
            if (startPos == -1) break;
            var endPos = startPos + chord.length;
            var conditions = (text[startPos - 1] == ' ' || text[startPos - 1] == '\n' || text[startPos - 1] == undefined) && (text[endPos] == ' ' || text[endPos] == '\n' || text[endPos] == undefined);

            if (conditions) {
              var wrappedChord = '<span>' + text.slice(startPos, endPos) + '</span>';
              var textBefore = text.slice(0, startPos);
              var textAfter = text.slice(endPos);
              text = textBefore + wrappedChord + textAfter;
              position = endPos + 13 + 1; // 13 - длина блока <span></span> +1 - следующий элемент
            } else {
              position = endPos + 1;
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.text = text;
      $(this.elem).html(this.text);
      $('.song span').addClass('song__chord chord');
      this.wrapChordsTonics(); // for (let tonic of CHORD_TONICS) {
      //   let position = 0;
      //   while(true) {
      //     let startPos = this.text.indexOf(tonic, position);
      //     if (startPos == -1) break;
      //     let nextSym = this.text.slice(startPos + 1, startPos + 2)
      //     nextSym == '\n' || nextSym == ' ' || CHORD_TONICS.indexOf(nextSym) != -1
      //     let midPos = this.text.indexOf('\n', startPos);
      //     let endPos = this.text.indexOf('\n', startPos);
      //     if (endPos == -1) endPos = this.text.indexOf(' ', startPos);
      //     let wrappedChord = "<span>" + this.text.slice(startPos, endPos) + "</span>";
      //     let textBefore = this.text.slice(0, startPos);
      //     let textAfter = this.text.slice(endPos);
      //     this.text = textBefore + wrappedChord + textAfter;
      //     position = startPos + 14;
      //   };
      // };
    }
  }, {
    key: "wrapChordsTonics",
    value: function wrapChordsTonics() {
      $('.chord').each(function () {
        var tonic = $(this).html().slice(0, 1);
        if ($(this).html().slice(1, 2) == '#') tonic += '#';
        if ($(this).html().slice(1, 2) == 'b') tonic += 'b';
        var tonicStart = $(this).html().indexOf(tonic);
        var tonicEnd = tonicStart + tonic.length;
        var newTonic = $('<span></span>').addClass('chord__tonic').html(tonic);
        var chordType = $(this).html().slice(tonicEnd);
        $(this).html(newTonic[0].outerHTML + chordType);
      });
    }
  }]);

  return Song;
}();

/* harmony default export */ __webpack_exports__["default"] = (Song);

/***/ }),

/***/ "./js/transpose/Textarea.js":
/*!**********************************!*\
  !*** ./js/transpose/Textarea.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Textarea =
/*#__PURE__*/
function () {
  function Textarea(options) {
    _classCallCheck(this, Textarea);

    this.elem = options.elem;
    this.elem.oninput = this.handleInput.bind(this);
    this.text = '';
    this.height = null;
  }

  _createClass(Textarea, [{
    key: "handleInput",
    value: function handleInput() {
      if (this.elem.value == '') {
        this.elem.style.height = '';
        this.height = null;
      } else {
        this.elem.style.height = "auto";
        this.elem.style.height = this.elem.scrollHeight + 'px';
        this.height = this.elem.style.height;
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      $(this.elem).toggleClass('transpose__textarea_hidden');
    }
  }, {
    key: "setText",
    value: function setText(text) {
      this.text = text;
    }
  }]);

  return Textarea;
}();

/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./js/transpose/ToneValue.js":
/*!***********************************!*\
  !*** ./js/transpose/ToneValue.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Btns */ "./js/common/Btns.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ToneValue =
/*#__PURE__*/
function (_Btns) {
  _inherits(ToneValue, _Btns);

  function ToneValue(options) {
    var _this;

    _classCallCheck(this, ToneValue);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToneValue).call(this, options));
    _this.tone = 0;
    return _this;
  }

  _createClass(ToneValue, [{
    key: "reset",
    value: function reset() {
      this.tone = 0;
      $(this.elem).html(this.tone);
    }
  }, {
    key: "changeToneValue",
    value: function changeToneValue(step) {
      this.tone += step;
      $(this.elem).html(this.tone);
    }
  }]);

  return ToneValue;
}(_common_Btns__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ToneValue);

/***/ }),

/***/ "./js/transpose/getAllChords.js":
/*!**************************************!*\
  !*** ./js/transpose/getAllChords.js ***!
  \**************************************/
/*! exports provided: ALL_CHORDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_CHORDS", function() { return ALL_CHORDS; });
/* harmony import */ var _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/chords/chords */ "./js/common/chords/chords.js");


function getAllChords() {
  var allChords = [];
  var simpleChords = [];

  for (var i = 0; i < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"].length; i++) {
    if (Array.isArray(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"][i])) {
      for (var j = 0; j < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"][i].length; j++) {
        simpleChords.push(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"][i][j]);
      }
    } else {
      simpleChords.push(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TONICS"][i]);
    }
  }

  allChords = allChords.concat(simpleChords);

  for (var _i = 0; _i < simpleChords.length; _i++) {
    for (var _j = 0; _j < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TYPES"].length; _j++) {
      allChords.push(simpleChords[_i] + _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__["CHORD_TYPES"][_j]);
    }
  }

  return allChords;
}

var ALL_CHORDS = getAllChords();

/***/ })

/******/ });
//# sourceMappingURL=transpose.js.map