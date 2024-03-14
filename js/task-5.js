function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBody = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", getColorBody);

function getColorBody() {
  const randomColor = getRandomHexColor() ;
  colorBody.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

