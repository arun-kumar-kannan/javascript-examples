"use strict";
let temperature = 25;

let feelTemp = temperature >= 25 ? "warm" : "cold";

console.log(feelTemp);

//

let cost = 2000;

let discount = cost < 1000 ? 0 : 10;

let totalCost = cost - cost * (discount / 100);

console.log(`orginal cost ${cost}`);
console.log(`with discount ${totalCost}`);
//

let today = new Date().getDay();

let day =
  today === 0
    ? "sunday"
    : today === 1
    ? "monday"
    : today === 2
    ? "tuesday"
    : today === 3
    ? "wed"
    : today === 4
    ? "thur"
    : today === 5
    ? "fri"
    : today === 6
    ? "sat"
    : "not a real day";

console.log(day);

let a = 6;
let b = 5;
let x = a >= 10 ? a * b : a / b;
console.log(x);
