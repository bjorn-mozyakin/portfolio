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
/******/ 	return __webpack_require__(__webpack_require__.s = "./transpose.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/Btns.js":
/*!************************!*\
  !*** ./common/Btns.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Btns = function Btns(options) {\n  _classCallCheck(this, Btns);\n\n  this.elem = options.elem;\n  this.name = $(this.elem).attr('name');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Btns);\n\n//# sourceURL=webpack:///./common/Btns.js?");

/***/ }),

/***/ "./common/chords/chords.js":
/*!*********************************!*\
  !*** ./common/chords/chords.js ***!
  \*********************************/
/*! exports provided: CHORD_TONICS, CHORD_TYPES, MAJOR, MINOR, TONALITY_MARGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD_TONICS\", function() { return CHORD_TONICS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD_TYPES\", function() { return CHORD_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAJOR\", function() { return MAJOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MINOR\", function() { return MINOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TONALITY_MARGIN\", function() { return TONALITY_MARGIN; });\nvar CHORD_TONICS = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Hb'], 'H'];\nvar CHORD_TYPES = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11'];\nvar P = 1; // Полутон\n\nvar T = 2 * P; // Тон\n\nvar MAJOR = [T, T, P, T, T, T, P]; // Мажорный звукоряд\n\nvar MINOR = [T, P, T, T, P, T, T]; // Минорный звукоряд\n\nvar TONALITY_MARGIN = [140, 140, 130, 130, 120, 110, 110, 100, 100, 90, 90, 80, 70, 70, 60, 60, 50, 40, 40, 30, 30, 20, 20, 10, 0];\n\n\n//# sourceURL=webpack:///./common/chords/chords.js?");

/***/ }),

/***/ "./common/menu/Menu.js":
/*!*****************************!*\
  !*** ./common/menu/Menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Menu =\n/*#__PURE__*/\nfunction () {\n  function Menu(options) {\n    _classCallCheck(this, Menu);\n\n    this.items = [];\n\n    this._createMenu(options);\n  }\n\n  _createClass(Menu, [{\n    key: \"_createMenu\",\n    value: function _createMenu(options) {\n      var nav = $('<nav></nav>');\n      var menu = $('<ul></ul>').addClass('nav__menu').prependTo(nav);\n\n      for (var i = 0; i < options.length; i++) {\n        var str = \"<li class=\\\"nav__menu-item\\\">\\n               <a href=\\\"/portfolio/chords/\".concat(options[i][1], \".html\\\">\").concat(options[i][0], \"</a>\\n             </li>\");\n        $(menu).append(str);\n        this.items.push(options[i][0]);\n      }\n\n      $('body').prepend(nav);\n    }\n  }]);\n\n  return Menu;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./common/menu/Menu.js?");

/***/ }),

/***/ "./transpose.js":
/*!**********************!*\
  !*** ./transpose.js ***!
  \**********************/
/*! exports provided: CHORD_TONICS, CHORD_TYPES, MAJOR, MINOR, TONALITY_MARGIN, ALL_CHORDS, textarea, song, btnsChangeTone, toneValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD_TONICS\", function() { return CHORD_TONICS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD_TYPES\", function() { return CHORD_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAJOR\", function() { return MAJOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MINOR\", function() { return MINOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TONALITY_MARGIN\", function() { return TONALITY_MARGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_CHORDS\", function() { return ALL_CHORDS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textarea\", function() { return textarea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"song\", function() { return song; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnsChangeTone\", function() { return btnsChangeTone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toneValue\", function() { return toneValue; });\n/* harmony import */ var _common_menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/menu/Menu */ \"./common/menu/Menu.js\");\n/* harmony import */ var _transpose_Textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transpose/Textarea */ \"./transpose/Textarea.js\");\n/* harmony import */ var _transpose_Song__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transpose/Song */ \"./transpose/Song.js\");\n/* harmony import */ var _transpose_ToneValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transpose/ToneValue */ \"./transpose/ToneValue.js\");\n/* harmony import */ var _transpose_BtnStartStop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transpose/BtnStartStop */ \"./transpose/BtnStartStop.js\");\n/* harmony import */ var _transpose_BtnChangeTone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transpose/BtnChangeTone */ \"./transpose/BtnChangeTone.js\");\n/* harmony import */ var _transpose_getAllChords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transpose/getAllChords */ \"./transpose/getAllChords.js\");\n\n\n\n\n\n\n\n\n\nconsole.log('Transpose page'); // const ALL_CHORDS = getAllChords();\n\nvar textarea;\nvar song;\nvar toneValue;\nvar btnsChangeTone;\n$(document).ready(function () {\n  var menu = new _common_menu_Menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([['Главная', 'index'], ['Транспонирование аккордов', 'transpose'], ['Тональности', 'tonalities']]);\n  var btnsStartStop = [];\n  $('.transpos__startstop').each(function () {\n    btnsStartStop.push(new _transpose_BtnStartStop__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      elem: this\n    }));\n  });\n  btnsChangeTone = [];\n  $('.transpos__change-tone').each(function () {\n    btnsChangeTone.push(new _transpose_BtnChangeTone__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n      elem: this\n    }));\n  });\n  toneValue = new _transpose_ToneValue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    elem: $('.transpos__tone-value')[0]\n  });\n  textarea = new _transpose_Textarea__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    elem: $('.transpos__textarea')[0]\n  });\n  song = new _transpose_Song__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    elem: $('.song')[0]\n  });\n});\n\n\n//# sourceURL=webpack:///./transpose.js?");

