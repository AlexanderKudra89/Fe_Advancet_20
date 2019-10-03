'use srtict';

const fontSize = document.querySelector('#font-size-slider');
const text = document.querySelector('#text');

function changeFontSize(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}

fontSize.addEventListener('input', changeFontSize);
