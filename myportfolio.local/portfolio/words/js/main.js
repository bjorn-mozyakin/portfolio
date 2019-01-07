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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./BtnAdd.js":
/*!*******************!*\
  !*** ./BtnAdd.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar BtnAdd =\n/*#__PURE__*/\nfunction () {\n  function BtnAdd(options) {\n    _classCallCheck(this, BtnAdd);\n\n    this.elem = options.elem;\n    this.elem.onclick = this.onclick.bind(this);\n  }\n\n  _createClass(BtnAdd, [{\n    key: \"onclick\",\n    value: function onclick(e) {\n      _main__WEBPACK_IMPORTED_MODULE_0__[\"words\"].addWord(e);\n    }\n  }]);\n\n  return BtnAdd;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BtnAdd);\n\n//# sourceURL=webpack:///./BtnAdd.js?");

/***/ }),

/***/ "./Table.js":
/*!******************!*\
  !*** ./Table.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Table =\n/*#__PURE__*/\nfunction () {\n  function Table() {\n    _classCallCheck(this, Table);\n  }\n\n  _createClass(Table, [{\n    key: \"addTable\",\n    value: function addTable(parent, data) {\n      var _this = this;\n\n      var table = document.createElement('table');\n      table.className = 'words';\n      data.forEach(function (row) {\n        _this.addToPage(table, row);\n      });\n      parent.appendChild(table);\n    }\n  }, {\n    key: \"addWord\",\n    value: function addWord(e) {\n      this.addToBD(e);\n    }\n  }, {\n    key: \"addToBD\",\n    value: function addToBD(e) {\n      var _this2 = this;\n\n      var form = e.target.closest('.word-adding');\n      var data = {\n        'word-english': $('.word-adding__english').val(),\n        'word-russian': $('.word-adding__russian').val(),\n        'word-list': $('.word-adding__list').val()\n      };\n      $.ajax({\n        url: \"api/data.php\",\n        type: \"POST\",\n        data: {\n          'action': 'add',\n          'data': data\n        },\n        success: function success(data) {\n          debugger;\n          JSON.parse(data).forEach(function (row) {\n            _this2.addToPage($(_main__WEBPACK_IMPORTED_MODULE_0__[\"content\"]).find('.words')[0], row);\n          });\n        },\n        error: function error() {\n          console.log('error!');\n        }\n      }).done(function (result) {\n        console.log('Request sent');\n      });\n    }\n  }, {\n    key: \"addToPage\",\n    value: function addToPage(parent, data) {\n      debugger;\n      var tr = document.createElement('tr');\n      tr.className = 'word';\n      tr.dataset.id = data['id'];\n\n      for (var key in data) {\n        var td = document.createElement('td');\n        if (key == 'word_english') td.className = 'word-english';\n        if (key == 'word_russian') td.className = 'word-russian';\n        td.innerHTML = data[key];\n        tr.appendChild(td);\n      }\n\n      var closeBtn = document.createElement('td');\n      closeBtn.className = \"word-close\";\n      closeBtn.innerHTML = 'x';\n      closeBtn.addEventListener('click', this.removeWord.bind(this));\n      tr.appendChild(closeBtn);\n      parent.appendChild(tr);\n    }\n  }, {\n    key: \"removeWord\",\n    value: function removeWord(e) {\n      // Сделать полифил для remove() в IE11-\n      this.removeFromBD(e);\n      this.removeFromPage(e);\n    }\n  }, {\n    key: \"removeFromBD\",\n    value: function removeFromBD(e) {\n      $.ajax({\n        url: \"api/data.php\",\n        type: \"POST\",\n        data: {\n          'action': 'remove',\n          'id': e.target.closest('.word').dataset.id\n        },\n        success: function success(data) {// drawTable(JSON.parse(data));\n        }\n      }).done(function (result) {\n        console.log('Request sent');\n      });\n    }\n  }, {\n    key: \"removeFromPage\",\n    value: function removeFromPage(e) {\n      e.target.closest('.word').remove();\n    }\n  }]);\n\n  return Table;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\n//# sourceURL=webpack:///./Table.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: words, content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"words\", function() { return words; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"content\", function() { return content; });\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ \"./Table.js\");\n/* harmony import */ var _BtnAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BtnAdd */ \"./BtnAdd.js\");\n\n\n\n\nvar words;\n$(document).ready(function () {\n  words = 1;\n  var content = document.querySelector('#content');\n  var btnAdd = new _BtnAdd__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    elem: $('.word-add')[0]\n  });\n  $.ajax({\n    url: \"api/data.php\",\n    type: \"POST\",\n    data: {\n      'action': 'show'\n    },\n    success: function success(data) {\n      words = new _Table__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      words.addTable(content, JSON.parse(data));\n      console.log('Спасибо, ваше письмо отправлено');\n    },\n    error: function error() {\n      console.log('К сожалению ваше письмо не удалось отправить. Попробуйте еще раз');\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });