'use strict';

import Menu from './common/menu/Menu';
import BtnTonality from './tonalities/BtnTonality';
import Gamma from './tonalities/Gamma';

let gamma;
let selectsTonality;

$(document).ready( () => {

  require('./common/menu/createMenu');

  gamma = new Gamma({
    elem: $('.stave__notes')[0]
  });

  selectsTonality = [];
  $('.tonality-selection select').each(function() {
    selectsTonality.push(this);
  });

  let btnTonality = new BtnTonality({
    elem: $('.tonality-selection__show')[0]
  });

  gamma.drawStave();

});

export {gamma, selectsTonality};
