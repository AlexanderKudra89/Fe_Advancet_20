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

switch (сontrySelection) {
  case china:
    console.log(`Доставка в ${china} будет стоить ${chinaCredits} кредитов`);
    break;

  case chile:
    console.log(`Доставка в ${chile} будет стоить ${chileCredits} кредитов`);
    break;

  case australia:
    console.log(
      `Доставка в ${australia} будет стоить ${australiaCredits} кредитов`,
    );
    break;

  case india:
    console.log(`Доставка в ${india} будет стоить ${indiaCredits} кредитов`);
    break;

  case jamaica:
    console.log(
      `Доставка в ${jamaica} будет стоить ${jamaicaCredits} кредитов`,
    );
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
