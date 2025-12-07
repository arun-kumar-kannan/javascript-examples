"use strict";

const addNumber = (a, b) => a + b;

console.log(addNumber(5, 6));

// 1. Short & clean syntax

// No need to write function, {}, or return in simple cases.

// 2. Lexical this (VERY IMPORTANT)

// Arrow functions do not create their own this.
// They use this from the surrounding scope.

// normal function inside an object using this keyword

// let user = {
//   x: 15,
//   y: 12,
//   addz: function (z) {
//     return this.x + this.y + z;
//   },
// };
// console.log(user.addz(13));

let user = {
  x: 15,
  y: 12,
  setz() {
    return (z) => {
      return this.x + this.y + z;
    };
  },
};

let addz = user.setz();
console.log(addz(35));

//
// Arrow functions do NOT have their own this
// But if an arrow function is inside a normal function, it will use the normal function’s this

const rectangle = {
  width: 20,
  area() {
    return (length) => this.width * length;
  },
};
const data = rectangle.area();
console.log(data(20));

//

let user1 = {
  x: 15,
  y: 12,
  addz() {
    return (z) => this.x + this.y + z;
  },
};
let data2 = user1.addz();
console.log(data2(15));
