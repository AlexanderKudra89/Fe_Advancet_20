let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  numbers.push(Number(input));

  for (let number of numbers) {
    total += number;
  }
} while (input !== null);

console.log(`Общая сумма чисел равна [${total}]`);
