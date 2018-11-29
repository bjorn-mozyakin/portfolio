  class Btns {
    constructor(options) {
      this.elem = options.elem;
      this.name = $(this.elem).attr('name');
    }
  }

  export default Btns;