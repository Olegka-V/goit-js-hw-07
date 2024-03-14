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
  if (inputNum.value < 100) {
    box.innerHTML = "";
    createBox(inputNum.value);
} else {
  alert("Your number more 100");
  }
  inputNum.value = "";
}

function destroyBoxes() {
  box.innerHTML = "";
  inputNum.value = "";
}


function createBox(amount) {
  let params = 30;
  const arr = [];
  for (let i = 0; i < amount; i++) {
    params +=  10;
    const square = `<div class="square" style="width: ${params}px; height: ${params}px; background-color:${getRandomHexColor()}"></div></div>`;
    arr.push(square);
  }
  box.insertAdjacentHTML("beforeend", arr.join(""));
} 


console.dir(box);