const inputText = document.getElementById("input");
const buttonOption = document.querySelectorAll("button");
const levelInput = document.getElementById("level");
const outputWindow = document.getElementById("output");
const notification = document.getElementById("notification");

/**
 * Encrypts the @param {String} based on the specified @param {level}
 * @param {String} input is a string/message to encrypt
 * @param {number} level is the encryption level
 */
const encryptText = (input, level) => {
  let inputArray = input.split("");
  inputArray.forEach((char) => {
    outputWindow.value += String.fromCharCode(char.charCodeAt(0) + level);
  });
  notification.textContent = `Your message as been encryted by level ${level}`;
  level = 0;
};

/**
 * Decrypts the @param {String} based on the specified @param {level}
 * @param {String} input is a string/message to decrypt
 * @param {number} level is the decryption level
 */
const decryptText = (input, level) => {
  let inputArray = input.split("");
  inputArray.forEach((char) => {
    outputWindow.value += String.fromCharCode(char.charCodeAt(0) - level);
  });
  notification.textContent = `Your message as been decryted by level ${level}`;
  level = 1;
};

const getOptipon = (e) => {
  e.preventDefault();
  outputWindow.value = "";
  let input = inputText.value;
  let action = e.target.id;
  let level = parseInt(levelInput.value);
  if (input.trim().length) {
    if (action === "encrypt") encryptText(input, level);
    else decryptText(input, level);
  } else {
    confirm("Error! Empty input!");
    return;
  }
};

buttonOption.forEach((button) => (button.onclick = getOptipon));
