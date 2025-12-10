// let input = prompt("Enter the number from 1 to 10:");

// if (input % 2 == 0) {
//   alert("Even number");
// } else {
//   alert("odd number");
// }

// let a = prompt("Number");
// let b = prompt("Number");
// let c = prompt("Number");

// if (a ** 2 + b ** 2 == c ** 2) {
//   alert("triple");
// } else {
//   alert("not triple");
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "x" + j + "=" + i * j);
//   }
//   console.log("\n");
// }

// let choice = 1;

// do {
//   choice = Number(prompt("1.\n2.\n3.\n4"));

//   switch (choice) {
//     case 1:
//       alert("1");
//       break;
//     case 2:
//       alert("2");
//       break;
//     case 3:
//       alert("3");
//       break;
//     case 4:
//       alert("4");
//       break;
//     case 5:
//       alert("5");
//       break;
//     default:
//       alert("error");
//   }
// } while (choice >= 1 && choice <= 5);
// {
// }

const randomNumber = Math.floor(Math.random() * 100) + 1;

let guess;
while (true) {
  guess = Number(prompt("Guess a number between 1 and 100"));

  if (guess > randomNumber) {
    console.log("Too high");
  } else if (guess < randomNumber) {
    console.log("Too low");
  } else {
    console.log("Congratulations!");
    break;
  }
}
