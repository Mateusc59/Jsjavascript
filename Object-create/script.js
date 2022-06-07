"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
// 1.New{} is created
// 2.function is called, this = {}
// 3.{} linked to prototype
// 4. function autmatically return {}
const mathieu = new Person("Mathieu", 1990);
console.log(mathieu);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log("Hey there 😎 ");
};

Person.hey();

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, mathieu.species);
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

console.log(jonas.__proto__);
//Object.protoype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
const arr = [3, 4, 5, 1, 9, 8, 4, 4, 5, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((X) => X + 1);

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

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
sarah.init("sarah", 1979);
sarah.calcAge();
