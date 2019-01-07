import { content } from './main';

class Table {
  constructor() {
  }

  addTable(parent, data) {
    let table = document.createElement('table');
    table.className = 'words';
    data.forEach((row) => {
      this.addToPage(table, row);
    });
    parent.appendChild(table);
  }

  addWord(e) {
    this.addToBD(e);
  }

  addToBD(e) {
    let form = e.target.closest('.word-adding');
    let data = {
      'word-english': $('.word-adding__english').val(),
      'word-russian': $('.word-adding__russian').val(),
      'word-list': $('.word-adding__list').val()
    };
    $.ajax({
      url: "api/data.php",
      type: "POST",
      data: {
        'action': 'add',
        'data': data
      },
      success: (data) => {
        debugger
        JSON.parse(data).forEach((row) => {
          this.addToPage($(content).find('.words')[0], row);
        });
      },
      error: function(){
        console.log('error!');
      }
    }).done( (result) => {
      console.log('Request sent');
    });
  }

  addToPage(parent, data) {
    debugger
    let tr = document.createElement('tr');
    tr.className = 'word';
    tr.dataset.id = data['id'];
    for (let key in data) {
      let td = document.createElement('td');
      if (key == 'word_english') td.className = 'word-english';
      if (key == 'word_russian') td.className = 'word-russian';
      td.innerHTML = data[key];
      tr.appendChild(td);
    }
    let closeBtn = document.createElement('td')
    closeBtn.className = "word-close";
    closeBtn.innerHTML = 'x';
    closeBtn.addEventListener('click', this.removeWord.bind(this));
    tr.appendChild(closeBtn);

    parent.appendChild(tr);
  }

  removeWord(e) {
    // Сделать полифил для remove() в IE11-
    this.removeFromBD(e);
    this.removeFromPage(e);
  }

  removeFromBD(e) {
    $.ajax({
      url: "api/data.php",
      type: "POST",
      data: {
        'action': 'remove',
        'id': e.target.closest('.word').dataset.id
      },
      success: (data) => {
        // drawTable(JSON.parse(data));
      }
    }).done( (result) => {
      console.log('Request sent');
    });
  }

  removeFromPage(e) {
    e.target.closest('.word').remove();
  }

}

export default Table;