const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

field.addEventListener('click', event => {
  const divCord = event.target.getBoundingClientRect();
  const divBall = ball.getBoundingClientRect();

  const xCord = event.clientX;
  const yCord = event.clientY;

  if (xCord < divCord.left + field.clientLeft + divBall.width) {
    ball.style.left = 0;
  } else if (xCord > divCord.right - field.clientLeft) {
    ball.style.left = field.clientWidth - ball.clientWidth + 'px';
  } else {
    ball.style.left =
      xCord - divCord.left - field.clientLeft - divBall.width / 2 + 'px';
  }

  if (yCord < divCord.top + field.clientTop + divBall.height) {
    ball.style.top = 0;
  } else if (yCord > divCord.bottom - field.clientTop - divBall.height) {
    ball.style.top = field.clientHeight - ball.clientHeight + 'px';
  } else {
    ball.style.top =
      yCord - divCord.top - field.clientTop - divBall.height / 2 + 'px';
  }
});
