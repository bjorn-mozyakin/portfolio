'use strict';

import Menu from './common/menu/Menu';
import Textarea from './transpose/Textarea';
import Song from './transpose/Song';
import ToneValue from './transpose/ToneValue';
import BtnChangeTone from './transpose/BtnChangeTone';
import BtnStartStop from './transpose/BtnStartStop';
import BtnChords from './transpose/BtnChords';
import getAllChords from './transpose/getAllChords';

let textarea;
let song;
let btnsChangeTone;
let toneValue;
let btnChords;

$(document).ready( () => {

  require('./common/menu/createMenu');

  let btnsStartStop = [];
  $('.transpose__startstop').each(function() {
    btnsStartStop.push(new BtnStartStop({
      elem: this
    }));
  });

  btnsChangeTone = [];
  $('.transpose__change-tone').each(function() {
    btnsChangeTone.push(new BtnChangeTone({
      elem: this
    }));
  });

  btnChords = new BtnChords({
    elem: $('.transpose__chords-btn')[0]
  });

  toneValue = new ToneValue({
    elem: $('.transpose__tone-value')[0]
  });

  textarea = new Textarea({
    elem: $('.transpose__textarea')[0]
  });

  song = new Song({
    elem: $('.song')[0]
  });

});

export {textarea, song, btnsChangeTone, toneValue, btnChords};
