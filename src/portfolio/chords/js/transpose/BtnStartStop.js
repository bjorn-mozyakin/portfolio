import Btns from '../common/Btns';
import {textarea, song, toneValue} from '../scripts';

class BtnStartStop extends Btns {
  constructor(options) {
    super(options);
    this.elem.onclick = this.handleClick.bind(this);
  }

  handleClick() {
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
      $('.transpos__start').toggleClass('transpos__start_hidden');
      $('.transpos__change-tone').each(function(i, btn) {
        $(btn).prop('disabled', true);
      });
      song.clearText();
      song.toggle();
      textarea.setText(textarea.text);
      textarea.toggle();
      toneValue.reset();
    } else {
      console.log('warn: unknown button was pushed');
    }
  }
}

export default BtnStartStop;