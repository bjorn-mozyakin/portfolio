import Btns from '../common/Btns';
import {btnsChangeTone, song} from '../transpose';

class BtnChords extends Btns {
  constructor(options) {
    super(options);
    this.elem.onclick = this.handleClick.bind(this);
    this.valDefault = $(this.elem).html();
  }

  handleClick() {
    this.changeValue();
    song.changeChordsVisibility();
    btnsChangeTone.forEach( (btn) => {
      $(btn.elem).is(':disabled') ? btn.enable() : btn.disable();
    } );
  }

  changeValue() {
    $(this.elem).toggleClass('transpose__chords-btn_hide');
    if ($(this.elem).hasClass('transpose__chords-btn_hide')) {
      $(this.elem).html($(this.elem).data('chordsShow'));
    } else {
      $(this.elem).html($(this.elem).data('chordsHide'));
    }
  }

  reset() {
    this.disable();
    $(this.elem).removeClass('transpose__chords-btn_hide');
    $(this.elem).html(this.valDefault);
  }
}

export default BtnChords;