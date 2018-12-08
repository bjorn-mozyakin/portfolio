class Textarea {
  constructor(options) {
    this.elem = options.elem;
  }

  toggle() {
    $(this.elem).toggleClass('transpose__textarea_hidden');
  }

  setText(text) {
    this.text = text;
  }
}

export default Textarea;