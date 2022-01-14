const inputFontSize = document.querySelector('#font-size-control');
const outputSpan = document.querySelector('#text');
inputFontSize.addEventListener('input', event => {
  outputSpan.style.fontSize = event.currentTarget.value + 'px';
});
