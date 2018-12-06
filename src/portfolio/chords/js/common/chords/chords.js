const CHORD_TONICS = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#','Gb'], 'G', ['G#','Ab'], 'A', ['A#','Hb'], 'H'];
const CHORD_TYPES = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11'];
const P = 1;      // Полутон
const T = 2 * P;  // Тон
const MAJOR = [T, T, P, T, T, T, P];  // Мажорный звукоряд
const MINOR = [T, P, T, T, P, T, T];  // Минорный звукоряд
const TONALITY_MARGIN = [140, 140, 130, 130, 120, 110, 110, 100, 100, 90, 90, 80, 70, 70, 60, 60, 50, 40, 40, 30, 30, 20, 20, 10, 0];

export {CHORD_TONICS, CHORD_TYPES, MAJOR, MINOR, TONALITY_MARGIN};
