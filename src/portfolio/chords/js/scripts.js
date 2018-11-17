'use strict';
$(document).ready(function() {

/* BEGIN CONSTRUCTORS */
  class Btns {
    constructor(options) {
      this.elem = options.elem;
      this.name = $(this.elem).attr('name');
    }
  }

  class BtnStartStop extends Btns {
    constructor(options) {
      super(options);
      this.elem.onclick = this.handleClick.bind(this);
    }

    handleClick(e) {
      if (this.name == 'transpos__start') {
        $(this.elem).toggleClass('transpos__start_hidden');
        $('.transpos__stop').toggleClass('transpos__stop_hidden');
        $('.transpos__change-tone').each(function(i, btn) {
          $(btn).prop('disabled', false);
        });
        textarea.setText($(textarea.elem).val());
        textarea.toggle();
        song.setText(textarea.text);
        song.toggle();
        song.wrapChords();
      } else if (this.name == 'transpos__stop') {
        $(this.elem).toggleClass('transpos__stop_hidden');
        $('.transpos__start').toggleClass('transpos__start_hidden')
        $('.transpos__change-tone').each(function(i, btn) {
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

  }

  class BtnChangeTone extends Btns {
    constructor(options) {
      super(options);
      this.elem.onclick = this.handleClick.bind(this);
    }

    handleClick(e) {
      console.log('CLICKED')
      let step = this.defineStep();
      this.changeTone(step);
    }

    // disableBtnsChangeTone() {
    //   btnsStartStop.each(function(btn) {
    //     btn.prop('disabled': true);
    //   });
    // }

    // enableBtnsChangeTone() {
    //   btnsStartStop.each(function(btn) {
    //     btn.prop('disabled': false);
    //   });
    // }

    defineStep() {
      let step;
       (this.name == 'transpos__tone-up') ? step = 1 :
       (this.name == 'transpos__tone-down') ? step = -1 :
       step = null;
      return step
    }

    changeTone(step) {
      $('.chord__tonic').each(function() {
        let newTonicPos = chordTonics.indexOf($(this).html()) + step;
        if (newTonicPos >= chordTonics.length) newTonicPos = 0;
        if (newTonicPos < 0) newTonicPos =  chordTonics.length - 1;
        $(this).html(chordTonics[newTonicPos]);
      });
    }
  }

  class Textarea {
    constructor(options) {
      this.elem = options.elem;
    }

    toggle() {
      $(this.elem).toggleClass('transpos__textarea_hidden');
    }

    setText(text) {
      this.text = text;
    }
  }

  class Song {
    constructor(options) {
      this.elem = options.elem;
      this.text = null;
    }

    toggle() {
      $(this.elem).toggleClass('song_hidden');
    }

    setText(text) {
      this.text = text;
      $(this.elem).html(this.text);
    }

    clearText() {
      this.text = '';
    }

    wrapChords() {
      let text = this.text;
      for (let chord of allChords) {
        let position = 0;
        while(true) {
          let startPos = text.indexOf(chord, position);
          if (startPos == -1) break;
          let endPos = startPos + chord.length;

          let conditions = (
            text[startPos - 1] == ' ' ||
            text[startPos - 1] == '\n' ||
            text[startPos - 1] == undefined
          ) && (
            text[endPos] == ' ' ||
            text[endPos] == '\n' ||
            text[endPos] == undefined
          );
          if (conditions) {
            let wrappedChord = "<span>" + text.slice(startPos, endPos) + "</span>";
            let textBefore = text.slice(0, startPos);
            let textAfter = text.slice(endPos);

            text = textBefore + wrappedChord + textAfter;
            position = endPos + 13 + 1;  // 13 - длина блока <span></span> +1 - следующий элемент
          } else {
            position = endPos + 1;
          }
        };
      }
      this.text = text;
      $(this.elem).html(this.text);
      this.wrapChordsTonics();
      // for (let tonic of chordTonics) {
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

    wrapChordsTonics() {
      $('.song span').each(function() {
        let tonic = $(this).html().slice(0, 1);
        if ($(this).html().slice(1, 2) == '#') tonic += '#';
        let tonicStart = $(this).html().indexOf(tonic);
        let tonicEnd = tonicStart + tonic.length;
        let newTonic = $('<span></span>').addClass('chord__tonic').html(tonic);
        let chordType = $(this).html().slice(tonicEnd);
        $(this).html(newTonic[0].outerHTML + chordType);
      });
    }
  }
/* END CONSTRUCTORS */

/* BEGIN MAIN CODE */
  const chordTonics = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H']
  const chordTypes = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11']

  const allChords = (() => {
    let allChords = [];
    for(let i = 0; i < chordTonics.length; i++) {
      for (let j = 0; j < chordTypes.length; j++) {
        allChords.push(chordTonics[i] + chordTypes[j]);
      }
    }
    return chordTonics.concat(allChords);
  })();

  // let BtnStartStop = new BtnStartStop({
  //   elem: $('.transpos__start')[0]
  // });

  let btnsStartStop = [];
  $('.transpos__startstop').each(function() {
    btnsStartStop.push(new BtnStartStop({
      elem: this
    }));
  });

  let btnsChangeTone = [];
  $('.transpos__change-tone').each(function() {
    btnsChangeTone.push(new BtnChangeTone({
      elem: this
    }));
  });

  let [a, b] = btnsChangeTone;

  let textarea = new Textarea({
    elem: $('.transpos__textarea')[0]
  });

  let song = new Song({
    elem: $('.song')[0]
  });

/* END MAIN CODE */


});