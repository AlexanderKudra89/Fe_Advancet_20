const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
const userToDelete = 'Ajax';
const userToInsert = 'Kong';
const insertBefore = 'Jay';

users.shift();
console.log(users);
/////////////////////////////////////////////////////////////

users.pop();
console.log(users);
/////////////////////////////////////////////////////////////

users.unshift('Lux');
console.log(users);
/////////////////////////////////////////////////////////////

users.push('Jay', 'Kiwi');
console.log(users);
/////////////////////////////////////////////////////////////

const deleteUserToDelete = users.indexOf(userToDelete);
users.splice(deleteUserToDelete, 1);
console.log(users);
/////////////////////////////////////////////////////////////

const inputInsertBefore = users.indexOf(insertBefore);
users.splice(inputInsertBefore, 0, userToInsert);
console.log(users);
