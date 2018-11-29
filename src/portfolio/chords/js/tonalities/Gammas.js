import {CHORD_TONICS, MAJOR, MINOR, TONALITY_MARGIN} from '../scripts.js';

class Gammas {
  constructor(options) {
    this.elem = options.elem;
    this.ctx = this.elem.getContext('2d');
    this.selections = [];
    this.tonic = null;
    this.gamma = null;
    this.sign = null;
    this.gammaDrawn = false;
  }

  clearStaff() {
    this.ctx.clearRect(0, 0, 560, 160);
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
      currentPos += step;
    }
    this.gammaDrawn = true;
  }

  drawNotes(){
    this.defineTonic();
    this.defineGamma();
    this.defineSign();

    let marginL = 40;
    let stepL = 40;
    let currentNote = this.tonic;
    let posMargins = this.definePos(currentNote);
    let posNotes = posMargins;

    for (let i = 0; i < this.gamma.length; i++) {
      let marginT = TONALITY_MARGIN[posMargins];
      this.drawNote(marginL, marginT);
      if (currentNote[1] == '#') {
        marginL += 10;
        this.drawSharp(marginL, marginT + 10);
      }
      if (currentNote[1] == 'b') {
        marginL += 10;
        this.drawBemol(marginL, marginT + 10);
      }
      marginL += stepL;
      posMargins += this.gamma[i];
      if (posMargins >= CHORD_TONICS.length) posNotes = posMargins - CHORD_TONICS.length;
      else posNotes = posMargins;

      let idx;
      this.sign == '#' ? idx = 0 : idx = 1;
      if (Array.isArray(CHORD_TONICS[posNotes])) currentNote = CHORD_TONICS[posNotes][idx];
      else currentNote = CHORD_TONICS[posNotes];
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

  defineTonic() {
    this.tonic = '' + this.selections[0];
    if (this.selections[1] == 'no') return;
    this.tonic += this.selections[1];
  }

  defineGamma() {
    if (this.selections[2] == 'major') this.gamma = MAJOR;
    else this.gamma = MINOR;
  }

  defineSign() {
    if (this.selections[1] == 'b') {
      this.sign = 'b';
      return;
    }
    this.sign = '#';
  }

  drawNote(marginL, marginT) {
    this.drawEllipse(this.ctx, marginL, marginT, 10, 6);
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

    this.ctx.fillStyle = 'balck';
    this.ctx.fill();
    // this.ctx.lineWidth = 3  ;
    // this.ctx.strokeStyle = 'black';
    this.ctx.stroke();
  }

  drawSharp(marginL, marginT) {
    this.ctx.font = '30px Arial';
    this.ctx.fillText('#', marginL, marginT);
  }

  drawBemol(marginL, marginT) {
    this.ctx.font = '30px Arial';
    this.ctx.fillText('b', marginL, marginT);
  }
}

export default Gammas;