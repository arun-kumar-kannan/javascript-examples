// const loopMe = function (maxCount, Counter = 0) {
//   if (Counter < maxCount) {
//     console.log(`This will Run 10 Times ${Counter}`);
//     return loopMe(maxCount, Counter + 1);
//   }
// };

// loopMe(10);

const loopMe = function (maxCount, callback, Counter = 0) {
  if (Counter < maxCount) {
    callback(Counter);
    return loopMe(maxCount, callback, Counter + 1);
  }
};

loopMe(10, function (count) {
  console.log(`This will Run 10 Times ${count}`);
});

//

const calcPower = function (num, power) {
  if (power !== 1) {
    return num * calcPower(num, power - 1);
  }
  return num;
};

console.log(calcPower(2, 4));
