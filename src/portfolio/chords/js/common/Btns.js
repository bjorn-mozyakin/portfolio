  class Btns {
    constructor(options) {
      this.elem = options.elem;
      this.name = $(this.elem).attr('name');
    }

    enable() {
      $(this.elem).prop('disabled', false);
    }

    disable() {
      $(this.elem).prop('disabled', true);
    }
  }

  export default Btns;