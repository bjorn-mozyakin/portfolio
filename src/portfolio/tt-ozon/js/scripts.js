// На странице не много интерактивности,
// поэтому решил не подключать JQuery, а
// обойтись стандартным JS

document.addEventListener("DOMContentLoaded", ready);


function ready() {
  var inpt = document.querySelector('.search__input');
  var inptIcon = document.querySelector('.search__icon');

  inptIcon.addEventListener('click', handleClickSearch);
  inpt.addEventListener('blur', handleBlurSearch);
  document.querySelector('.contacts__line').addEventListener('click', handleClickContacts);


  function handleClickSearch(e) {
    inpt.focus();
    inpt.classList.add('search__input__focused');
  }

  function handleBlurSearch(e) {
    if (e.target.classList.contains('.search__icon')) return;

    inpt.classList.remove('search__input__focused');
    inpt.value = '';
  }

  function handleClickContacts(e) {
    if (e.target.classList.contains('contacts__icon') || e.target.classList.contains('contacts__text')) {
      document.querySelector('.contacts__icon').classList.toggle('contacts__icon__rotated');
      document.querySelector('.contacts__list').classList.toggle('contacts__is__shown')
    }
  }
}