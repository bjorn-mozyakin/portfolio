import { words } from './main';

class BtnAdd {
  constructor(options) {
    this.elem = options.elem;
    this.elem.onclick = this.onclick.bind(this);
  }

  onclick(e) {
    words.addWord(e);
  }
}

export default BtnAdd;