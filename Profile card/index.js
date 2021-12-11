const clc = document.querySelector(".cardCover__cancel");
const arr = document.querySelector(".card__arrContent");
const cardCover = document.querySelector(".cardCover");

arr.addEventListener("click", () => {
  arr.classList.add("active__arr");
  if (cardCover.classList.contains("off")) {
    cardCover.classList.remove("off");
    cardCover.classList.add("active");
  }
});

clc.addEventListener("click", () => {
  arr.classList.remove("active__arr");
  if (cardCover.classList.contains("active")) {
    cardCover.classList.remove("active");
    cardCover.classList.add("off");
  }
});
