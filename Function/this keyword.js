"use strict";

let person = {
  name: "john",
  age: 24,
  profession: "software",
  sayhi: function () {
    return `hi my name ${this.name}, my age is ${this.age}`;
  },
  candrive() {
    return this.age >= 18 ? "yes" : "no";
  },
};

console.log(person.sayhi());
console.log(person.candrive());

// call a function within a context of object

const john = {
  age: 35,
  gender: "M",
  weight: 78,
  height: 177.8,
};
const sarah = {
  age: 32,
  gender: "F",
  weight: 65,
  height: 177.8,
};

const calcBmi = function () {
  return this.weight / (this.height / 100) ** 2;
};

const calcBmr = function () {
  if (this.gender === "M") {
    return 66.47 + 13.75 * this.weight + 5.003 * this.height - 6.755 * this.age;
  } else {
    return 655.1 + 9.563 * this.weight + 1.85 * this.height - 4.676 * this.age;
  }
};

console.log(calcBmi.call(john));
console.log(calcBmr.call(sarah));
console.log(calcBmr.call(john));

// bind

const johnbmi = calcBmi.bind(john);
const sarabmi = calcBmi.bind(sarah);

console.log(johnbmi());
console.log(sarabmi());
