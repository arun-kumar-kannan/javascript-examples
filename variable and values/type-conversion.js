"use strict";

// String Constructor

let greetings = 20;
let message = 23;
let output = String(greetings) + String(message);
console.log(output);

// Number constructor

let orderTicket = [
  { id: "2b0976", name: "abc", cost: "2.5" },
  { id: "2b0976", name: "abc", cost: "4.5" },
];

let totalCost = Number(orderTicket[0].cost) + Number(orderTicket[1].cost);
console.log(totalCost);

// Array to String

let color = ["red", "blue", "green"];

console.log(String(color));
console.log(color.toString());
console.log(`${color}`);
