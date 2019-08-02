const credits = 23580;
const pricePerDroid = 3000;
let numberOfDroids = prompt(
  'На вашем счету 23580 кредитов. Стоимость одного дроида 3000 кредитов. Введите количество дроидов которое хотите приобрести',
);
let totalPrice = pricePerDroid * numberOfDroids;

if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits -
      totalPrice}.`,
  );
}
