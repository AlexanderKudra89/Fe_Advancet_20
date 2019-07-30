let input;
let total = 0;

do {
  input = prompt('Введите число');

  if (input !== null) {
    input = Number(input);
    total += input;
  }
} while (input !== null);

alert(`Общая сумма чисел равна: ${total}`);
