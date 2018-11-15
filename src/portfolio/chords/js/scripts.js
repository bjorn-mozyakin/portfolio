'use strict';
$(document).ready(function() {

/* BEGIN CONSTRUCTORS */
  class Btns {
    constructor(options) {
      this.elem = options.elem;
      console.log(this.elem);
    }
  }

  class BtnTranspos extends Btns {
    constructor(options) {
      super(options);
      console.log(this.elem);
      this.elem.onclick = this.handleClick.bind(this);
    }

    handleClick(e) {
      console.log('Transpose clicked');
      textarea.hide();
      song.setText($(textarea.elem).val());
      song.show();
      song.wrapChords();
    }
  }

  class Textarea {
    constructor(options) {
      this.elem = options.elem;
      this.text = null;
    }

    hide() {
      $(this.elem).prop('disabled', true).addClass('transpos__textarea_hidden');
    }
  }

  class Song {
    constructor(options) {
      this.elem = options.elem;
      this.text = null;
    }

    show() {
      $(this.elem).removeClass('song_hidden').html();
    }

    setText(text) {
      this.text = text;
      $(this.elem).html(this.text);
    }

    wrapChords() {
      console.log('Start wrap');
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

      console.log('Finished');
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

  console.log(allChords);

  let btnTranspos = new BtnTranspos({
    elem: $('.transpos__start')[0]
  });

  let textarea = new Textarea({
    elem: $('.transpos__textarea')[0]
  });

  let song = new Song({
    elem: $('.song')[0]
  });

  console.log('ES6 alive');
/* END MAIN CODE */


});