import Btns from '../common/Btns';
import {textarea, song, toneValue} from '../transpose';

class BtnStartStop extends Btns {
  constructor(options) {
    super(options);
    this.elem.onclick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.name == 'transpose__start') {
      $(this.elem).toggleClass('transpose__start_hidden');
      $('.transpose__stop').toggleClass('transpose__stop_hidden');
      $('.transpose__change-tone').each(function(i, btn) {
        $(btn).prop('disabled', false);
      });
      textarea.setText($(textarea.elem).val());
      textarea.toggle();
      song.setText(textarea.text);
      song.toggle();
      song.wrapChords();
      throw new Error("Test");
    } else if (this.name == 'transpose__stop') {
      $(this.elem).toggleClass('transpose__stop_hidden');
      $('.transpose__start').toggleClass('transpose__start_hidden');
      $('.transpose__change-tone').each(function(i, btn) {
        $(btn).prop('disabled', true);
      });
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