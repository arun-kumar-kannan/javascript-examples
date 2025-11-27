// Scope

// Simply put, the scope is another name for context or the limits within which variables and values are visible and accessible.

// ------------------------------ variable var ----------------------------------
var user = "sarah";
console.log(globalThis.hasOwnProperty("user"));

console.log(globalThis);

// Function

// 🔹 Global Scope

// A variable is in the global scope if it is declared outside any function or block.

// 🔹 Function Scope

// A variable is in function scope if it is declared inside a function using var, let, or const.

function addNumber(a, b) {
  var sum = a + b;
  return sum;
}

console.log(addNumber(5, 6));

function sayHi() {
  console.log(`${user} say hi!`);
}
sayHi();

// ------------------------------- variable Let ----------------------------------

// ✔️ Are block-scoped

// This means the variable exists only inside the block { } where it was declared.

// if statement

var cost = 1000;

if (cost >= 1000) {
  // var cost = 950; --- override
  let cost = 950;
  console.log(`special clearence cost: ${cost}`);
}

console.log(`original cost: ${cost}`);

// for loop

var x = 200;

// for (var x = 0; x < 10; x = x + 1) {.     var override
for (let x = 0; x < 10; x = x + 1) {
  console.log(`The number is ${x}`);
}

console.log(`Orginal Number is ${x}`);

// ------------------------------- variable const ----------------------------------
