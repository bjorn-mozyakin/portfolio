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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Btns =\n/*#__PURE__*/\nfunction () {\n  function Btns(options) {\n    _classCallCheck(this, Btns);\n\n    this.elem = options.elem;\n    this.name = $(this.elem).attr('name');\n  }\n\n  _createClass(Btns, [{\n    key: \"enable\",\n    value: function enable() {\n      $(this.elem).prop('disabled', false);\n    }\n  }, {\n    key: \"disable\",\n    value: function disable() {\n      $(this.elem).prop('disabled', true);\n    }\n  }]);\n\n  return Btns;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Btns);\n\n//# sourceURL=webpack:///./common/Btns.js?");

/***/ }),

/***/ "./common/chords/chords.js":
/*!*********************************!*\
  !*** ./common/chords/chords.js ***!
  \*********************************/
/*! exports provided: GAMMA_NOTES, CHORD_TONICS, CHORD_TYPES, MAJOR, MINOR, TONALITY_MARGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAMMA_NOTES\", function() { return GAMMA_NOTES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD_TONICS\", function() { return CHORD_TONICS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHORD_TYPES\", function() { return CHORD_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAJOR\", function() { return MAJOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MINOR\", function() { return MINOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TONALITY_MARGIN\", function() { return TONALITY_MARGIN; });\nvar GAMMA_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'H']; // const CHORD_TONICS = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#','Gb'], 'G', ['G#','Ab'], 'A', ['A#','Hb'], 'H'];\n\nvar CHORD_TONICS = [['H#', 'C'], ['C#', 'Db'], 'D', ['D#', 'Eb'], ['E', 'Fb'], ['E#', 'F'], ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Hb'], ['H', 'Cb']];\nvar CHORD_TYPES = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11'];\nvar P = 1; // Полутон\n\nvar T = 2 * P; // Тон\n\nvar MAJOR = [T, T, P, T, T, T, P]; // Мажорный звукоряд\n\nvar MINOR = [T, P, T, T, P, T, T]; // Минорный звукоряд\n// const TONALITY_MARGIN = [140, 140, 130, 130, 120, 110, 110, 100, 100, 90, 90, 80, 70, 70, 60, 60, 50, 40, 40, 30, 30, 20, 20, 10, 0];\n\nvar TONALITY_MARGIN = [140, 130, 120, 110, 100, 90, 80];\n\n\n//# sourceURL=webpack:///./common/chords/chords.js?");

/***/ }),

/***/ "./common/menu/Menu.js":
/*!*****************************!*\
  !*** ./common/menu/Menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Menu =\n/*#__PURE__*/\nfunction () {\n  function Menu(options) {\n    _classCallCheck(this, Menu);\n\n    this.items = [];\n\n    this._createMenu(options);\n  }\n\n  _createClass(Menu, [{\n    key: \"_createMenu\",\n    value: function _createMenu(options) {\n      var nav = $('<nav></nav>');\n      var menu = $('<ul></ul>').addClass('nav__menu').prependTo(nav);\n\n      for (var i = 0; i < options.length; i++) {\n        var str = \"<li class=\\\"nav__menu-item\\\">\\n               <a href=\\\"/portfolio/chords/\".concat(options[i][1], \".html\\\">\").concat(options[i][0], \"</a>\\n             </li>\");\n        $(menu).append(str);\n        this.items.push(options[i][0]);\n      }\n\n      $('body').prepend(nav);\n    }\n  }]);\n\n  return Menu;\n}();\n\nmodule.exports = Menu;\n\n//# sourceURL=webpack:///./common/menu/Menu.js?");

/***/ }),

/***/ "./common/menu/createMenu.js":
/*!***********************************!*\
  !*** ./common/menu/createMenu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Menu = __webpack_require__(/*! ../menu/Menu */ \"./common/menu/Menu.js\");\n\nvar menu = new Menu([['Главная', 'index'], ['Транспонирование аккордов', 'transpose'], ['Тональности', 'tonalities']]);\nmodule.exports.menu = menu;\n\n//# sourceURL=webpack:///./common/menu/createMenu.js?");

/***/ }),

/***/ "./tonalities.js":
/*!***********************!*\
  !*** ./tonalities.js ***!
  \***********************/
