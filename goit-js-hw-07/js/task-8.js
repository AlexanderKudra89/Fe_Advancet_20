'use strict';

const input = document.querySelector('#controls input');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const newDiv = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxSize = 30;
  let step = 10;
  let boxes = [];

  function getNumber(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i <= amount; i += 1) {
    let box = document.createElement('div');
    box.style.backgroundColor = `rgb(${getNumber()},${getNumber()},${getNumber()})`;
    box.style.width = boxSize + i * step + 'px';
    box.style.height = boxSize + i * step + 'px';
    boxes.push(box);
  }
  return boxes;
}

render.addEventListener('click', function addBoxes() {
  newDiv.innerHTML = createBoxes(input.value).reduce((acc, item) => {
    acc = acc + item.outerHTML;
    return acc;
  }, '');
});

destroy.addEventListener('click', function destroyDiv() {
  newDiv.innerHTML = '';
  input.value = 0;
});
