"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //Protected Properties
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
    }
  }
}

const acc1 = new Account("jonas", "EUR", 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(50);
acc1.approveLoan(300);
acc1.requestLoan(1000);
acc1.getMovements();
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);

//Using _ mean is wrong to used that outside the property
//acc1._movements.push(245)
