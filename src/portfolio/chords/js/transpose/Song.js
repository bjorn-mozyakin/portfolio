import {ALL_CHORDS} from '../transpose/getAllChords';

class Song {
  constructor(options) {
    this.elem = options.elem;
    this.text = null;
    this.sign = null;
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

  clearSign() {
    this.sign = null;
  }

  wrapChords() {
    let text = this.text;
    for (let chord of ALL_CHORDS) {
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
          let wrappedChord = '<span>' + text.slice(startPos, endPos) + '</span>';
          let textBefore = text.slice(0, startPos);
          let textAfter = text.slice(endPos);

          text = textBefore + wrappedChord + textAfter;
          position = endPos + 13 + 1;  // 13 - длина блока <span></span> +1 - следующий элемент
        } else {
          position = endPos + 1;
        }
      }
    }
    this.text = text;
    $(this.elem).html(this.text);
    this.wrapChordsTonics();
    // for (let tonic of CHORD_TONICS) {
    //   let position = 0;

    //   while(true) {
    //     let startPos = this.text.indexOf(tonic, position);
    //     if (startPos == -1) break;
    //     let nextSym = this.text.slice(startPos + 1, startPos + 2)
    //     nextSym == '\n' || nextSym == ' ' || CHORD_TONICS.indexOf(nextSym) != -1
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
      if ($(this).html().slice(1, 2) == 'b') tonic += 'b';
      let tonicStart = $(this).html().indexOf(tonic);
      let tonicEnd = tonicStart + tonic.length;
      let newTonic = $('<span></span>').addClass('chord__tonic').html(tonic);
      let chordType = $(this).html().slice(tonicEnd);
      $(this).html(newTonic[0].outerHTML + chordType);
    });
  }
}

export default Song;