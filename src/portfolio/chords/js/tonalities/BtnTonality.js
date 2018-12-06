import Btns from '../common/Btns';
import {gamma, selectsTonality} from '../tonalities';

class BtnTonality extends Btns {
  constructor(options) {
    super(options);
    this.elem.onclick = this.handleClick.bind(this);
  }

  handleClick() {
    gamma.selections.length = 0 ;
    selectsTonality.forEach((item) => {
      gamma.selections.push(item.value);
      if (gamma.selections[gamma.selections.length - 1] == '0') {
        $('.tonality-selection')
          .find('[data-name=' + item.name + ']')
          .removeClass('tonality-selection__hint_hidden');
      } else {
        $('.tonality-selection')
          .find('[data-name=' + item.name + ']')
          .addClass('tonality-selection__hint_hidden');
      }
    });
    if (gamma.selections.every((item) => item != '0')) {
      if (!this.gammaDrawn) {
        gamma.clearStaff();
        gamma.drawStaff();
      }
      gamma.drawNotes();
    }
  }
}

export default BtnTonality;