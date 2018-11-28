'use strict';
$(document).ready(function() {

  /* BEGIN CONSTRUCTORS */

  class Btns {
    constructor(options) {
      this.elem = options.elem;
      this.name = $(this.elem).attr('name');
    }
  }

  class BtnStartStop extends Btns {
    constructor(options) {
      super(options);
      this.elem.onclick = this.handleClick.bind(this);
    }

    handleClick() {
      if (this.name == 'transpos__start') {
        $(this.elem).toggleClass('transpos__start_hidden');
        $('.transpos__stop').toggleClass('transpos__stop_hidden');
        $('.transpos__change-tone').each(function(i, btn) {
          $(btn).prop('disabled', false);
        });
        textarea.setText($(textarea.elem).val());
        textarea.toggle();
        song.setText(textarea.text);
        song.toggle();
        song.wrapChords();
      } else if (this.name == 'transpos__stop') {
        $(this.elem).toggleClass('transpos__stop_hidden');
        $('.transpos__start').toggleClass('transpos__start_hidden');
        $('.transpos__change-tone').each(function(i, btn) {
          $(btn).prop('disabled', true);
        });
        song.clearText();
        song.toggle();
        textarea.setText(textarea.text);
        textarea.toggle();
        toneValue.reset();
      } else {
        console.log('warn: unknown button was pushed');
      }
    }
  }

  class BtnChangeTone extends Btns {
    constructor(options) {
      super(options);
      this.elem.onclick = this.handleClick.bind(this);
    }

    handleClick() {
      let step = this.defineStep();
      this.changeTone(step);
      toneValue.changeToneValue(step);
      if (toneValue.tone >= 12|| toneValue.tone <= -12) {
        this.disable($(this.elem));
      } else {
        btnsChangeTone.forEach((btn) => {
          this.enable($(btn.elem));
        });
      }
    }



    enable(btn) {
      btn.prop('disabled', false);
    }

    disable(btn) {
      btn.prop('disabled', true);
    }

    defineStep() {
      let step;
      this.name == 'transpos__tone-up' ? step = 1 :
        this.name == 'transpos__tone-down' ? step = -1 :
          step = null;
      return step;
    }

    changeTone(step) {
      let sign = this.defineSign();
      $('.chord__tonic').each((i, elem) => {
        let currentTonePos = this.definePos(elem);

        let newTonicPos = currentTonePos + step;
        if (newTonicPos >= CHORD_TONICS.length) newTonicPos = 0;
        if (newTonicPos < 0) newTonicPos = CHORD_TONICS.length - 1;
        if (Array.isArray(CHORD_TONICS[newTonicPos])) $(elem).html(CHORD_TONICS[newTonicPos][sign]);
        else $(elem).html(CHORD_TONICS[newTonicPos]);
      });
    }

    definePos(elem) {
      for (let i = 0; i < CHORD_TONICS.length; i++) {
        if (Array.isArray(CHORD_TONICS[i])) {
          for (let j = 0; j < CHORD_TONICS[i].length; j++) {
            if ($(elem).html() == CHORD_TONICS[i][j]) return i;
          }
        }
        if ($(elem).html() == CHORD_TONICS[i]) return i;
      }
    }

    defineSign() {
      for (let i = 0; i < $('.chord__tonic').length; i++) {
        if ($('.chord__tonic')[i].innerHTML.includes('#')) return 0;
        if ($('.chord__tonic')[i].innerHTML.includes('b')) return 1;
      }
      return 0;
    }

  }

  class ToneValue extends  Btns {
    constructor(options) {
      super(options);
      this.tone = 0;
    }

    reset() {
      this.tone = 0;
      $(this.elem).html(this.tone);
    }

    changeToneValue(step) {
      this.tone += step;
      $(this.elem).html(this.tone);
    }
  }

  class Textarea {
    constructor(options) {
      this.elem = options.elem;
    }

    toggle() {
      $(this.elem).toggleClass('transpos__textarea_hidden');
    }

    setText(text) {
      this.text = text;
    }
  }

  class Song {
    constructor(options) {
      this.elem = options.elem;
      this.text = null;
    }

    toggle() {
      $(this.elem).toggleClass('song_hidden');
    }

    setText(text) {
      this.text = text;
      $(this.elem).html(this.text);
    }

    clearText() {
      this.text = '';
    }

    wrapChords() {
      let text = this.text;
      for (let chord of ALL_CHORDS) {
        let position = 0;
        while(true) {
          let startPos = text.indexOf(chord, position);
          if (startPos == -1) break;
          let endPos = startPos + chord.length;

          let conditions = (
            text[startPos - 1] == ' ' ||
            text[startPos - 1] == '\n' ||
            text[startPos - 1] == undefined
          ) && (
            text[endPos] == ' ' ||
            text[endPos] == '\n' ||
            text[endPos] == undefined
          );
          if (conditions) {
            let wrappedChord = '<span>' + text.slice(startPos, endPos) + '</span>';
            let textBefore = text.slice(0, startPos);
            let textAfter = text.slice(endPos);

            text = textBefore + wrappedChord + textAfter;
            position = endPos + 13 + 1;  // 13 - длина блока <span></span> +1 - следующий элемент
          } else {
            position = endPos + 1;
          }
        }
      }
      this.text = text;
      $(this.elem).html(this.text);
      this.wrapChordsTonics();
      // for (let tonic of CHORD_TONICS) {
      //   let position = 0;

      //   while(true) {
      //     let startPos = this.text.indexOf(tonic, position);
      //     if (startPos == -1) break;
      //     let nextSym = this.text.slice(startPos + 1, startPos + 2)
      //     nextSym == '\n' || nextSym == ' ' || CHORD_TONICS.indexOf(nextSym) != -1
      //     let midPos = this.text.indexOf('\n', startPos);
      //     let endPos = this.text.indexOf('\n', startPos);
      //     if (endPos == -1) endPos = this.text.indexOf(' ', startPos);

      //     let wrappedChord = "<span>" + this.text.slice(startPos, endPos) + "</span>";
      //     let textBefore = this.text.slice(0, startPos);
      //     let textAfter = this.text.slice(endPos);

      //     this.text = textBefore + wrappedChord + textAfter;
      //     position = startPos + 14;

      //   };
      // };

    }

    wrapChordsTonics() {
      $('.song span').each(function() {
        let tonic = $(this).html().slice(0, 1);
        if ($(this).html().slice(1, 2) == '#') tonic += '#';
        if ($(this).html().slice(1, 2) == 'b') tonic += 'b';
        let tonicStart = $(this).html().indexOf(tonic);
        let tonicEnd = tonicStart + tonic.length;
        let newTonic = $('<span></span>').addClass('chord__tonic').html(tonic);
        let chordType = $(this).html().slice(tonicEnd);
        $(this).html(newTonic[0].outerHTML + chordType);
      });
    }
  }

  // Tonalities

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

  class BtnTonality extends Btns {
    constructor(options) {
      super(options);
      this.elem.onclick = this.handleClick.bind(this);
    }

    handleClick() {
      gamma.selections.length = 0 ;
      selectsTonality.forEach((item) => {
        gamma.selections.push(item.elem.value);
        if (gamma.selections[gamma.selections.length - 1] == '0') {
          $('.tonality-selection')
            .find('[data-name=' + item.name + ']')
            .removeClass('tonality-selection__hint_hidden');
        } else {
          $('.tonality-selection')
            .find('[data-name=' + item.name + ']')
            .addClass('tonality-selection__hint_hidden');
        }
      });
      if (gamma.selections.every((item) => item != '0')) {
        if (!this.gammaDrawn) {
          gamma.clearStaff();
          gamma.drawStaff();
        }
        gamma.drawNotes();
      }
    }
  }

  class SelectTonality extends Btns{
    constructor(options) {
      super(options);
    }
  }
  /* END CONSTRUCTORS */

  /* BEGIN MAIN CODE */
  const CHORD_TONICS = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#','Gb'], 'G', ['G#','Ab'], 'A', ['A#','Hb'], 'H'];
  const CHORD_TYPES = ['m', '7', 'm7', '6', 'm6', 'sus2', 'sus4', 'dim', 'aug', '9', '11'];
  const P = 1;      // Полутон
  const T = 2 * P;  // Тон
  const MAJOR = [T, T, P, T, T, T, P];  // Мажорный звукоряд
  const MINOR = [T, P, T, T, P, T, T];  // Минорный звукоряд
  const TONALITY_MARGIN = [140, 140, 130, 130, 120, 110, 110, 100, 100, 90, 90, 80, 70, 70, 60, 60, 50, 40, 40, 30, 30, 20, 20, 10, 0];

  const ALL_CHORDS = (() => {
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
  })();

  // let BtnStartStop = new BtnStartStop({
  //   elem: $('.transpos__start')[0]
  // });

  let btnsStartStop = [];
  $('.transpos__startstop').each(function() {
    btnsStartStop.push(new BtnStartStop({
      elem: this
    }));
  });

  let btnsChangeTone = [];
  $('.transpos__change-tone').each(function() {
    btnsChangeTone.push(new BtnChangeTone({
      elem: this
    }));
  });

  // let [a, b] = btnsChangeTone;


  let toneValue = new ToneValue({
    elem: $('.transpos__tone-value')[0]
  });

  let textarea = new Textarea({
    elem: $('.transpos__textarea')[0]
  });

  let song = new Song({
    elem: $('.song')[0]
  });

  // Tonalities
  let gamma = new Gammas({
    elem: $('#gammas')[0],
  });

  let selectsTonality = [];
  $('.tonality-selection select').each(function() {
    selectsTonality.push(new SelectTonality({
      elem: this
    }));
  });

  let btnTonality = new BtnTonality({
    elem: $('.tonality-btn')[0]
  });

  gamma.drawStaff();


  /* END MAIN CODE */


});