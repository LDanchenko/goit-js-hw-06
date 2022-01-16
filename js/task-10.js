const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const overlayDiv = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const inputAmount = document.querySelector('#controls > input');
  if (!inputAmount.value) {
    alert('Empty counter');
  } else {
    // destroyBoxes();
    overlayDiv.append(...createBoxes(inputAmount.value));
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const divArray = [];
  const size = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.height = `${size + i * 10}px`;
    div.style.width = `${size + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    divArray.push(div);
  }
  return divArray;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  overlayDiv.innerHTML = '';
}
