$(document).ready(function(){

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
  }

  $(window).on('scroll', changeActiveItemOnScroll);
  $('.contacts__submit').on('click', sendForm);


  function changeActiveItemOnScroll() {
    var currentItem = defineCurrentItem($('.menu__link_active'));

    $('.menu__link').each(function() {
      if (!$(this).hasClass('menu__link_active')) return true;
      $(this).removeClass('menu__link_active');
      return false;
    });

    var str = 'a[href="#' + $(currentItem).attr('data-item') + '"]';
    $(str).addClass('menu__link_active');
  }

  function defineCurrentItem(currentItem) {
    $('.js-menu-section').each(function (index, elem) {
      var top = elem.getBoundingClientRect().top;

      if (top > $(window).height()) {
        return true;
      } else if (top > 0) {
        currentItem = elem;
        return false;
      } else {
        currentItem = elem;
      }
    });

    return currentItem;
  }

  function sendForm(e) {
    e.preventDefault(); //STOP default action

    var form = $('.contacts__form')
    var formName = form.attr('name');

    if (formName == 'send-email') {
      $.ajax({
        url: form.attr('action'),
        type: 'POST',
        data: form.serialize(),
        success: function(data) {
          form.find('.contacts__input, .contacts__textarea').val('');
          // console.log(data);
          showMsgAfterSending('Спасибо, ваше письмо отправлено');
        },
        error: function(data) {
          showMsgAfterSending('К сожалению ваше письмо не удалось отправить. Попробуйте еще раз');
        }
      });
    }
  }

  function showMsgAfterSending (message) {
    $('.contacts__after-sending').text(message);
  }

});
