'use strict';

import Menu from './common/menu/Menu';

// import menu from './menu/menu.js';
// let Menu = require('./common/menu/Menu.js');

console.log('Main page');

$(document).ready( () => {

  let menu = new Menu([
    ['Главная','index'],
    ['Транспонирование аккордов','transpose'],
    ['Тональности','tonalities']
  ]);

});