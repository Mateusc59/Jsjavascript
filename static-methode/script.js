"use strict";

const account = {
  owner: "Jonas",
  movements: [200, 530, 130, 324],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
