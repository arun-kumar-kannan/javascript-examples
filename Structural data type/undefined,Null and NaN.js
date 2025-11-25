"use strict";

// undefined absence of value/has not be assigned

var car;
console.log(car);
console.log(typeof car);

var user = {
  id: 1,
  name: "Arun",
};
console.log(user.age);

var fruit = ["apple", "kiwi"];
console.log(fruit[2]);

// Null is used to intentionally denote the absence of value

var cost = null;
var cart = null;
console.log(cost);

// NaN not a number / trying to compute a value that is feasible

var brand = "honda" - 2021;

console.log(brand);
console.log(typeof brand);
console.log(Number.isNaN(brand));
