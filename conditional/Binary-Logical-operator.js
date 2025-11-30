"use strict";

// Logical OR

// let user = "sam";
let user = "";
let greetings = `hello ${user || "Stranger"}`;
console.log(greetings);

// Logical AND

let isUserSmiling = true;
isUserSmiling && console.log("user is smiling");

// Logical AND expression

// let dataDownloaded = 13;

// let hasBeenDownloaded = dataDownloaded === 100;

// hasBeenDownloaded = hasBeenDownloaded && "Data download now complete...";

// console.log(hasBeenDownloaded);

// Logical AND & OR Assignment

let dataDownloaded = 100;

let hasBeenDownloaded = dataDownloaded === 100;

hasBeenDownloaded &&= "Data download now complete...";
hasBeenDownloaded ||= "Downloading....";
console.log(hasBeenDownloaded);

//

let inputUsername = "joe";
let inputPassword = "1234";

const database = {
  joe: {
    user: "Joe Mockery", // later you will change this to "Joe Mockery"
    password: "1234",
  },
};

let checkPassword = database[inputUsername].password === inputPassword;

checkPassword &&
  console.log(`${database[inputUsername].user || "user"} is Logged in....`);
// checkPassword ||= "password is Wrong";
// console.log(checkPassword);

//

let pass = 1244;

const data = 1234;

let input = pass === data;
// input && console.log("correct");
// input || console.log("wrong");
input &&= "correct";
input ||= "wrong";

console.log(input);
