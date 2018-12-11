import Btns from '../common/Btns';
import {CHORD_TONICS} from '../common/chords/chords';
import {btnsChangeTone, toneValue, song} from '../transpose';

class BtnChangeTone extends Btns {
  constructor(options) {
    super(options);
    this.elem.onclick = this.handleClick.bind(this);
  }

  handleClick() {
    let step = this.defineStep();
    this.changeTone(step);
    toneValue.changeToneValue(step);
    if (toneValue.tone >= 12|| toneValue.tone <= -12) {
      this.disable();
    } else {
      btnsChangeTone.forEach((btn) => {
        btn.enable();
      });
    }
  }

  defineStep() {
    let step;
    this.name == 'transpose__tone-up' ? step = 1 :
      this.name == 'transpose__tone-down' ? step = -1 :
        step = null;
    return step;
  }

  changeTone(step) {
    if (!song.sign) song.sign = this.defineSign();
    $('.chord__tonic').each((i, elem) => {
      let currentTonePos = this.definePos(elem);

      let newTonicPos = currentTonePos + step;
      if (newTonicPos >= CHORD_TONICS.length) newTonicPos = 0;
      if (newTonicPos < 0) newTonicPos = CHORD_TONICS.length - 1;
      if (Array.isArray(CHORD_TONICS[newTonicPos])) $(elem).html(CHORD_TONICS[newTonicPos][song.sign]);
      else $(elem).html(CHORD_TONICS[newTonicPos]);
    });
  }

  definePos(elem) {
    for (let i = 0; i < CHORD_TONICS.length; i++) {
      if (Array.isArray(CHORD_TONICS[i])) {
        for (let j = 0; j < CHORD_TONICS[i].length; j++) {
          if ($(elem).html() == CHORD_TONICS[i][j]) return i;
        }
      }
      if ($(elem).html() == CHORD_TONICS[i]) return i;
    }
  }

  defineSign() {
    for (let i = 0; i < $('.chord__tonic').length; i++) {
      if ($('.chord__tonic')[i].innerHTML.includes('#')) return 0;
      if ($('.chord__tonic')[i].innerHTML.includes('b')) return 1;
    }
    return 0;
  }
}

export default BtnChangeTone;