/***/ }),

/***/ "./transpose/BtnChangeTone.js":
/*!************************************!*\
  !*** ./transpose/BtnChangeTone.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_Btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Btns */ \"./common/Btns.js\");\n/* harmony import */ var _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/chords/chords */ \"./common/chords/chords.js\");\n/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transpose */ \"./transpose.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\nvar BtnChangeTone =\n/*#__PURE__*/\nfunction (_Btns) {\n  _inherits(BtnChangeTone, _Btns);\n\n  function BtnChangeTone(options) {\n    var _this;\n\n    _classCallCheck(this, BtnChangeTone);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BtnChangeTone).call(this, options));\n    _this.elem.onclick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(BtnChangeTone, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      var _this2 = this;\n\n      var step = this.defineStep();\n      this.changeTone(step);\n      _transpose__WEBPACK_IMPORTED_MODULE_2__[\"toneValue\"].changeToneValue(step);\n\n      if (_transpose__WEBPACK_IMPORTED_MODULE_2__[\"toneValue\"].tone >= 12 || _transpose__WEBPACK_IMPORTED_MODULE_2__[\"toneValue\"].tone <= -12) {\n        this.disable($(this.elem));\n      } else {\n        _transpose__WEBPACK_IMPORTED_MODULE_2__[\"btnsChangeTone\"].forEach(function (btn) {\n          _this2.enable($(btn.elem));\n        });\n      }\n    }\n  }, {\n    key: \"enable\",\n    value: function enable(btn) {\n      btn.prop('disabled', false);\n    }\n  }, {\n    key: \"disable\",\n    value: function disable(btn) {\n      btn.prop('disabled', true);\n    }\n  }, {\n    key: \"defineStep\",\n    value: function defineStep() {\n      var step;\n      this.name == 'transpos__tone-up' ? step = 1 : this.name == 'transpos__tone-down' ? step = -1 : step = null;\n      return step;\n    }\n  }, {\n    key: \"changeTone\",\n    value: function changeTone(step) {\n      var _this3 = this;\n\n      var sign = this.defineSign();\n      $('.chord__tonic').each(function (i, elem) {\n        var currentTonePos = _this3.definePos(elem);\n\n        var newTonicPos = currentTonePos + step;\n        if (newTonicPos >= _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__[\"CHORD_TONICS\"].length) newTonicPos = 0;\n        if (newTonicPos < 0) newTonicPos = _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__[\"CHORD_TONICS\"].length - 1;\n        if (Array.isArray(_common_chords_chords__WEBPACK_IMPORTED_MODULE_1__[\"CHORD_TONICS\"][newTonicPos])) $(elem).html(_common_chords_chords__WEBPACK_IMPORTED_MODULE_1__[\"CHORD_TONICS\"][newTonicPos][sign]);else $(elem).html(_common_chords_chords__WEBPACK_IMPORTED_MODULE_1__[\"CHORD_TONICS\"][newTonicPos]);\n      });\n    }\n  }, {\n    key: \"definePos\",\n    value: function definePos(elem) {\n      for (var i = 0; i < _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__[\"CHORD_TONICS\"].length; i++) {\n        if (Array.isArray(_common_chords_chords__WEBPACK_IMPORTED_MODULE_1__[\"CHORD_TONICS\"][i])) {\n          for (var j = 0; j < _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__[\"CHORD_TONICS\"][i].length; j++) {\n            if ($(elem).html() == _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__[\"CHORD_TONICS\"][i][j]) return i;\n          }\n        }\n\n        if ($(elem).html() == _common_chords_chords__WEBPACK_IMPORTED_MODULE_1__[\"CHORD_TONICS\"][i]) return i;\n      }\n    }\n  }, {\n    key: \"defineSign\",\n    value: function defineSign() {\n      for (var i = 0; i < $('.chord__tonic').length; i++) {\n        if ($('.chord__tonic')[i].innerHTML.includes('#')) return 0;\n        if ($('.chord__tonic')[i].innerHTML.includes('b')) return 1;\n      }\n\n      return 0;\n    }\n  }]);\n\n  return BtnChangeTone;\n}(_common_Btns__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BtnChangeTone);\n\n//# sourceURL=webpack:///./transpose/BtnChangeTone.js?");

