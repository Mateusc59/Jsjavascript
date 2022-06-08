"use strict";

// 1 - Public Fields
// 2 - Private Fields
// 3 - Public methods
// 4 - Private methods
// (There is also the static version)

class Account {
  // 1 - Public fields (Instances)
  local = navigator.language;

  //2 - Private Fields (Instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //Protected Properties
    //this._movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3 - Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
      return this;
    }
  }

  static helper() {
    console.log("helper");
  }

  // 4 - Private methods
  //#approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("jonas", "EUR", 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(50);
//acc1._approveLoan(300);
acc1.requestLoan(1000);
acc1.getMovements();
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

//console.log(acc1.#pin);
//Using _ mean is wrong to used that outside the property
//acc1._movements.push(245)

//console.log(acc1.#movements);

//chaining
acc1.deposit(300).deposit(500).withdraw(34).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
