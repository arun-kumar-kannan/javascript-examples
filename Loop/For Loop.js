"use strict";

for (let x = 1; x <= 12; x = x + 1) {
  console.log(`value of ${x}`);
}

let sum = 0;
for (let x = 1; x <= 12; x = x + 1) {
  console.log(`value of ${x}`);
  //   sum = sum + x;
  sum += x;
}
console.log(`sum of 1-12: ${sum}`);

//
console.log();
//

const countDown = (count) =>
  count === -1 ? console.log(`we have lift off....`) : console.log(count);

for (let x = 10; x >= -1; x--) {
  countDown(x);
}

//
console.log();
//

const numArray = [
  {
    x: 0,
    y: 2,
  },
  {
    x: 21,
    y: 13,
  },
  {
    x: 32,
    y: 98,
  },
  {
    x: 10,
    y: 11,
  },
  {
    x: 32,
    y: 78,
  },
];

function multiNums(obj) {
  return obj.x * obj.y;
}

for (let n = 0; n < numArray.length; n++) {
  console.log(`${numArray[n].x}*${numArray[n].y}=${multiNums(numArray[n])}`);
}
//
console.log();
//

let fruit = ["Apple", "Banana", "Kiwi", "Mango", "Organge"];

for (let i = 0; i < fruit.length; i++) {
  if (fruit[i] === "Mango") break;
  console.log(fruit[i]);
}
//
console.log();
//

let stuff = [
  ["Apple", "Banana", "Kiwi", "Mango", "Organge"],
  ["Lettuce", "Celery", "Potato", "Onion"],
];

for (let m = 0; m < stuff.length; m++) {
  for (let n = 0; n < stuff[m].length; n++) {
    // if (stuff[m][n] === "Potato") break;
    console.log(stuff[m][n]);
  }
}
//
//

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

for (let x = 0; x < planets.length; x++) {
  if (x !== 3) {
    continue; // skip until index 3
  }
  console.log(`Perseverance Rover is on ${planets[x]}`);
}
