'use strict';

const counter = document.querySelector('#value');
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]',
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]',
);

let value = 0;

function increment() {
  value += 1;
  return (counter.innerHTML = value);
}

function decrement() {
  value -= 1;
  return (counter.innerHTML = value);
}

buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);
