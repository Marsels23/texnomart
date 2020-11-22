var modalLink = document.querySelector(".write-us");
var popup = document.querySelector(".write-us-modal");
var closePopup = popup.querySelector(".close-modal");

modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

closePopup.addEventListener("click", function (evt) {
    console.log("клик на крестик");
  evt.preventDefault();
  popup.classList.remove("modal-show");
});