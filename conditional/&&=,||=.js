let a = true;
let b = false;

let c = a === b;

console.log(c);

// if  x true then assign y to x
// if x is false then do noththing x stay same
c &&= "hello";

console.log(c);

let x = true;
let y = true;

let z = x === y;
console.log(z);

// if  x false then assign y to x
// if x is true then do noththing x stay same

z ||= "good";
console.log(z);