/***/ }),

/***/ "./transpose/BtnStartStop.js":
/*!***********************************!*\
  !*** ./transpose/BtnStartStop.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_Btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Btns */ \"./common/Btns.js\");\n/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transpose */ \"./transpose.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\nvar BtnStartStop =\n/*#__PURE__*/\nfunction (_Btns) {\n  _inherits(BtnStartStop, _Btns);\n\n  function BtnStartStop(options) {\n    var _this;\n\n    _classCallCheck(this, BtnStartStop);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BtnStartStop).call(this, options));\n    _this.elem.onclick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(BtnStartStop, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      if (this.name == 'transpos__start') {\n        $(this.elem).toggleClass('transpos__start_hidden');\n        $('.transpos__stop').toggleClass('transpos__stop_hidden');\n        $('.transpos__change-tone').each(function (i, btn) {\n          $(btn).prop('disabled', false);\n        });\n        _transpose__WEBPACK_IMPORTED_MODULE_1__[\"textarea\"].setText($(_transpose__WEBPACK_IMPORTED_MODULE_1__[\"textarea\"].elem).val());\n        _transpose__WEBPACK_IMPORTED_MODULE_1__[\"textarea\"].toggle();\n        _transpose__WEBPACK_IMPORTED_MODULE_1__[\"song\"].setText(_transpose__WEBPACK_IMPORTED_MODULE_1__[\"textarea\"].text);\n        _transpose__WEBPACK_IMPORTED_MODULE_1__[\"song\"].toggle();\n        _transpose__WEBPACK_IMPORTED_MODULE_1__[\"song\"].wrapChords();\n      } else if (this.name == 'transpos__stop') {\n        $(this.elem).toggleClass('transpos__stop_hidden');\n        $('.transpos__start').toggleClass('transpos__start_hidden');\n        $('.transpos__change-tone').each(function (i, btn) {\n          $(btn).prop('disabled', true);\n        });\n        _transpose__WEBPACK_IMPORTED_MODULE_1__[\"song\"].clearText();\n        _transpose__WEBPACK_IMPORTED_MODULE_1__[\"song\"].toggle();\n        _transpose__WEBPACK_IMPORTED_MODULE_1__[\"textarea\"].setText(_transpose__WEBPACK_IMPORTED_MODULE_1__[\"textarea\"].text);\n        _transpose__WEBPACK_IMPORTED_MODULE_1__[\"textarea\"].toggle();\n        _transpose__WEBPACK_IMPORTED_MODULE_1__[\"toneValue\"].reset();\n      } else {\n        console.log('warn: unknown button was pushed');\n      }\n    }\n  }]);\n\n  return BtnStartStop;\n}(_common_Btns__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BtnStartStop);\n\n//# sourceURL=webpack:///./transpose/BtnStartStop.js?");

