const сountrySelection = prompt('Веедите страну доставки');
const chinaCredits = 100;
const chileCredits = 250;
const australiaCredits = 170;
const indiaCredits = 80;
const jamaicaCredits = 120;

if (сountrySelection === null) {
  console.log('Отменено!');
} else {
  switch (сountrySelection.toLowerCase()) {
    case 'китай':
      console.log(`Доставка в Китай будет стоить ${chinaCredits} кредитов.`);
      break;

    case 'чили':
      console.log(`Доставка в Чили будет стоить ${chileCredits} кредитов.`);
      break;

    case 'австралия':
      console.log(
        `Доставка в Австралию будет стоить ${australiaCredits} кредитов.`,
      );
      break;

    case 'индия':
      console.log(`Доставка в Индию будет стоить ${indiaCredits} кредитов.`);
      break;

    case 'ямайка':
      console.log(`Доставка в Ямайку будет стоить ${jamaicaCredits} кредитов.`);
      break;

    default:
      alert('В вашей стране доставка не доступна.');
  }
}
