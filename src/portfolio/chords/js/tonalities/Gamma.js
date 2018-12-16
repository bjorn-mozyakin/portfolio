import {GAMMA_NOTES, CHORD_TONICS, MAJOR, MINOR} from '../common/chords/chords';

class Gamma {
  constructor(options) {
    this.elem = options.elem;
    if (this.elem) {
      this.ctx = this.elem.getContext('2d');
      this.ctx.font = '20px Arial';
      this.ctx.fillStyle = 'black';
      this.width = options.width || 600;
      this.height = options.height || 200;
      this.step = options.step || 20;
      this.margin = options.margin || 20;
      this.clefSize = this.height * 0.7;
      this.posNoteC = this.margin + this.step * 6;
    }

    this.selections = [];
    this.notes = [];
    this.gammaDrawn = false;
  }

  clearStave() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.notes.length = 0;
    this.hideErrorMsg();
    this._hideTonalityName();
  }

  drawStave() {
    let marginT = this.margin * 2;

    for (let i = 1; i <= 5; i++) {
      this._drawLine(this.margin, marginT);
      marginT += this.step;
    }

    this.gammaDrawn = true;
  }

  _drawLine(marginL, marginT) {
    this.ctx.beginPath();
    this.ctx.moveTo(marginL, marginT);
    this.ctx.lineTo(this.width - marginL, marginT);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawGamma(){
    let notes = this._defineNotes(this.selections[0], this.selections[1], this.selections[2]);

    if (notes.length == 0) this.showErrorMsg();
    else {
      this._drawNotes(notes);
      this._showTonalityName();
    }
  }

  _drawNotes(notes) {
    let marginL = this.margin + this.clefSize;
    let stepL = this.step * 3;

    let curPos = GAMMA_NOTES.indexOf(notes[0][0]);
    let marginT = this.posNoteC - curPos * this.step/2;

    for (var i = 0; i < notes.length; i++) {
      if (notes[i][1]) this._drawSign(marginL - this.step * 1.5, marginT + this.step / 2, notes[i][1]);
      this._drawNote(marginL, marginT);
      this._drawLetter(marginL - this.step/2, this.height - this.margin, notes[i]);
      marginL += stepL;
      marginT -= this.step/2;
    }
  }

  _drawNote(marginL, marginT) {
    this._drawEllipse(marginL, marginT, this.step / 2, this.step * 0.3);
    if (marginT <= this.margin || marginT >= this.posNoteC) {
      this._drawAdditionalLine(marginL, marginT);
    }
  }

  _drawEllipse(x, y, a, b) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(x, y);
    this.ctx.rotate(-30 * Math.PI / 180);
    this.ctx.scale(a / b, 1);
    this.ctx.arc(0, 0, b, 0, Math.PI * 2, true);
    this.ctx.restore();
    this.ctx.closePath();

    this.ctx.fill();
    this.ctx.stroke();
  }

  _drawAdditionalLine(marginL, marginT) {
    this.ctx.beginPath();
    this.ctx.moveTo(marginL - this.step * 0.75, marginT);
    this.ctx.lineTo(marginL + this.step * 0.75, marginT);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  _drawSign(marginL, marginT, sign) {
    this.ctx.font = '30px Arial';
    this.ctx.fillText(sign, marginL, marginT);
  }

  _drawLetter(marginL, marginT, letter) {
    this.ctx.font = '20px Arial';
    this.ctx.fillText(letter, marginL, marginT);
  }

  _defineNotes(tonic, sign, mode) {
    let notes = [];
    mode = this._defineMode(mode);

    let currentLetter = tonic;
    let nextLetter = this._defineNextLetter(currentLetter);

    let currentNote = tonic;
    if (sign != 'no') currentNote += sign;

    let currentNotePos = this._definePos(currentNote);

    for (let i = 0; i < mode.length; i++) {
      notes.push(currentNote);
      currentNotePos += mode[i];
      if (currentNotePos >= CHORD_TONICS.length) currentNotePos = currentNotePos - CHORD_TONICS.length;
      currentNote = this._defineNote(CHORD_TONICS[currentNotePos], nextLetter);
      if (!currentNote) return [];
      nextLetter = this._defineNextLetter(nextLetter);
    }

    return notes;
  }

  _defineNextLetter(currentTonic) {
    let currentTonicPos = GAMMA_NOTES.indexOf(currentTonic);
    let nextTonicPos = currentTonicPos + 1;
    if (nextTonicPos >= GAMMA_NOTES.length) nextTonicPos = 0;
    return GAMMA_NOTES[nextTonicPos];
  }

  _defineNote(note, letter) {
    if (Array.isArray(note)) {
      for (let i = 0; i < note.length; i++) {
        if (note[i].includes(letter)) return note[i];
      }
    } else if (note.includes(letter)) {
      return note;
    } else {
      return false;
    }
  }

  _definePos(elem) {
    for (let i = 0; i < CHORD_TONICS.length; i++) {
      if (Array.isArray(CHORD_TONICS[i])) {
        for (let j = 0; j < CHORD_TONICS[i].length; j++) {
          if (elem == CHORD_TONICS[i][j]) return i;
        }
      }
      if (elem == CHORD_TONICS[i]) return i;
    }
  }

  _defineMode(mode) {
    if (mode == 'major') return MAJOR;
    else return MINOR;
  }

  _showTonalityName() {
    $('.stave__tonality-name').removeClass('stave__tonality-name_hidden');
    $('.stave__tonality-tonic').html(this.selections[0], this.selections[1], this.selections[2]);
  }

  _hideTonalityName() {
    $('.stave__tonality-name').addClass('stave__tonality-name_hidden');
    $('.stave__tonality-tonic').html('');
  }

  showErrorMsg() {
    $('.stave__error-msg').removeClass('stave__error-msg_hidden');
  }

  hideErrorMsg() {
    $('.stave__error-msg').addClass('stave__error-msg_hidden');
  }
}


export default Gamma;
