"use strict";

//class expression or
// const PersonCl = class {};
//or
//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}, what's up ?`);
  }

  get age() {
    return 2022 - this.birthYear;
  }
  // set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes("")) this._fullName = name;
    else alert(`${name}is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
  //static method
  static hey() {
    console.log("Hey there 😎 ");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Holl", 1994);
console.log(jessica);

jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//  console.log(`Hey ${this.firstName}, what's up?`);
//};

jessica.greet();
// 1. classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl("walter white", 1995);
PersonCl.hey();
