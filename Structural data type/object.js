"use strict";

var sentinel = {
  name: "Sentinel\u{2122}",
  employeeCount: 50,
  city: "Tokyo",
  country: "Japan",
  islisted: false,
};

console.log(typeof sentinel);

console.log(sentinel.name);

// var names = "employeeCount";
// console.log(sentinel[names]);

console.log(sentinel["employeeCount"]);

// add and modify new property to the object

sentinel.stocksUpdate = 120;
sentinel.islisted = true;

delete sentinel.city;

console.log(sentinel);

// object constructor-------------*****

var currencies = new Object();
currencies["Japan"] = "yen";
currencies["USA"] = "US dollars";

console.log(
  `The currency of ${sentinel.country} is ${currencies[sentinel.country]}`
);

// nested object-------------------****

var sentinel = {
  name: "Sentinel\u{2122}",
  employeeCount: 50,
  location: {
    city: "Tokyo",
    country: "Japan",
  },
  islisted: false,
};

console.log(sentinel);

var john = {
  Name: "John Mockery",
  Age: 23,
  Designation: "Sr.designer",
  Organization: sentinel.name,
  Address: sentinel.location,
};

var sara = {
  Name: "Sara",
  Age: 26,
  Designation: "Ux.Architect",
  Organization: sentinel.name,
  Address: sentinel.location,
};

john.Address = { city: "osaka", country: "japan" };
console.log(sara);
console.log(john);

var fruit = "Apple";
var pie = fruit;
// ******* only use variable when you first initialise
pie = "walnut";
console.log(`fruit: ${fruit}`);
console.log(`pie: ${pie}`);
// workbook
var user = {
  name: "Michelle Roberts",
  age: 28,
  location: {
    city: "New York",
    country: "US",
  },
};
user.isAdmin = false;

console.log("User: ", user.name);
console.log("City: ", user.location.city);
console.log("Age: ", user.age);
console.log("Is User an Administrator?", user.isAdmin);
