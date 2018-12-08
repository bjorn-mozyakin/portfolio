let Menu = require('../menu/Menu');

let menu = new Menu([
  ['Главная','index'],
  ['Транспонирование аккордов','transpose'],
  ['Тональности','tonalities']
]);

module.exports.menu = menu;