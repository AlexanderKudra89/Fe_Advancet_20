const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
const userToDelete = 'Ajax';
const userToInsert = 'Kong';
const insertBefore = 'Jay';

users.shift();
console.log(users);

users.pop();
console.log(users);

users.unshift('Lux');
console.log(users);

users.push('Jay', 'Kiwi');
console.log(users);

users.splice(users.indexOf(userToDelete), 1);
console.log(users);

users.splice(users.indexOf(insertBefore), 0, userToInsert);
console.log(users);
