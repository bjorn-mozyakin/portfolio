import Btns from '../common/Btns';
import {textarea, song, btnsChangeTone, toneValue, btnChords} from '../transpose';

class BtnStartStop extends Btns {
  constructor(options) {
    super(options);
    this.elem.onclick = this.handleClick.bind(this);
  }

  handleClick() {
    debugger;
    if (this.name == 'transpose__start') {
      $(this.elem).toggleClass('transpose__start_hidden');
      $('.transpose__stop').toggleClass('transpose__stop_hidden');
      btnsChangeTone.forEach(function(btn) {
        btn.enable();
      });
      btnChords.enable();
      textarea.setText($(textarea.elem).val());
      textarea.toggle();
      song.setText(textarea.text);
      song.toggle();
      song.wrapChords();
    } else if (this.name == 'transpose__stop') {
      $(this.elem).toggleClass('transpose__stop_hidden');
      $('.transpose__start').toggleClass('transpose__start_hidden');
      btnsChangeTone.forEach(function(btn) {
        btn.disable();
      });
      btnChords.reset();
      song.clearText();
      song.clearSign();
      song.toggle();
      textarea.setText(textarea.text);
      textarea.toggle();
      toneValue.reset();
    } else {
      new Error('Warn: unknown button was pushed');
    }
  }
}

export default BtnStartStop;