class Menu {
  constructor(options) {
    this.items = [];
    this._createMenu(options);
  }

  _createMenu(options) {
    let nav = $('<nav></nav>');
    let menu = $('<ul></ul>').addClass('nav__menu').prependTo(nav);
    for (let i = 0; i < options.length; i++) {
      let str = `<li class="nav__menu-item">
               <a href="/${options[i][1]}.html">${options[i][0]}</a>
             </li>`;
      $(menu).append(str);
      this.items.push(options[i][0]);
    }

    $('body').prepend(nav);
  }
}

export default Menu;
