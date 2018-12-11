import Gammas from '../tonalities/Gammas';

const test_gamma = new Gammas({
    elem: document.querySelector('.gammas')
  });

test('Tonalities Major', () => {
  expect(test_gamma.defineNotes('H','#','major')).toEqual([]);
  expect(test_gamma.defineNotes('C','no','major')).toEqual(['C','D','E','F','G','A','H']);
  expect(test_gamma.defineNotes('C','#','major')).toEqual(['C#','D#','E#','F#','G#','A#','H#']);
  expect(test_gamma.defineNotes('D','b','major')).toEqual(['Db','Eb','F','Gb','Ab','Hb','C']);
  expect(test_gamma.defineNotes('D','no','major')).toEqual(['D','E','F#','G','A','H','C#']);
  expect(test_gamma.defineNotes('D','#','major')).toEqual([]);
  expect(test_gamma.defineNotes('E','b','major')).toEqual(['Eb','F','G','Ab','Hb','C','D']);
  expect(test_gamma.defineNotes('E','no','major')).toEqual(['E','F#','G#','A','H','C#','D#']);
  expect(test_gamma.defineNotes('F','b','major')).toEqual([]);
  expect(test_gamma.defineNotes('E','#','major')).toEqual([]);
  expect(test_gamma.defineNotes('F','no','major')).toEqual(['F','G','A','Hb','C','D','E']);
  expect(test_gamma.defineNotes('F','#','major')).toEqual(['F#','G#','A#','H','C#','D#','E#',]);
  expect(test_gamma.defineNotes('G','b','major')).toEqual(['Gb','Ab','Hb','Cb','Db','Eb','F']);
  expect(test_gamma.defineNotes('G','no','major')).toEqual(['G','A','H','C','D','E','F#']);
  expect(test_gamma.defineNotes('G','#','major')).toEqual([]);
  expect(test_gamma.defineNotes('A','b','major')).toEqual(['Ab','Hb','C','Db','Eb','F','G',]);
  expect(test_gamma.defineNotes('A','no','major')).toEqual(['A','H','C#','D','E','F#','G#']);
  expect(test_gamma.defineNotes('A','#','major')).toEqual([]);
  expect(test_gamma.defineNotes('H','b','major')).toEqual(['Hb','C','D','Eb','F','G','A']);
  expect(test_gamma.defineNotes('H','no','major')).toEqual(['H','C#','D#','E','F#','G#','A#']);
  expect(test_gamma.defineNotes('C','b','major')).toEqual(['Cb','Db','Eb','Fb','Gb','Ab','Hb']);
});

test('Tonalities Minor', () => {
});