/*! exports provided: gamma, selectsTonality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gamma\", function() { return gamma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectsTonality\", function() { return selectsTonality; });\n/* harmony import */ var _common_menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/menu/Menu */ \"./common/menu/Menu.js\");\n/* harmony import */ var _common_menu_Menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_menu_Menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tonalities_BtnTonality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tonalities/BtnTonality */ \"./tonalities/BtnTonality.js\");\n/* harmony import */ var _tonalities_Gammas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tonalities/Gammas */ \"./tonalities/Gammas.js\");\n\n\n\n\n\nvar gamma;\nvar selectsTonality;\n$(document).ready(function () {\n  __webpack_require__(/*! ./common/menu/createMenu */ \"./common/menu/createMenu.js\"); // Tonalities\n\n\n  gamma = new _tonalities_Gammas__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    elem: $('.stave__notes')[0]\n  });\n  selectsTonality = [];\n  $('.tonality-selection select').each(function () {\n    selectsTonality.push(this);\n  });\n  var btnTonality = new _tonalities_BtnTonality__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    elem: $('.tonality-btn')[0]\n  });\n  gamma.drawStaff();\n});\n\n\n//# sourceURL=webpack:///./tonalities.js?");

/***/ }),

/***/ "./tonalities/BtnTonality.js":
/*!***********************************!*\
  !*** ./tonalities/BtnTonality.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_Btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Btns */ \"./common/Btns.js\");\n/* harmony import */ var _tonalities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tonalities */ \"./tonalities.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\nvar BtnTonality =\n/*#__PURE__*/\nfunction (_Btns) {\n  _inherits(BtnTonality, _Btns);\n\n  function BtnTonality(options) {\n    var _this;\n\n    _classCallCheck(this, BtnTonality);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BtnTonality).call(this, options));\n    _this.elem.onclick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(BtnTonality, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].selections.length = 0;\n      _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"selectsTonality\"].forEach(function (item) {\n        _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].selections.push(item.value);\n\n        if (_tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].selections[_tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].selections.length - 1] == '0') {\n          $('.tonality-selection').find('[data-name=' + item.name + ']').removeClass('tonality-selection__hint_hidden');\n        } else {\n          $('.tonality-selection').find('[data-name=' + item.name + ']').addClass('tonality-selection__hint_hidden');\n        }\n      });\n\n      if (_tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].selections.every(function (item) {\n        return item != '0';\n      })) {\n        if (!this.gammaDrawn) {\n          _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].clearStaff();\n          _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].drawStaff();\n        }\n\n        _tonalities__WEBPACK_IMPORTED_MODULE_1__[\"gamma\"].drawTonality();\n      }\n    }\n  }]);\n\n  return BtnTonality;\n}(_common_Btns__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BtnTonality);\n\n//# sourceURL=webpack:///./tonalities/BtnTonality.js?");

/***/ }),

