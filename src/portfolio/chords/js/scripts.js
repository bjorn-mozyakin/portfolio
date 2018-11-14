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
      $('.transpos__textarea').prop('disabled', true);
      console.log('Transpose clicked');
    }
  }

/* END CONSTRUCTORS */

/* BEGIN MAIN CODE */
  const chordTonic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H']
  const chordType = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11']

  let btnTranspos = new BtnTranspos({
    elem: $('.transpos__start')[0]
  });

  console.log('ES6 alive');
/* END MAIN CODE */


});