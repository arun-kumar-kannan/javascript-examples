"use strict";

console.log("Greater than operators");
console.log(10 > 20);
console.log(20.01 > 20);
console.log(false > true);
console.log("11" > 10);

console.log("Lesser than operators");
console.log(10 < 20);
console.log(20.01 < 20);
console.log(false < true);
console.log("11" < 10);

console.log("Lesser than equal to operators");
console.log(9 <= 9);
console.log("10" <= 10);
console.log(true >= false);

// Strict Releational Operator

var x = "10";
var y = 12;

var lte = typeof x === typeof y && x <= y;
console.log(typeof x === typeof y);
console.log(x <= y);

console.log(lte);

// in Operator
console.log("In Operator");

var user = {
  name: "arun",
  designation: "sr.developer",
};
console.log("name" in user);

console.log("age" in user);
