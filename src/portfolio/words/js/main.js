'use strict';

import Table from './Table';
import BtnAdd from './BtnAdd';

let words;

$(document).ready( () => {
  words = 1;
  let content = document.querySelector('#content');

  let btnAdd = new BtnAdd({
    elem: $('.word-add')[0]
  })

  $.ajax({
    url: "api/data.php",
    type: "POST",
    data: {
      'action': 'show'
    },
    success: (data) => {
      words = new Table();
      words.addTable(content, JSON.parse(data));
      console.log('Спасибо, ваше письмо отправлено');
    },
    error: () => {
      console.log('К сожалению ваше письмо не удалось отправить. Попробуйте еще раз');
    }
  });

});

export {words, content};