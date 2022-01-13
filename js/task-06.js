const textInput = document.querySelector('#validation-input');
const inputSymbolNumber = Number(textInput.getAttribute('data-length'));

const isValidSymbolNumbers = textInputValue => {
  if (textInputValue.length === inputSymbolNumber) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
};

textInput.addEventListener('blur', event => {
  isValidSymbolNumbers(event.currentTarget.value);
});
