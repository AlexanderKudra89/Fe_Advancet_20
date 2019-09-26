'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsLi = document.querySelector('#ingredients');

ingredients.map(item => {
  const itemLi = document.createElement('li');
  itemLi.insertAdjacentHTML('afterbegin', item);
  ingredientsLi.appendChild(itemLi);
});

console.log(ingredientsLi);
