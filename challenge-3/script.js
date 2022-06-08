"use strict";

// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
console.log(EV);

EV.prototype = Car.prototype;
console.log(Car);

EV.prototype.accelerate = function () {
  console.log(
    `This ${
      this.make
    } going at ${(this.speed += 20)} km/h with a charge of ${(this.charge -= 1)} %`
  );
};

EV.prototype.brake = function () {
  console.log(
    `This ${this.make} going at ${(this.speed -= 5)} km/h with a charge of ${
      this.charge
    } %`
  );
};

EV.prototype.chargeBattery = function (chargeTo) {
  console.log(
    `This renault has ${(this.charge = chargeTo =
      this.charge)} % of battery left`
  );
};

const Renault = new EV("Renault", 100, 90);

const Tesla = new EV("Tesla", 120, 23);

console.log(Car);
console.log(EV);
console.log(Tesla);
Tesla.accelerate();
Tesla.chargeBattery();
Tesla.accelerate();
Tesla.accelerate();
console.log(Tesla);
Renault.accelerate();
Renault.brake();
Renault.chargeBattery();
Renault.chargeBattery();
Renault.brake();
Renault.brake();
Renault.brake();
Renault.accelerate();
Renault.accelerate();
Renault.accelerate();
Tesla.accelerate();
Tesla.brake();
Tesla.accelerate();
Tesla.chargeBattery();
