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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tonalities.js");
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

/***/ "./tonalities.js":
/*!***********************!*\
  !*** ./tonalities.js ***!
  \***********************/
/*! exports provided: gamma, selectsTonality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gamma\", function() { return gamma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectsTonality\", function() { return selectsTonality; });\n/* harmony import */ var _common_menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/menu/Menu */ \"./common/menu/Menu.js\");\n/* harmony import */ var _tonalities_BtnTonality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tonalities/BtnTonality */ \"./tonalities/BtnTonality.js\");\n/* harmony import */ var _tonalities_Gammas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tonalities/Gammas */ \"./tonalities/Gammas.js\");\n\n\n\n\n\nconsole.log('Tonalities page');\nvar gamma;\nvar selectsTonality;\n$(document).ready(function () {\n  var menu = new _common_menu_Menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([['Главная', 'index'], ['Транспонирование аккордов', 'transpose'], ['Тональности', 'tonalities']]); // Tonalities\n\n  gamma = new _tonalities_Gammas__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    elem: $('#gammas')[0]\n  });\n  selectsTonality = [];\n  $('.tonality-selection select').each(function () {\n    selectsTonality.push(this);\n  });\n  var btnTonality = new _tonalities_BtnTonality__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    elem: $('.tonality-btn')[0]\n  });\n  gamma.drawStaff();\n});\n\n\n//# sourceURL=webpack:///./tonalities.js?");

/***/ }),

/***/ "./tonalities/BtnTonality.js":
/*!***********************************!*\
  !*** ./tonalities/BtnTonality.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_Btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Btns */ \"./common/Btns.js\");\n/* harmony import */ var _tonalities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tonalities */ \"./tonalities.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\nvar BtnTonality =\n/*#__PURE__*/\nfunction (_Btns) {\n  _inherits(BtnTonality, _Btns);\n\n  function BtnTonality(options) {\n    var _this;\n\n    _classCallCheck(this, BtnTonality);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BtnTonality).call(this, options));\n    _this.elem.onclick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(BtnTonality, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].selections.length = 0;\n      _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"selectsTonality\"].forEach(function (item) {\n        _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].selections.push(item.value);\n\n        if (_tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].selections[_tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].selections.length - 1] == '0') {\n          $('.tonality-selection').find('[data-name=' + item.name + ']').removeClass('tonality-selection__hint_hidden');\n        } else {\n          $('.tonality-selection').find('[data-name=' + item.name + ']').addClass('tonality-selection__hint_hidden');\n        }\n      });\n\n      if (_tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].selections.every(function (item) {\n        return item != '0';\n      })) {\n        if (!this.gammaDrawn) {\n          _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].clearStaff();\n          _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].drawStaff();\n        }\n\n        _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].drawNotes();\n      }\n    }\n  }]);\n\n  return BtnTonality;\n}(_common_Btns__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BtnTonality);\n\n//# sourceURL=webpack:///./tonalities/BtnTonality.js?");

/***/ }),