/***/ }),

/***/ "./transpose/Song.js":
/*!***************************!*\
  !*** ./transpose/Song.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _transpose_getAllChords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transpose/getAllChords */ \"./transpose/getAllChords.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Song =\n/*#__PURE__*/\nfunction () {\n  function Song(options) {\n    _classCallCheck(this, Song);\n\n    this.elem = options.elem;\n    this.text = null;\n  }\n\n  _createClass(Song, [{\n    key: \"toggle\",\n    value: function toggle() {\n      $(this.elem).toggleClass('song_hidden');\n    }\n  }, {\n    key: \"setText\",\n    value: function setText(text) {\n      this.text = text;\n      $(this.elem).html(this.text);\n    }\n  }, {\n    key: \"clearText\",\n    value: function clearText() {\n      this.text = '';\n    }\n  }, {\n    key: \"wrapChords\",\n    value: function wrapChords() {\n      var text = this.text;\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = _transpose_getAllChords__WEBPACK_IMPORTED_MODULE_0__[\"ALL_CHORDS\"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var chord = _step.value;\n          var position = 0;\n\n          while (true) {\n            var startPos = text.indexOf(chord, position);\n            if (startPos == -1) break;\n            var endPos = startPos + chord.length;\n            var conditions = (text[startPos - 1] == ' ' || text[startPos - 1] == '\\n' || text[startPos - 1] == undefined) && (text[endPos] == ' ' || text[endPos] == '\\n' || text[endPos] == undefined);\n\n            if (conditions) {\n              var wrappedChord = '<span>' + text.slice(startPos, endPos) + '</span>';\n              var textBefore = text.slice(0, startPos);\n              var textAfter = text.slice(endPos);\n              text = textBefore + wrappedChord + textAfter;\n              position = endPos + 13 + 1; // 13 - длина блока <span></span> +1 - следующий элемент\n            } else {\n              position = endPos + 1;\n            }\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      this.text = text;\n      $(this.elem).html(this.text);\n      this.wrapChordsTonics(); // for (let tonic of CHORD_TONICS) {\n      //   let position = 0;\n      //   while(true) {\n      //     let startPos = this.text.indexOf(tonic, position);\n      //     if (startPos == -1) break;\n      //     let nextSym = this.text.slice(startPos + 1, startPos + 2)\n      //     nextSym == '\\n' || nextSym == ' ' || CHORD_TONICS.indexOf(nextSym) != -1\n      //     let midPos = this.text.indexOf('\\n', startPos);\n      //     let endPos = this.text.indexOf('\\n', startPos);\n      //     if (endPos == -1) endPos = this.text.indexOf(' ', startPos);\n      //     let wrappedChord = \"<span>\" + this.text.slice(startPos, endPos) + \"</span>\";\n      //     let textBefore = this.text.slice(0, startPos);\n      //     let textAfter = this.text.slice(endPos);\n      //     this.text = textBefore + wrappedChord + textAfter;\n      //     position = startPos + 14;\n      //   };\n      // };\n    }\n  }, {\n    key: \"wrapChordsTonics\",\n    value: function wrapChordsTonics() {\n      $('.song span').each(function () {\n        var tonic = $(this).html().slice(0, 1);\n        if ($(this).html().slice(1, 2) == '#') tonic += '#';\n        if ($(this).html().slice(1, 2) == 'b') tonic += 'b';\n        var tonicStart = $(this).html().indexOf(tonic);\n        var tonicEnd = tonicStart + tonic.length;\n        var newTonic = $('<span></span>').addClass('chord__tonic').html(tonic);\n        var chordType = $(this).html().slice(tonicEnd);\n        $(this).html(newTonic[0].outerHTML + chordType);\n      });\n    }\n  }]);\n\n  return Song;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Song);\n\n//# sourceURL=webpack:///./transpose/Song.js?");

