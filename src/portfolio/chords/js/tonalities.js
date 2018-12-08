'use strict';

import Menu from './common/menu/Menu';
import BtnTonality from './tonalities/BtnTonality';
import Gammas from './tonalities/Gammas';


console.log('Tonalities page');

let gamma;
let selectsTonality;

$(document).ready( () => {

  require('./common/menu/createMenu');

  // Tonalities
  gamma = new Gammas({
    elem: $('.gammas')[0]
  });

  selectsTonality = [];
  $('.tonality-selection select').each(function() {
    selectsTonality.push(this);
  });

  let btnTonality = new BtnTonality({
    elem: $('.tonality-btn')[0]
  });

  gamma.drawStaff();

});

export {gamma, selectsTonality};
