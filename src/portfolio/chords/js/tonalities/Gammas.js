import {GAMMA_NOTES, CHORD_TONICS, MAJOR, MINOR, TONALITY_MARGIN} from '../common/chords/chords';

class Gammas {
  constructor(options) {
    this.elem = options.elem;
    if (this.elem) {
      this.ctx = this.elem.getContext('2d');
      this.ctx.font = '20px Arial';
      this.ctx.fillStyle = 'black';
      // this.ctx.lineWidth = 3  ;
      // this.ctx.strokeStyle = 'black';
    }

    this.selections = [];
    this.mode = null;
    this.notes = [];
    this.gammaDrawn = false;
  }

  clearStaff() {
    this.ctx.clearRect(0, 0, 560, 200);
    this.notes.length = 0;
    this.hideErrorMsg();
  }

  drawStaff() {
    let margin = 20;
    let currentPos = margin * 2;
    let step = 20;
    for (let i = 1; i <= 5; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(margin, currentPos);
      this.ctx.lineTo(500 - margin, currentPos);
      this.ctx.stroke();
      this.ctx.closePath();
      currentPos += step;
    }
    this.gammaDrawn = true;
  }

  drawTonality(){
    let notes = this.defineNotes(this.selections[0], this.selections[1], this.selections[2]);
    if (notes.length == 0) this.showErrorMsg();
    else this.drawNotes(notes);
  }

  drawNotes(notes) {
    let marginL = 140;
    let stepL = 50;

    let curPos = GAMMA_NOTES.indexOf(notes[0][0]);
    let marginT = TONALITY_MARGIN[curPos];

    for (var i = 0; i < notes.length; i++) {
      if (notes[i][1]) this.drawSign(marginL - 30, marginT + 10, notes[i][1]);
      this.drawNote(marginL, marginT);
      this.drawLetter(marginL - 10, 180, notes[i]);
      marginL += stepL;
      marginT -= 10;
    }
  }

  defineNotes(tonic, sign, mode) {
    let notes = [];
    this.mode = this.defineMode(mode);

    let currentLetter = tonic;
    let nextLetter = this.defineNextLetter(currentLetter);

    let currentNote = tonic;
    if (sign != 'no') currentNote += sign;

    let currentNotePos = this.definePos(currentNote);

    for (let i = 0; i < this.mode.length; i++) {
      notes.push(currentNote);
      currentNotePos += this.mode[i];
      if (currentNotePos >= CHORD_TONICS.length) currentNotePos = currentNotePos - CHORD_TONICS.length;
      currentNote = this.defineNote(CHORD_TONICS[currentNotePos], nextLetter);
      if (!currentNote) return [];
      nextLetter = this.defineNextLetter(nextLetter);
    }

    return notes;
  }

  defineNextLetter(currentTonic) {
    let currentTonicPos = GAMMA_NOTES.indexOf(currentTonic);
    let nextTonicPos = currentTonicPos + 1;
    if (nextTonicPos >= GAMMA_NOTES.length) nextTonicPos = 0;
    return GAMMA_NOTES[nextTonicPos];
  }

  defineNote(note, letter) {
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

  definePos(elem) {
    for (let i = 0; i < CHORD_TONICS.length; i++) {
      if (Array.isArray(CHORD_TONICS[i])) {
        for (let j = 0; j < CHORD_TONICS[i].length; j++) {
          if (elem == CHORD_TONICS[i][j]) return i;
        }
      }
      if (elem == CHORD_TONICS[i]) return i;
    }
  }

  defineMode(mode) {
    if (mode == 'major') return MAJOR;
    else return MINOR;
  }

  drawNote(marginL, marginT) {
    this.drawEllipse(this.ctx, marginL, marginT, 10, 6);
    if (marginT <= 20 || marginT >= 140) this._drawAdditionalLine(this.ctx, marginL, marginT);
  }

  drawEllipse(ctx, x, y, a, b) {
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

  _drawAdditionalLine(ctx, marginL, marginT) {
    this.ctx.beginPath();
    this.ctx.moveTo(marginL - 15, marginT);
    this.ctx.lineTo(marginL + 15, marginT);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawSign(marginL, marginT, sign) {
    this.ctx.font = '30px Arial';
    this.ctx.fillText(sign, marginL, marginT);
  }

  drawLetter(marginL, marginT, letter) {
    this.ctx.font = '20px Arial';
    this.ctx.fillText(letter, marginL, marginT);
  }

  showErrorMsg() {
    $('.stave__error-msg').removeClass('stave__error-msg_hidden');
  }

  hideErrorMsg() {
    $('.stave__error-msg').addClass('stave__error-msg_hidden');
  }
}


export default Gammas;