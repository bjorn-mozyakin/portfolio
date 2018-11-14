'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(document).ready(function () {
  /* BEGIN CONSTRUCTORS */
  var Btns = function Btns(options) {
    _classCallCheck(this, Btns);

    this.elem = options.elem;
    console.log(this.elem);
  };

  var BtnTranspos =
  /*#__PURE__*/
  function (_Btns) {
    _inherits(BtnTranspos, _Btns);

    function BtnTranspos(options) {
      var _this;

      _classCallCheck(this, BtnTranspos);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(BtnTranspos).call(this, options));
      console.log(_this.elem);
      _this.elem.onclick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(BtnTranspos, [{
      key: "handleClick",
      value: function handleClick(e) {
        $('.transpos__textarea').prop('disabled', true);
        console.log('Transpose clicked');
      }
    }]);

    return BtnTranspos;
  }(Btns);
  /* END CONSTRUCTORS */

  /* BEGIN MAIN CODE */


  var chordTonic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H'];
  var chordType = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11'];
  var btnTranspos = new BtnTranspos({
    elem: $('.transpos__start')[0]
  });
  console.log('ES6 alive');
  /* END MAIN CODE */
});