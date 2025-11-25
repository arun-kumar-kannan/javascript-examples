"use strict";

console.log("Equality Operators");

console.log(10 == 10);
console.log(10 == "10");
console.log(1 == true);
console.log(0 == true);
console.log("Waffle" == "waffle");
console.log(null == undefined);

var redcars = {
  color: "red",
  id: 1,
};
var somecars = {
  color: "red",
  id: 1,
};

somecars = redcars;

console.log(redcars == somecars);

console.log("Strict Equality or Identity Equality");

console.log(20 === "20");
console.log(1 === true);
console.log(null === undefined);

console.log("Inequality Operator");

console.log(10 != 20);
console.log("20" != 20);
console.log(null != undefined);
console.log(1 != true);

console.log("Strict Inequality or NonIdentity Equality");

console.log(10 !== 20);
console.log("20" !== 20);
console.log(null !== undefined);
console.log(1 !== true);
