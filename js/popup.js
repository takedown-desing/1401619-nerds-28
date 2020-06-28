(function (){
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var openPopupButton = document.querySelector('.contacts-button');
  var popup = document.querySelector('.popup');
  var closePopupButton = popup.querySelector('.popup-close');
  var form = popup.querySelector('.popup-form');
  var formFields = form.querySelectorAll('.popup-group input');
  var name = form.querySelector('.popup-group #username');
  var email = form.querySelector('.popup-group #email');
  var feedback = form.querySelector('.popup-group #message');
  var submitFormButton = form.querySelector('.popup-button');

  var isStorageSupport = true;
  var storageName = '';
  var storageEmail = '';
  var storageFeedback = '';

  var onPopupEscPress = function (evt) {
    if (evt.target.tagName !== 'INPUT' && evt.target.tagName !== 'TEXTAREA') {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();

        closePopup();
        }
      }
  };
   var openPopup = function () {
    popup.classList.remove('popup-hide');
    popup.classList.add('popup-show');

    if (storageName && storageEmail && storageFeedback) {
      name.value = storageName;
      email.value = storageEmail;
      feedback.value = storageFeedback;
    }

    name.focus();

    document.addEventListener('keydown', onPopupEscPress);
  }
})();