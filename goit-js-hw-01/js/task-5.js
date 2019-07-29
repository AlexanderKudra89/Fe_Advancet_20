const сontrySelection = prompt('Веедите страну доставки');
const chinaCredits = 100;
const chileCredits = 250;
const australiaCredits = 170;
const indiaCredits = 80;
const jamaicaCredits = 120;
const china = 'Китай';
const chile = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';
let message;

switch (сontrySelection) {
  case china:
    message = `Доставка в ${china} будет стоить ${chinaCredits} кредитов.`;
    break;

  case chile:
    message = `Доставка в ${chile} будет стоить ${chileCredits} кредитов.`;
    break;

  case australia:
    message = `Доставка в ${australia} будет стоить ${australiaCredits} кредитов.`;
    break;

  case india:
    message = `Доставка в ${india} будет стоить ${indiaCredits} кредитов.`;
    break;

  case jamaica:
    message = `Доставка в ${jamaica} будет стоить ${jamaicaCredits} кредитов.`;
    break;

  default:
    alert('В вашей стране доставка не доступна.');
}

console.log(message);
