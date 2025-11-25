console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

var bigIntNum = BigInt(9007199254740991);
console.log(bigIntNum);

console.log(bigIntNum + 1);
// Cannot mix BigInt and other types, use explicit conversions

console.log(bigIntNum + 4n);

var aLargeNumber = 99_923_456_789_999_000n;

console.log(aLargeNumber + 4n);

var septillion = 1_000_000_000_000_000_000_000_000n;
var plusOne = septillion + 1n;
console.log("Septillion plus one is equal to", plusOne);
