const сontrySelection = prompt('Веедите страну доставки');
const chinaCredits = 100;
const chileCredits = 250;
const australiaCredits = 170;
const indiaCredits = 80;
const jamaicaCredits = 120;
let message;

switch (сontrySelection.toLowerCase()) {
  case 'китай':
    message = `Доставка в Китай будет стоить ${chinaCredits} кредитов.`;
    break;

  case 'чили':
    message = `Доставка в Чили будет стоить ${chileCredits} кредитов.`;
    break;

  case 'австралия':
    message = `Доставка в Австралию будет стоить ${australiaCredits} кредитов.`;
    break;

  case 'индия':
    message = `Доставка в Индию будет стоить ${indiaCredits} кредитов.`;
    break;

  case 'ямайка':
    message = `Доставка в Ямайку будет стоить ${jamaicaCredits} кредитов.`;
    break;

  default:
    alert('В вашей стране доставка не доступна.');
}

console.log(message);
