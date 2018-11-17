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
    this.name = $(this.elem).attr('name');
  };

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
      value: function handleClick(e) {
        if (this.name == 'transpos__start') {
          $(this.elem).toggleClass('transpos__start_hidden');
          $('.transpos__stop').toggleClass('transpos__stop_hidden');
          $('.transpos__change-tone').each(function (i, btn) {
            $(btn).prop('disabled', false);
          });
          textarea.setText($(textarea.elem).val());
          textarea.toggle();
          song.setText(textarea.text);
          song.toggle();
          song.wrapChords();
        } else if (this.name == 'transpos__stop') {
          $(this.elem).toggleClass('transpos__stop_hidden');
          $('.transpos__start').toggleClass('transpos__start_hidden');
          $('.transpos__change-tone').each(function (i, btn) {
            $(btn).prop('disabled', true);
          });
          song.clearText();
          song.toggle();
          textarea.setText(textarea.text);
          textarea.toggle();
        } else {
          console.log('Нажата неизвестная кнопка');
        }
      }
    }]);

    return BtnStartStop;
  }(Btns);

  var BtnChangeTone =
  /*#__PURE__*/
  function (_Btns2) {
    _inherits(BtnChangeTone, _Btns2);

    function BtnChangeTone(options) {
      var _this2;

      _classCallCheck(this, BtnChangeTone);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BtnChangeTone).call(this, options));
      _this2.elem.onclick = _this2.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
      return _this2;
    }

    _createClass(BtnChangeTone, [{
      key: "handleClick",
      value: function handleClick(e) {
        console.log('CLICKED');
        var step = this.defineStep();
        this.changeTone(step);
      } // disableBtnsChangeTone() {
      //   btnsStartStop.each(function(btn) {
      //     btn.prop('disabled': true);
      //   });
      // }
      // enableBtnsChangeTone() {
      //   btnsStartStop.each(function(btn) {
      //     btn.prop('disabled': false);
      //   });
      // }

    }, {
      key: "defineStep",
      value: function defineStep() {
        var step;
        this.name == 'transpos__tone-up' ? step = 1 : this.name == 'transpos__tone-down' ? step = -1 : step = null;
        return step;
      }
    }, {
      key: "changeTone",
      value: function changeTone(step) {
        $('.chord__tonic').each(function () {
          var newTonicPos = chordTonics.indexOf($(this).html()) + step;
          if (newTonicPos >= chordTonics.length) newTonicPos = 0;
          if (newTonicPos < 0) newTonicPos = chordTonics.length - 1;
          $(this).html(chordTonics[newTonicPos]);
        });
      }
    }]);

    return BtnChangeTone;
  }(Btns);

  var Textarea =
  /*#__PURE__*/
  function () {
    function Textarea(options) {
      _classCallCheck(this, Textarea);

      this.elem = options.elem;
    }

    _createClass(Textarea, [{
      key: "toggle",
      value: function toggle() {
        $(this.elem).toggleClass('transpos__textarea_hidden');
      }
    }, {
      key: "setText",
      value: function setText(text) {
        this.text = text;
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
      key: "toggle",
      value: function toggle() {
        $(this.elem).toggleClass('song_hidden');
      }
    }, {
      key: "setText",
      value: function setText(text) {
        this.text = text;
        $(this.elem).html(this.text);
      }
    }, {
      key: "clearText",
      value: function clearText() {
        this.text = '';
      }
    }, {
      key: "wrapChords",
      value: function wrapChords() {
        var text = this.text;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = allChords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var chord = _step.value;
            var position = 0;

            while (true) {
              var startPos = text.indexOf(chord, position);
              if (startPos == -1) break;
              var endPos = startPos + chord.length;
              var conditions = (text[startPos - 1] == ' ' || text[startPos - 1] == '\n' || text[startPos - 1] == undefined) && (text[endPos] == ' ' || text[endPos] == '\n' || text[endPos] == undefined);

              if (conditions) {
                var wrappedChord = "<span>" + text.slice(startPos, endPos) + "</span>";
                var textBefore = text.slice(0, startPos);
                var textAfter = text.slice(endPos);
                text = textBefore + wrappedChord + textAfter;
                position = endPos + 13 + 1; // 13 - длина блока <span></span> +1 - следующий элемент
              } else {
                position = endPos + 1;
              }
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

        this.text = text;
        $(this.elem).html(this.text);
        this.wrapChordsTonics(); // for (let tonic of chordTonics) {
        //   let position = 0;
        //   while(true) {
        //     let startPos = this.text.indexOf(tonic, position);
        //     if (startPos == -1) break;
        //     let nextSym = this.text.slice(startPos + 1, startPos + 2)
        //     nextSym == '\n' || nextSym == ' ' || chordTonics.indexOf(nextSym) != -1
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
        $('.song span').each(function () {
          var tonic = $(this).html().slice(0, 1);
          if ($(this).html().slice(1, 2) == '#') tonic += '#';
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
  /* END CONSTRUCTORS */

  /* BEGIN MAIN CODE */


  var chordTonics = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H'];
  var chordTypes = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11'];

  var allChords = function () {
    var allChords = [];

    for (var i = 0; i < chordTonics.length; i++) {
      for (var j = 0; j < chordTypes.length; j++) {
        allChords.push(chordTonics[i] + chordTypes[j]);
      }
    }

    return chordTonics.concat(allChords);
  }(); // let BtnStartStop = new BtnStartStop({
  //   elem: $('.transpos__start')[0]
  // });


  var btnsStartStop = [];
  $('.transpos__startstop').each(function () {
    btnsStartStop.push(new BtnStartStop({
      elem: this
    }));
  });
  var btnsChangeTone = [];
  $('.transpos__change-tone').each(function () {
    btnsChangeTone.push(new BtnChangeTone({
      elem: this
    }));
  });
  var a = btnsChangeTone[0],
      b = btnsChangeTone[1];
  var textarea = new Textarea({
    elem: $('.transpos__textarea')[0]
  });
  var song = new Song({
    elem: $('.song')[0]
  });
  /* END MAIN CODE */
});