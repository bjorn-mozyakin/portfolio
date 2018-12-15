import Gamma from '../tonalities/Gamma';

const test_gamma = new Gamma({
    elem: document.querySelector('.stave__notes')
  });

test('Tonalities Major', () => {
  expect(test_gamma._defineNotes('H','#','major')).toEqual([]);
  expect(test_gamma._defineNotes('C','no','major')).toEqual(['C','D','E','F','G','A','H']);
  expect(test_gamma._defineNotes('C','#','major')).toEqual(['C#','D#','E#','F#','G#','A#','H#']);
  expect(test_gamma._defineNotes('D','b','major')).toEqual(['Db','Eb','F','Gb','Ab','Hb','C']);
  expect(test_gamma._defineNotes('D','no','major')).toEqual(['D','E','F#','G','A','H','C#']);
  expect(test_gamma._defineNotes('D','#','major')).toEqual([]);
  expect(test_gamma._defineNotes('E','b','major')).toEqual(['Eb','F','G','Ab','Hb','C','D']);
  expect(test_gamma._defineNotes('E','no','major')).toEqual(['E','F#','G#','A','H','C#','D#']);
  expect(test_gamma._defineNotes('F','b','major')).toEqual([]);
  expect(test_gamma._defineNotes('E','#','major')).toEqual([]);
  expect(test_gamma._defineNotes('F','no','major')).toEqual(['F','G','A','Hb','C','D','E']);
  expect(test_gamma._defineNotes('F','#','major')).toEqual(['F#','G#','A#','H','C#','D#','E#',]);
  expect(test_gamma._defineNotes('G','b','major')).toEqual(['Gb','Ab','Hb','Cb','Db','Eb','F']);
  expect(test_gamma._defineNotes('G','no','major')).toEqual(['G','A','H','C','D','E','F#']);
  expect(test_gamma._defineNotes('G','#','major')).toEqual([]);
  expect(test_gamma._defineNotes('A','b','major')).toEqual(['Ab','Hb','C','Db','Eb','F','G',]);
  expect(test_gamma._defineNotes('A','no','major')).toEqual(['A','H','C#','D','E','F#','G#']);
  expect(test_gamma._defineNotes('A','#','major')).toEqual([]);
  expect(test_gamma._defineNotes('H','b','major')).toEqual(['Hb','C','D','Eb','F','G','A']);
  expect(test_gamma._defineNotes('H','no','major')).toEqual(['H','C#','D#','E','F#','G#','A#']);
  expect(test_gamma._defineNotes('C','b','major')).toEqual(['Cb','Db','Eb','Fb','Gb','Ab','Hb']);
});

test('Tonalities Minor', () => {
});
