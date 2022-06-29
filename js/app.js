const inputText = document.getElementById("input");
const buttonOption = document.querySelectorAll("button");
const levelInput = document.getElementById("level");
const outputWindow = document.getElementById("output");

const encryptText = (input, level) => {
  let letter = "";
  let inputArray = input.split("");
  inputArray.forEach((char) => {
    letter += String.fromCharCode(char.charCodeAt(0) + level);
  });
  outputWindow.textContent = letter;
  level = 0;
};
const decryptText = (input, level) => {
  let letter = "";
  let inputArray = input.split("");
  inputArray.forEach((char) => {
    letter += String.fromCharCode(char.charCodeAt(0) - level);
  });
  outputWindow.textContent = letter;
  level = 1;
};

const getOptipon = (e) => {
  e.preventDefault();
  let input = inputText.value;
  let action = e.target.id;
  let level = parseInt(levelInput.value);
  if (input != " ") {
    if (action === "encrypt") encryptText(input, level);
    else decryptText(input, level);
  } else {
    confirm("Error! Empty input!");
    return;
  }
};

buttonOption.forEach((button) => (button.onclick = getOptipon));