/***/ "./tonalities/Gammas.js":
/*!******************************!*\
  !*** ./tonalities/Gammas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/chords/chords */ \"./common/chords/chords.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Gammas =\n/*#__PURE__*/\nfunction () {\n  function Gammas(options) {\n    _classCallCheck(this, Gammas);\n\n    this.elem = options.elem;\n\n    if (this.elem) {\n      this.ctx = this.elem.getContext('2d');\n      this.ctx.font = '20px Arial';\n      this.ctx.fillStyle = 'black'; // this.ctx.lineWidth = 3  ;\n      // this.ctx.strokeStyle = 'black';\n    }\n\n    this.selections = [];\n    this.mode = null;\n    this.notes = [];\n    this.gammaDrawn = false;\n  }\n\n  _createClass(Gammas, [{\n    key: \"clearStaff\",\n    value: function clearStaff() {\n      this.ctx.clearRect(0, 0, 560, 200);\n      this.notes.length = 0;\n    }\n  }, {\n    key: \"drawStaff\",\n    value: function drawStaff() {\n      var margin = 20;\n      var currentPos = margin * 2;\n      var step = 20;\n\n      for (var i = 1; i <= 5; i++) {\n        this.ctx.beginPath();\n        this.ctx.moveTo(margin, currentPos);\n        this.ctx.lineTo(500 - margin, currentPos);\n        this.ctx.stroke();\n        this.ctx.closePath();\n        currentPos += step;\n      }\n\n      this.gammaDrawn = true;\n      this.drawClef(this.ctx);\n    }\n  }, {\n    key: \"drawClef\",\n    value: function drawClef(ctx) {}\n  }, {\n    key: \"drawTonality\",\n    value: function drawTonality() {\n      var notes = this.defineNotes(this.selections[0], this.selections[1], this.selections[2]);\n      if (notes.length == 0) this.drawError();else this.drawNotes(notes);\n    }\n  }, {\n    key: \"drawNotes\",\n    value: function drawNotes(notes) {\n      var marginL = 140;\n      var stepL = 50;\n      var curPos = _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"GAMMA_NOTES\"].indexOf(notes[0][0]);\n      var marginT = _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"TONALITY_MARGIN\"][curPos];\n\n      for (var i = 0; i < notes.length; i++) {\n        if (notes[i][1]) this.drawSign(marginL - 30, marginT + 10, notes[i][1]);\n        this.drawNote(marginL, marginT);\n        this.drawLetter(marginL - 10, 180, notes[i]);\n        marginL += stepL;\n        marginT -= 10;\n      }\n    }\n  }, {\n    key: \"defineNotes\",\n    value: function defineNotes(tonic, sign, mode) {\n      var notes = [];\n      this.mode = this.defineMode(mode);\n      var currentLetter = tonic;\n      var nextLetter = this.defineNextLetter(currentLetter);\n      var currentNote = tonic;\n      if (sign != 'no') currentNote += sign;\n      var currentNotePos = this.definePos(currentNote);\n\n      for (var i = 0; i < this.mode.length; i++) {\n        notes.push(currentNote);\n        currentNotePos += this.mode[i];\n        if (currentNotePos >= _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"].length) currentNotePos = currentNotePos - _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"].length;\n        currentNote = this.defineNote(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][currentNotePos], nextLetter);\n        if (!currentNote) return [];\n        nextLetter = this.defineNextLetter(nextLetter);\n      }\n\n      return notes;\n    }\n  }, {\n    key: \"defineNextLetter\",\n    value: function defineNextLetter(currentTonic) {\n      var currentTonicPos = _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"GAMMA_NOTES\"].indexOf(currentTonic);\n      var nextTonicPos = currentTonicPos + 1;\n      if (nextTonicPos >= _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"GAMMA_NOTES\"].length) nextTonicPos = 0;\n      return _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"GAMMA_NOTES\"][nextTonicPos];\n    }\n  }, {\n    key: \"defineNote\",\n    value: function defineNote(note, letter) {\n      if (Array.isArray(note)) {\n        for (var i = 0; i < note.length; i++) {\n          if (note[i].includes(letter)) return note[i];\n        }\n      } else if (note.includes(letter)) {\n        return note;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"definePos\",\n    value: function definePos(elem) {\n      for (var i = 0; i < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"].length; i++) {\n        if (Array.isArray(_common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i])) {\n          for (var j = 0; j < _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i].length; j++) {\n            if (elem == _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i][j]) return i;\n          }\n        }\n\n        if (elem == _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"CHORD_TONICS\"][i]) return i;\n      }\n    }\n  }, {\n    key: \"defineMode\",\n    value: function defineMode(mode) {\n      if (mode == 'major') return _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"MAJOR\"];else return _common_chords_chords__WEBPACK_IMPORTED_MODULE_0__[\"MINOR\"];\n    }\n  }, {\n    key: \"drawNote\",\n    value: function drawNote(marginL, marginT) {\n      this.drawEllipse(this.ctx, marginL, marginT, 10, 6);\n      if (marginT <= 20 || marginT >= 140) this._drawAdditionalLine(this.ctx, marginL, marginT);\n    }\n  }, {\n    key: \"drawEllipse\",\n    value: function drawEllipse(ctx, x, y, a, b) {\n      this.ctx.save();\n      this.ctx.beginPath();\n      this.ctx.translate(x, y);\n      this.ctx.rotate(-30 * Math.PI / 180);\n      this.ctx.scale(a / b, 1);\n      this.ctx.arc(0, 0, b, 0, Math.PI * 2, true);\n      this.ctx.restore();\n      this.ctx.closePath();\n      this.ctx.fill();\n      this.ctx.stroke();\n    }\n  }, {\n    key: \"_drawAdditionalLine\",\n    value: function _drawAdditionalLine(ctx, marginL, marginT) {\n      this.ctx.beginPath();\n      this.ctx.moveTo(marginL - 15, marginT);\n      this.ctx.lineTo(marginL + 15, marginT);\n      this.ctx.stroke();\n      this.ctx.closePath();\n    }\n  }, {\n    key: \"drawSign\",\n    value: function drawSign(marginL, marginT, sign) {\n      this.ctx.font = '30px Arial';\n      this.ctx.fillText(sign, marginL, marginT);\n    }\n  }, {\n    key: \"drawLetter\",\n    value: function drawLetter(marginL, marginT, letter) {\n      this.ctx.font = '20px Arial';\n      this.ctx.fillText(letter, marginL, marginT);\n    }\n  }, {\n    key: \"drawError\",\n    value: function drawError() {\n      this.ctx.fillText('Тональности с таким названием не существует.', 20, 150);\n      this.ctx.fillText('Пожалуйста, выберите другую тональность', 40, 180);\n    }\n  }]);\n\n  return Gammas;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gammas);\n\n//# sourceURL=webpack:///./tonalities/Gammas.js?");

/***/ })

/******/ });