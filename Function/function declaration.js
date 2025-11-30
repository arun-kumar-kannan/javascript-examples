function computeArea(length, width) {
  let area = length * width;
  let sum = area / 2;
  console.log(sum);
}
computeArea(23, 45);

//

console.log(computePayable(2000));
console.log(computePayable("800"));

function computePayable(cost) {
  let discount = Number(cost) < 1000 ? 0 : 10;
  //   let totalCost = cost - cost * (discount / 100);
  //   return totalCost;
  return cost - cost * (discount / 100);
}

// function is hoisted and var is hoisted

// object as a arugument

let point1 = {
  x: 4,
  y: 6,
};
let point2 = {
  x: 2,
  y: 4,
};

function calcDistance(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

console.log(calcDistance(point1, point2));

//

// greet();
// function greet() {
//   console.log("hello");
// }

greet();

const greet = function () {
  console.log("Good morning!");
};
