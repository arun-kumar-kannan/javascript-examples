"use strict";

let a = 20;
let b = 30;
let action = "Add";

switch (action) {
  case "Add":
    let add = a + b;
    console.log(add);
    break;
  case "Sub":
    let sub = a - b;
    console.log(sub);
    break;
  case "Mul":
    let multi = a * b;
    console.log(multi);
    break;

  default:
    throw new Error(`Invalid Error.....`);
}

//

let item = "kiwi";
let type;

switch (item) {
  case "apple":
  case "banana":
  case "kiwi":
  case "strawberry":
    type = "fruit";
    break;
  case "potato":
  case "tomoto":
  case "eggplant":
  case "chilli":
    type = "vegetables";
    break;
  default:
    throw new Error(`Invalid Error....`);
}
console.log(`${item} is a type of ${type} `);
