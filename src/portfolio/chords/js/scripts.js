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

      for (let tonic of chordTonic) {
        let position = 0;

        while(true) {
          let startPos = this.text.indexOf(tonic, position);
          if (startPos == -1) break;
          let endPos = this.text.indexOf('\n', startPos);
          if (endPos == -1) endPos = this.text.indexOf(' ', startPos);

          let wrappedChord = "<span>" + this.text.slice(startPos, endPos) + "</span>";
          let textBefore = this.text.slice(0, startPos);
          let textAfter = this.text.slice(endPos);

          this.text = textBefore + wrappedChord + textAfter;
          position = startPos + 14;

        };
      };

      $(this.elem).html(this.text);
      console.log('Finished');
    }
  }
/* END CONSTRUCTORS */

/* BEGIN MAIN CODE */
  const chordTonic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H']
  const chordType = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11']

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