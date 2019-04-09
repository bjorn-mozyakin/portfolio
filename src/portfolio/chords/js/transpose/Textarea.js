class Textarea {
  constructor(options) {
    this.elem = options.elem;
    this.elem.oninput = this.handleInput.bind(this);
    this.text = '';
    this.height = null;
  }

  handleInput() {
    if (this.elem.value == '') {
      this.elem.style.height = '';
      this.height = null

    } else {
      this.elem.style.height = "auto";
      this.elem.style.height = this.elem.scrollHeight + 'px';
      this.height = this.elem.style.height
    }
  }

  toggle() {
    $(this.elem).toggleClass('transpose__textarea_hidden');
  }

  setText(text) {
    this.text = text;
  }

}

export default Textarea;