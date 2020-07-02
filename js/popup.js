var openform = document.querySelector(".contacts-button");
var popupshow = document.querySelector(".popup");
var closeform = popupshow.querySelector(".popup-close");
var popupform = popupshow.querySelector(".popup-form");
var loginfio = popupshow.querySelector(".popup-label"); 


openform.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupshow.classList.add("popup-show");
  loginfio.focus();
});

closeform.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupshow.classList.remove("popup-show");
});

popupform.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupshow.classList.contains("popup-show")) {
      evt.preventDefault();
      popupshow.classList.remove("popup-show");
    }
  }
});