'use srtict';

const fontSize = document.querySelector('#font-size-slider');
const text = document.querySelector('#text');

function changeFontSize() {
  text.style.fontSize = fontSize.value + 'px';
}

fontSize.addEventListener('input', changeFontSize);
