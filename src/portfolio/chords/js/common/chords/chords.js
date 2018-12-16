const GAMMA_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'H'];
// const CHORD_TONICS = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#','Gb'], 'G', ['G#','Ab'], 'A', ['A#','Hb'], 'H'];
const CHORD_TONICS = [['H#','C'], ['C#', 'Db'], 'D', ['D#', 'Eb'], ['E','Fb'], ['E#','F'], ['F#','Gb'], 'G', ['G#','Ab'], 'A', ['A#','Hb'], ['H','Cb']];
const CHORD_TYPES = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11'];
const P = 1;      // Полутон
const T = 2 * P;  // Тон
const MAJOR = [T, T, P, T, T, T, P];  // Мажорный звукоряд
const MINOR = [T, P, T, T, P, T, T];  // Минорный звукоряд

export {GAMMA_NOTES, CHORD_TONICS, CHORD_TYPES, MAJOR, MINOR, TONALITY_MARGIN};
