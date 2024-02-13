"use strict";
const toggleButton = document.querySelector(".toggle");
const closeButton = document.querySelector(".close");
const closeButton2 = document.querySelector(".close2");
const closeButton3 = document.querySelector(".close3");
const logInCard = document.querySelector(".login_card");
const singUpCard = document.querySelector(".signup_card");

toggleButton.addEventListener("click", function () {
  logInCard.classList.toggle("hidden");
  closeButton2.style.transform = "scale(12)";
  closeButton3.style.transform = "scale(12)";
  singUpCard.classList.toggle("hidden");
});
closeButton.addEventListener("click", function () {
  singUpCard.classList.toggle("hidden");
  logInCard.classList.toggle("hidden");
  closeButton2.style.transform = "scale(0)";
  closeButton3.style.transform = "scale(0)";
});
