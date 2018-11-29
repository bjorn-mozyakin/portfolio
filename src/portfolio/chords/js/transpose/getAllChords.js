import {CHORD_TONICS, CHORD_TYPES} from '../scripts';

function getAllChords() {
  let allChords = [];
  let simpleChords = [];

  for (let i = 0; i < CHORD_TONICS.length; i++) {
    if (Array.isArray(CHORD_TONICS[i])) {
      for (let j = 0; j < CHORD_TONICS[i].length; j++) {
        simpleChords.push(CHORD_TONICS[i][j]);
      }
    } else {
      simpleChords.push(CHORD_TONICS[i]);
    }
  }

  allChords = allChords.concat(simpleChords);

  for (let i = 0; i < simpleChords.length; i++) {
    for (let j = 0; j < CHORD_TYPES.length; j++) {
      allChords.push(simpleChords[i] + CHORD_TYPES[j]);
    }
  }

  return allChords;
}

export default getAllChords;
