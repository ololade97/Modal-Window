"use strict";

const showModal = document.querySelectorAll(".showModal");
const modalBox = document.querySelector(".modalBox");
const addHidden = document.querySelector(".modalBox");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", function () {
    modalBox.classList.remove("hidden");
  });
}

const mB = function () {
  modalBox.classList.add("hidden");
};

modalBox.addEventListener("click", mB);

//Close the modal box with the press of a key without the cursor
// keydown means at the press of a keyboard
document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key === "Escape" && !modalBox.classList.contains("hidden")) {
    mB();
  }
});
