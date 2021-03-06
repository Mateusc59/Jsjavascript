"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

//Linking prototypes
Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "computer science");
console.log(mike);

mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
//Fix the redirection Student to Student
Student.prototype.constructor = Student;

// Should redirect to Student not Person
console.dir(Student.prototype.constructor);
