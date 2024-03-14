const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) =>
{ nameOutput.textContent =  nameInput.value.trim() !== "" ? event.currentTarget.value : "Anonymous" });