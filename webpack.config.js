const words_config = require('./webpack_words.config.js');
const chords_config = require('./webpack_chords.config.js');

module.exports = [
  chords_config(),
  words_config(),
];