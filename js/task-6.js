function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputNum = document.querySelector("[type='number']");

const create = document.querySelector("button[data-create]");
const remove = document.querySelector("button[data-destroy]");

const box = document.querySelector("#boxes");


create.addEventListener("click", btnCreate);
remove.addEventListener("click", destroyBoxes);





function btnCreate() {
  if (inputNum.value <= 100) {
    createBoxes(inputNum.value);
} else {
  alert("Your number more 100");
  }
  inputNum.value = "";
}

function destroyBoxes() {
  box.innerHTML = "";
  inputNum.value = "";
}


function createBoxes(amount) {
  let params = 30;
  const arr = [];
  for (let i = 0; i < amount; i++) {
    const square = `<div class="square" style="width: ${params}px; height: ${params}px; background-color:${getRandomHexColor()}"></div></div>`;
    params +=  10;
    arr.push(square);
  }
  box.innerHTML = ("beforeend", arr.join(""));
} 

