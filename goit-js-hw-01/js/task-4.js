const credits = 23580;
const pricePerDroid = 3000;
let numberOfDroids = prompt(
  'На вашем счету 23580 кредитов. Стоимость одного дроида 3000 кредитов. Введите количество дроидов которое хотите приобрести',
);
let totalPrice = pricePerDroid * numberOfDroids;
let balance = credits - totalPrice;
let message;

if (numberOfDroids === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${balance}.`;
}

console.log(message);
