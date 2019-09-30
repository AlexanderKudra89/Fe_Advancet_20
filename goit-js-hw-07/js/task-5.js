'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function addName(event) {
  output.textContent = event.currentTarget.value;
  if (!input.value.length) output.textContent = 'незнакомец';
}

input.addEventListener('input', addName);
