"use strict";

var fruits = ["apple", "kiwi", "banana", "strawberry"];

console.log(fruits instanceof Array);
console.log(Array.isArray(fruits));

console.log(`i love ${fruits[0]}`);
console.log(`i also like ${fruits[1]}`);
console.log(fruits.length);
console.log(fruits.length - 1);

console.log(`Let's have a ${fruits[fruits.length - 1]} milkshake`);

// add in the last

fruits.push("Mango");
fruits.push("Orange");

// remove the last one
fruits.pop();

// modify

fruits[4] = "avacodo";
fruits[7] = "amala";

console.log(fruits[6]);
console.log(fruits.length);

// nested array

var users = [
  [1, "john"],
  [2, "sara"],
  [3, "fox"],
  [4, "mike"],
];
console.log(users[2]);

console.log(users[3][1]);

// collection of object inside the array

var user = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "john",
  },
  {
    id: 3,
    name: "john",
  },
  {
    id: 4,
    name: "john",
  },
];

console.log(user[2]["name"]);

user[4] = {
  id: 5,
  name: "max",
};

user.push({
  id: 6,
  name: "max",
});
user.push({
  id: 6,
  name: "max",
});

user.pop();

console.log(user);

// override

// var admin = user;

// to copy an array * spread operator *;
var admin = [...user];

admin[2] = {
  id: 3,
  name: "max",
};

console.log(user);
console.log(admin);

// ------------------------------------------------------

var bestsellers = [
  "Contact",
  "Deception Point",
  "Digital Fortress",
  "Jurassic Park",
  "Shantaram",
];

// Notice the .toString() at the end of the variable name bestsellers. This is a method, a special feature that converts your array into a comma separated list as a String

console.log("bestseller: ", bestsellers.toString());

// add
bestsellers.push("Freakonomics");
// modify
bestsellers[1] = "The Lord of the Rings";

console.log(bestsellers);