/***/ }),

/***/ "./transpose/Textarea.js":
/*!*******************************!*\
  !*** ./transpose/Textarea.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Textarea =\n/*#__PURE__*/\nfunction () {\n  function Textarea(options) {\n    _classCallCheck(this, Textarea);\n\n    this.elem = options.elem;\n  }\n\n  _createClass(Textarea, [{\n    key: \"toggle\",\n    value: function toggle() {\n      $(this.elem).toggleClass('transpos__textarea_hidden');\n    }\n  }, {\n    key: \"setText\",\n    value: function setText(text) {\n      this.text = text;\n    }\n  }]);\n\n  return Textarea;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Textarea);\n\n//# sourceURL=webpack:///./transpose/Textarea.js?");

/***/ }),

/***/ "./transpose/ToneValue.js":
/*!********************************!*\
  !*** ./transpose/ToneValue.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_Btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Btns */ \"./common/Btns.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar ToneValue =\n/*#__PURE__*/\nfunction (_Btns) {\n  _inherits(ToneValue, _Btns);\n\n  function ToneValue(options) {\n    var _this;\n\n    _classCallCheck(this, ToneValue);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToneValue).call(this, options));\n    _this.tone = 0;\n    return _this;\n  }\n\n  _createClass(ToneValue, [{\n    key: \"reset\",\n    value: function reset() {\n      this.tone = 0;\n      $(this.elem).html(this.tone);\n    }\n  }, {\n    key: \"changeToneValue\",\n    value: function changeToneValue(step) {\n      this.tone += step;\n      $(this.elem).html(this.tone);\n    }\n  }]);\n\n  return ToneValue;\n}(_common_Btns__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToneValue);\n\n//# sourceURL=webpack:///./transpose/ToneValue.js?");

/***/ }),

/***/ "./transpose/getAllChords.js":
/*!***********************************!*\
  !*** ./transpose/getAllChords.js ***!
  \***********************************/
/*! exports provided: ALL_CHORDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_CHORDS\", function() { return ALL_CHORDS; });\n/* harmony import */ var _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/chords/chords */ \"./common/chords/chords.js\");\n\n\nfunction getAllChords() {\n  var allChords = [];\n  var simpleChords = [];\n\n  for (var i = 0; i < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"].length; i++) {\n    if (Array.isArray(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i])) {\n      for (var j = 0; j < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i].length; j++) {\n        simpleChords.push(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i][j]);\n      }\n    } else {\n      simpleChords.push(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i]);\n    }\n  }\n\n  allChords = allChords.concat(simpleChords);\n\n  for (var _i = 0; _i < simpleChords.length; _i++) {\n    for (var _j = 0; _j < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TYPES\"].length; _j++) {\n      allChords.push(simpleChords[_i] + _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TYPES\"][_j]);\n    }\n  }\n\n  return allChords;\n}\n\nvar ALL_CHORDS = getAllChords();\n\n//# sourceURL=webpack:///./transpose/getAllChords.js?");

/***/ })

/******/ });