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
        console.log('Transpose clicked');
        textarea.hide();
        song.setText($(textarea.elem).val());
        song.show();
        song.wrapChords();
      }
    }]);

    return BtnTranspos;
  }(Btns);

  var Textarea =
  /*#__PURE__*/
  function () {
    function Textarea(options) {
      _classCallCheck(this, Textarea);

      this.elem = options.elem;
      this.text = null;
    }

    _createClass(Textarea, [{
      key: "hide",
      value: function hide() {
        $(this.elem).prop('disabled', true).addClass('transpos__textarea_hidden');
      }
    }]);

    return Textarea;
  }();

  var Song =
  /*#__PURE__*/
  function () {
    function Song(options) {
      _classCallCheck(this, Song);

      this.elem = options.elem;
      this.text = null;
    }

    _createClass(Song, [{
      key: "show",
      value: function show() {
        $(this.elem).removeClass('song_hidden').html();
      }
    }, {
      key: "setText",
      value: function setText(text) {
        this.text = text;
        $(this.elem).html(this.text);
      }
    }, {
      key: "wrapChords",
      value: function wrapChords() {
        console.log('Start wrap');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = chordTonic[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var tonic = _step.value;
            var position = 0;

            while (true) {
              var startPos = this.text.indexOf(tonic, position);
              if (startPos == -1) break;
              var endPos = this.text.indexOf('\n', startPos);
              if (endPos == -1) endPos = this.text.indexOf(' ', startPos);
              var wrappedChord = "<span>" + this.text.slice(startPos, endPos) + "</span>";
              var textBefore = this.text.slice(0, startPos);
              var textAfter = this.text.slice(endPos);
              this.text = textBefore + wrappedChord + textAfter;
              position = startPos + 14;
            }

            ;
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

        ;
        $(this.elem).html(this.text);
        console.log('Finished');
      }
    }]);

    return Song;
  }();
  /* END CONSTRUCTORS */

  /* BEGIN MAIN CODE */


  var chordTonic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H'];
  var chordType = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11'];
  var btnTranspos = new BtnTranspos({
    elem: $('.transpos__start')[0]
  });
  var textarea = new Textarea({
    elem: $('.transpos__textarea')[0]
  });
  var song = new Song({
    elem: $('.song')[0]
  });
  console.log('ES6 alive');
  /* END MAIN CODE */
});