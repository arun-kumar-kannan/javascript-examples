const users = [
  {
    id: 1,
    name: "John",
    age: 31,
    profession: "General Physician",
  },
  {
    id: 2,
    name: "Dennis Mckellan",
    age: 35,
    profession: "Physician",
  },
];

// function introduceUser(user) {
//   return `${user.name} is ${user.age} years old and works as a ${user.profession}`;
// }

const introduceUser = (user) =>
  `${user.name} is ${user.age} years old and works as a ${user.profession}`;

for (const user of users) {
  console.log(introduceUser(user));
}
//
console.log();
//

let word = "Arunkumar";

for (let w of word) {
  console.log(w);
}

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

console.log();

//

// const averageOfNums = function (...nums) {
//   let total = 0;
//   for (const n of nums) {
//     total = total + n;
//   }
//   return total / nums.length;
// };

const averageOfNums = function () {
  let sum = 0;
  for (const argument of arguments) {
    sum += argument;
  }
  return sum / arguments.length;
};

console.log(averageOfNums(2, 3, 5));
console.log(averageOfNums(2, 5, 6, 8, 9, 12));

//
console.log("FOR-IN LOOPS");
//
// object
const user = {
  id: 2,
  name: "Dennis Mckellan",
  age: 35,
  profession: "Physician",
};

for (const prop in user) {
  console.log(prop);
  //   console.log(user[prop]);
}
// array
const color = ["red", "green", "blue"];

for (const index in color) {
  console.log(index);
  console.log(color[index]);
}
