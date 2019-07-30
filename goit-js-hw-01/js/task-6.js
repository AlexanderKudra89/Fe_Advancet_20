let input;
let total = 0;

while () {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  total += input;
}

if (total) {
  alert(`Общая сумма чисел равна: ${total}`);
}

