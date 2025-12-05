"use strict";

var showReport = true;
console.log(typeof showReport);

var hasDownloaded = false;
var isPaymentConfirmed = true;
var forceDelet = false;

//  convert not boolean to boolean

// double NOT operator;

var message = "hi";
var showPostButton = false;
var showPostButton = !!message;

// ✅ What does !! mean in JavaScript?
// The double exclamation mark (!!) is used to convert any value into a boolean (true or false).

console.log(`show post button: ${showPostButton}`);

var numOfCharacter = 0;
var numOfCharacter = numOfCharacter.length;
var showEditButton = !!numOfCharacter;
console.log(`Show Edit Button: ${showEditButton}`);

// greater than or less than operator True or False

var ageOfJoe = 19;
var eligibleForVoting = ageOfJoe > 18;
var isJoeASeniorCitizen = ageOfJoe > 60;

console.log("Joe can vote. true or false?", eligibleForVoting);
console.log("Joe is a senior citizen. true or false?", isJoeASeniorCitizen);
