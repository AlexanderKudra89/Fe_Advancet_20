let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  numbers.push(Number(input));
} while (input !== null);
for (let number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна [${total}]`);
