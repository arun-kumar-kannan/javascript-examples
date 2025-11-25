"use strict";
var a = 10;
var b = 20n;
try {
  var c = a + b;
  console.log(c);
} catch (error) {
  console.log(error);
}
var pi = Math.PI;
console.log(pi);

//

var a = "10";
var b = 20;
try {
  if (typeof a != typeof b)
    throw new Error("Both operand must be same data type!");
  var c = a + b;
  console.log(c);
} catch (error) {
  console.log(error);
} finally {
  console.log("I run will run no matter what");
}
