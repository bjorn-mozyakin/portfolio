'use strict';

import Menu from './common/menu/Menu';
import Textarea from './transpose/Textarea';
import Song from './transpose/Song';
import ToneValue from './transpose/ToneValue';
import BtnStartStop from './transpose/BtnStartStop';
import BtnChangeTone from './transpose/BtnChangeTone';
import getAllChords from './transpose/getAllChords';

console.log('Transpose page');

// const ALL_CHORDS = getAllChords();

let textarea;
let song;
let toneValue;
let btnsChangeTone;

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

export {CHORD_TONICS, CHORD_TYPES, MAJOR, MINOR, TONALITY_MARGIN, ALL_CHORDS, textarea, song, btnsChangeTone, toneValue};
