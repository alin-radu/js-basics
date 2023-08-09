'use strict';

// Object.create()

// Constructor Functions
// const Car = function (maker, speed) {
//   this.maker = maker;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
// };

// Car.prototype.dataCar = function () {
//   console.log(`DATA CAR: ${this.maker} going at ${this.speed}km/h`);
// };

// // static method
// Car.color = function () {
//   console.log('red');
// };

// const bmw = new Car('BMW', 120);

// console.log(bmw);

// Car.color();

// bmw.dataCar();
// bmw.accelerate();
// bmw.dataCar();
// bmw.brake();
// bmw.dataCar();

//////////////////////////////////////////////// get&set for object literals
// const account = {
//   owner: 'Jonas',
//   movements: [100, 200, 300],
//   get latest() {
//     return this.movements[this.movements.length - 1];
//   },
// };

// console.log(account);

// Classes

//////////////////////////////////////////////// 1.
// // class expression
// const Person = class {};
// // class declaration
// class Person {}

//////////////////////////////////////////////// 2.
// // getters&setters
// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   get calcAge() {
//     return 2021 - this.birthYear;
//   }

//set a property that already exist
// set firstName(name) {
//   console.log('name', name);
//   if (!name.includes(' ')) this._firstName = name;
//   else alert(`${name} is not a full name.`);
// }
// get firstName() {
//   return this._firstName;
// }
// }
// const jessica = new Person('Jessica', 1991);
// console.log(jessica);

//////////////////////////////////////////////// 3.
// static methods

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthDay = birthYear;
//   }
//   // set a static method on a class
//   static hey() {
//     console.log('red');
//   }
// }

// const jessica = new Person('Jessica', 1991);

//////////////////////////////////////////////// 4.
// // inheritance between Classes in Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I am study ${this.course}`);
// };

// const mike = new Student('Mike', 1991, 'Computer Science');

//////////////////////////////////////////////// 5.
// // chalenge#3
// const Car = function (maker, speed) {
//   this.maker = maker;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
// };

// Car.prototype.dataCar = function () {
//   console.log(`DATA CAR: ${this.maker} going at ${this.speed}km/h`);
// };

// const EV = function (maker, speed, charge) {
//   Car.call(this, maker, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeTo = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed = this.speed * 1.2;
//   this.charge = this.charge - 1;
//   console.log(
//     `${this.maker} is going with ${this.speed}, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 99);

// tesla.dataCar();

//////////////////////////////////////////////// 6.
// // inheritance between Classes in Classes
// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   helloPerson() {
//     console.log(
//       `From Constructor. Hei I am ${this.firstName} and I have ${this.calcAge} years.`
//     );
//   }

//   // get
//   // get calcAge() {
//   //   return 2021 - this.birthYear;
//   // }

//   // set a property that already exist
//   // set firstName(name) {
//   //   if (!name.includes(' ')) this._firstName = name;
//   //   else alert(`${name} is not a full name.`);
//   // }
//   // get firstName() {
//   //   return this._firstName;
//   // }

//   // static method
//   static hey() {
//     console.log(`Secret - Hey there, I am ${this.firstName}`);
//   }
// }
// const jessica = new Person('Jessica', 1991);

// class Student extends Person {
//   constructor(firstName, birthYear, course) {
//     super(firstName, birthYear);
//     this.course = course;
//   }

//   introduceStudent() {
//     console.log(`Hei I am ${this.firstName} and I have ${this.calcAge} years.`);
//   }
// }

// const mike = new Student('Mike', 1991, 'JS course');

// mike.introduceStudent();

// console.log(mike);

//////////////////////////////////////////////// 6.
// inheritance between Classes in Object.create()
// const Person = {
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },
//   helloPerson() {
//     console.log(
//       `From Constructor. Hei I am ${this.firstName} and I have ${this.calcAge} years.`
//     );
//   },
// };

// const Student = Object.create(Person);

// //new method on Student
// Student.party = function () {
//   console.log(`I am ${this.firstName} and I like partys.`);
// };

// //method polimorphism, child class can overwritte parents methods
// Student.init = function (firstName, birthYear, course) {
//   Person.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// const steven = Object.create(Person);
// const mike = Object.create(Student);

// console.log('stevenPerson - ', steven);
// console.log('mikeStudent - ', mike);

// mike.party();

// mike.init('Mike', 1991);

// mike.party();

//////////////////////////////////////////////// 7.
//classes another class example
