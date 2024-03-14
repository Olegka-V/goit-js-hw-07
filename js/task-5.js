function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBody = document.querySelector("body");
const button = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

button.addEventListener("click", getColorBody);

function getColorBody() {
  colorBody.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}

