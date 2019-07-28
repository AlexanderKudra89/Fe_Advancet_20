let cost;
let name;
const сontrySelection = prompt('Веедите страну доставки');

switch (сontrySelection.toLowerCase()) {
  case 'Китай':
    cost = 100;
    name = 'Китай';
    break;

  case 'Чили':
    cost = 250;
    name = 'Чили';
    break;

  case 'Австралия':
    cost = 170;
    name = 'Австралия';
    break;

  case 'Индия':
    cost = 80;
    name = 'Индия';
    break;

  case 'Ямайка':
    cost = 120;
    name = 'Ямайка';
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

if (сontrySelection === null) {
  console.log('Отменено пользователем!');
}
if (name != undefined) {
  console.log(`Доставка в ${name} будет стоить ${cost} кредитов`);
}
