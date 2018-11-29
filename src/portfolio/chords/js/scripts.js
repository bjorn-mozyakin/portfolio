'use strict';

import {BtnTonality, Gammas} from './tonalities/tonalities';
import Textarea from './transpose/Textarea';
import Song from './transpose/Song';
import ToneValue from './transpose/ToneValue';
import BtnStartStop from './transpose/BtnStartStop';
import BtnChangeTone from './transpose/BtnChangeTone';
import getAllChords from './transpose/getAllChords';


console.log('12');

const CHORD_TONICS = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#','Gb'], 'G', ['G#','Ab'], 'A', ['A#','Hb'], 'H'];
const CHORD_TYPES = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11'];
const P = 1;      // Полутон
const T = 2 * P;  // Тон
const MAJOR = [T, T, P, T, T, T, P];  // Мажорный звукоряд
const MINOR = [T, P, T, T, P, T, T];  // Минорный звукоряд
const TONALITY_MARGIN = [140, 140, 130, 130, 120, 110, 110, 100, 100, 90, 90, 80, 70, 70, 60, 60, 50, 40, 40, 30, 30, 20, 20, 10, 0];

const ALL_CHORDS = getAllChords();

let gamma;
let selectsTonality;
let textarea;
let song;
let toneValue;
let btnsChangeTone;

$(document).ready( () => {

  let btnsStartStop = [];
  $('.transpos__startstop').each(function() {
    btnsStartStop.push(new BtnStartStop({
      elem: this
    }));
  });

  btnsChangeTone = [];
  $('.transpos__change-tone').each(function() {
    btnsChangeTone.push(new BtnChangeTone({
      elem: this
    }));
  });

  toneValue = new ToneValue({
    elem: $('.transpos__tone-value')[0]
  });

  textarea = new Textarea({
    elem: $('.transpos__textarea')[0]
  });

  song = new Song({
    elem: $('.song')[0]
  });

  // Tonalities
  gamma = new Gammas({
    elem: $('#gammas')[0]
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

export {CHORD_TONICS, CHORD_TYPES, MAJOR, MINOR, TONALITY_MARGIN, ALL_CHORDS, textarea, song, btnsChangeTone, toneValue, gamma, selectsTonality};