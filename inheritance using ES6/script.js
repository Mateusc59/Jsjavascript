"use strict";

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes("")) this._fullName = name;
    else alert(`${name} is not a fullname !`);
  }

  get fullName() {
    return this._fullName;
  }

  //static method
  static hey() {
    console.log(`Hey There 😎`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first !
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear}`);
  }
}

const martha = new StudentCl("martha Jones", 2012, "computer science");
martha.introduce();
martha.calcAge();
