import Btns from '../common/Btns';

class ToneValue extends  Btns {
  constructor(options) {
    super(options);
    this.tone = 0;
  }

  reset() {
    this.tone = 0;
    $(this.elem).html(this.tone);
  }

  changeToneValue(step) {
    this.tone += step;
    $(this.elem).html(this.tone);
  }
}

export default ToneValue;