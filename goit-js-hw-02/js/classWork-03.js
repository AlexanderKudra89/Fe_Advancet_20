const heroName = 'Hulk';
const heroColor = 'green';
const heroRealName = 'Benner';

const hulk = {
  name: 'Hulk',
  color: 'green',
  realName: 'Benner',
};

const mickyMouse = {
  name: 'Micky',
  color: 'Black',
  realName: 'Micky',
};

const guffy = {
  name: 'Guffy',
  color: 'Black',
  realName: 'Guffy',
};

const dreamTeam = [hulk, mickyMouse, guffy];

function getHerosByColor(color) {
  let result = [];

  for (let hero of dreamTeam) {
    if (hero.color === color) {
      result.push(hero);
    }
  }
  return result;
}

console.log(getHerosByColor('Black'));
////////////////////////////////////////////////////////
function getHeroNameAndRealName(hero) {
  return console.log(`name: ${hero.name} and real-name: ${hero.realName}`);
}

getHeroNameAndRealName(hulk);
getHeroNameAndRealName(guffy);
getHeroNameAndRealName(mickyMouse);
////////////////////////////////////////////////////
const totalPrice = 100;
const limit = 150;

// const cart = {
//   storeName: 'Nike',
//   totalPrice: totalPrice,
//   limit: limit,
// };

// es6 sintax

// const cart = {
//   storeName: 'Nike',
//   totalPrice,
//   limit,
// };
