'use strict';

const Account = function(login, email) {
  this.login = login;
  this.email = email;
};

const mango = new Account('Mangozedog', 'mango@dog.woof');
const poly = new Account('Poly', 'poly@mail.com');

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo);
mango.getInfo();
poly.getInfo();
