// const decrementButton = document.querySelector('[data-action="decrement"]');
// const incrementButton = document.querySelector('[data-action="increment"]');
// const valueOutput = document.querySelector('#value');

// const onButtonIncrementClick = () => {
//   valueOutput.textContent = Number(valueOutput.textContent) + 1;
// };
// const onButtonDecrementClick = () => {
//   valueOutput.textContent = Number(valueOutput.textContent) - 1;
// };

// incrementButton.addEventListener('click', onButtonIncrementClick);
// decrementButton.addEventListener('click', onButtonDecrementClick);

/*****************или***************/

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueOutput = document.querySelector('#value');
let counterValue = 0;

const onButtonIncrementClick = () => {
  counterValue += 1;
  valueOutput.textContent = counterValue;
};
const onButtonDecrementClick = () => {
  counterValue -= 1;
  valueOutput.textContent = counterValue;
};

incrementButton.addEventListener('click', onButtonIncrementClick);
decrementButton.addEventListener('click', onButtonDecrementClick);