/***/ "./tonalities/Gammas.js":
/*!******************************!*\
  !*** ./tonalities/Gammas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/chords/chords */ \"./common/chords/chords.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Gammas =\n/*#__PURE__*/\nfunction () {\n  function Gammas(options) {\n    _classCallCheck(this, Gammas);\n\n    this.elem = options.elem;\n    this.ctx = this.elem.getContext('2d');\n    this.selections = [];\n    this.tonic = null;\n    this.gamma = null;\n    this.sign = null;\n    this.gammaDrawn = false;\n  }\n\n  _createClass(Gammas, [{\n    key: \"clearStaff\",\n    value: function clearStaff() {\n      this.ctx.clearRect(0, 0, 560, 160);\n    }\n  }, {\n    key: \"drawStaff\",\n    value: function drawStaff() {\n      var margin = 20;\n      var currentPos = margin * 2;\n      var step = 20;\n\n      for (var i = 1; i <= 5; i++) {\n        this.ctx.beginPath();\n        this.ctx.moveTo(margin, currentPos);\n        this.ctx.lineTo(500 - margin, currentPos);\n        this.ctx.stroke();\n        currentPos += step;\n      }\n\n      this.gammaDrawn = true;\n    }\n  }, {\n    key: \"drawNotes\",\n    value: function drawNotes() {\n      this.defineTonic();\n      this.defineGamma();\n      this.defineSign();\n      var marginL = 40;\n      var stepL = 40;\n      var currentNote = this.tonic;\n      var posMargins = this.definePos(currentNote);\n      var posNotes = posMargins;\n\n      for (var i = 0; i < this.gamma.length; i++) {\n        var marginT = _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"TONALITY_MARGIN\"][posMargins];\n        this.drawNote(marginL, marginT);\n\n        if (currentNote[1] == '#') {\n          marginL += 10;\n          this.drawSharp(marginL, marginT + 10);\n        }\n\n        if (currentNote[1] == 'b') {\n          marginL += 10;\n          this.drawBemol(marginL, marginT + 10);\n        }\n\n        marginL += stepL;\n        posMargins += this.gamma[i];\n        if (posMargins >= _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"].length) posNotes = posMargins - _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"].length;else posNotes = posMargins;\n        var idx = void 0;\n        this.sign == '#' ? idx = 0 : idx = 1;\n        if (Array.isArray(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][posNotes])) currentNote = _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][posNotes][idx];else currentNote = _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][posNotes];\n      }\n    }\n  }, {\n    key: \"definePos\",\n    value: function definePos(elem) {\n      for (var i = 0; i < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"].length; i++) {\n        if (Array.isArray(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i])) {\n          for (var j = 0; j < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i].length; j++) {\n            if (elem == _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i][j]) return i;\n          }\n        }\n\n        if (elem == _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i]) return i;\n      }\n    }\n  }, {\n    key: \"defineTonic\",\n    value: function defineTonic() {\n      this.tonic = '' + this.selections[0];\n      if (this.selections[1] == 'no') return;\n      this.tonic += this.selections[1];\n    }\n  }, {\n    key: \"defineGamma\",\n    value: function defineGamma() {\n      if (this.selections[2] == 'major') this.gamma = _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"MAJOR\"];else this.gamma = _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"MINOR\"];\n    }\n  }, {\n    key: \"defineSign\",\n    value: function defineSign() {\n      if (this.selections[1] == 'b') {\n        this.sign = 'b';\n        return;\n      }\n\n      this.sign = '#';\n    }\n  }, {\n    key: \"drawNote\",\n    value: function drawNote(marginL, marginT) {\n      this.drawEllipse(this.ctx, marginL, marginT, 10, 6);\n    }\n  }, {\n    key: \"drawEllipse\",\n    value: function drawEllipse(ctx, x, y, a, b) {\n      this.ctx.save();\n      this.ctx.beginPath();\n      this.ctx.translate(x, y);\n      this.ctx.rotate(-30 * Math.PI / 180);\n      this.ctx.scale(a / b, 1);\n      this.ctx.arc(0, 0, b, 0, Math.PI * 2, true);\n      this.ctx.restore();\n      this.ctx.closePath();\n      this.ctx.fillStyle = 'balck';\n      this.ctx.fill(); // this.ctx.lineWidth = 3  ;\n      // this.ctx.strokeStyle = 'black';\n\n      this.ctx.stroke();\n    }\n  }, {\n    key: \"drawSharp\",\n    value: function drawSharp(marginL, marginT) {\n      this.ctx.font = '30px Arial';\n      this.ctx.fillText('#', marginL, marginT);\n    }\n  }, {\n    key: \"drawBemol\",\n    value: function drawBemol(marginL, marginT) {\n      this.ctx.font = '30px Arial';\n      this.ctx.fillText('b', marginL, marginT);\n    }\n  }]);\n\n  return Gammas;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gammas);\n\n//# sourceURL=webpack:///./tonalities/Gammas.js?");

/***/ })

/******/ });