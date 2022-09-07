"use strict";
/*
class Person2 {
  #f;
  #l;
  constructor(f, l) {
    this.#f = f;
    this.#l = l;
  }
  fullname() {
    console.log(this.f + " " + this.l);
  }
}

let friend = new Person2("mari", "kvirkviya");
console.log(friend);
friend.fullname();
let Person = function (first, year) {
  this.name = first;
  this.year = year;
};

let mari = new Person("mari", 1999);
let koka = new Person("koka", 1998);
console.log(mari instanceof Person);
Person.prototype.Age = function () {
  console.log(2037 - this.year);
};
mari.Age();
console.log(mari.__proto__);
console.log(Person.prototype.constructor);
//EXERCISE 1 
let Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(`${make} going at ${speed} km/h`);
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
let bmw = new Car("bmw", 120);
let mercedes = new Car("mercedes", 95);
bmw.accelerate();*/
//setter / getter
//exercises 2
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}

let bmw = new Car("bmw", 120);
let mercedes = new Car("mercedes", 95);
console.log(bmw.speedUs);

console.log(bmw);
bmw.break();*/

//classes inheritance
/*
let Person = function (first, year) {
  this.name = first;
  this.year = year;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.year);
};

let Student = function (first, year, course) {
  Person.call(this, first, year);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(this.first + "hello my name is mari and i study proggraming");
};
let mike = new Student("mike", 2020, "CS");
console.log(mike);
mike.introduce();
mike.calcAge();
//exercise 3
let Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
let EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargBattery = function (chargeTo) {
  this.charge = chargeTo;
};
Car.prototype.accelarate = function () {
  this.speed += 20;

  console.log(`${this.make} is going `);
};
EV.prototype.accelarate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} with a charge of ${this.charge}`
  );
};
let tesla = new EV("tesla", 120, 49);
tesla.accelarate();
tesla.chargBattery(435);
console.log(tesla);

class Account {
  //private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }
  deposit(value) {
    this.#movements.push(value);
  }
  withdrawal(value) {
    this.#movements.push(-value);
  }
}
let acc1 = new Account("jonas", "eur", 1111);
console.log(acc1);
acc1.withdrawal(68);
acc1.deposit(468);
//EXERCISES 4
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}
class EV extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelarate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} with a charge of ${this.#charge}`
    );
    return this;
  }
}

let tesla = new EV("tesla", 120, 45);
tesla.accelarate().accelarate().chargBattery(57).accelarate(0);
console.log(tesla);
*/
/*
//emplyee tracking app
class Employee {
  constructor(fName, lName, years) {
    this.fName = fName;
    this.lName = lName;
    this.years = years;
  }
}
let mari = new Employee("mari", "kvirkviya", 25);
let koka = new Employee("koka", "kvirkviya", 35);
let arr = [mari, koka];
Employee.prototype.details = function () {
  return `my name is ${this.fName} i am working ${this.years}`;
};
arr.forEach((el) => {
  console.log(el.details());
});
*/
/*class Price {
  #count1 = 10;
  #count2 = 20;
  constructor(Item1, Item2) {
    this.Item1 = Item1;
    this.Item2 = Item2;
  }
  totalCost() {
    return this.#count1 * this.Item1 + this.#count2 * this.Item2;
  }
  get total() {
    return this.totalCost();
  }
}
let mari = new Price(2, 7);
//the same
console.log(mari.totalCost());
console.log(mari.total);
*/
// Return the output array, and ignore all non-op characters
/*let total = 0;
function solution(number) {
  if (number < 0) {
    return 0;
  } else {
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        total += i;
      } else if (i % 3 === 0 && i % 5 !== 0) {
        total += i;
      } else if (i % 5 === 0 && i % 3 !== 0) {
        total += i;
      }
    }
  }

  return total;
}

console.log(solution(4563));
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(solution(4563));*/
let alp = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};
let max = 0;
let max2 = 0;
let o = "";
function high(x) {
  x.split(" ").forEach((el) => {
    el.split("").forEach((el2) => {
      if (el2 !== " ") {
        max2 += alp[el2];
      }
    });
    if (max < max2) {
      max = max2;
      o = el;
    }
  });
  return o;
}

console.log(high("m u i w"));
