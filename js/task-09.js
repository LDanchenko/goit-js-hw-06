const changeColorButton = document.querySelector('.change-color');
const outputSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  outputSpan.textContent = document.body.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
