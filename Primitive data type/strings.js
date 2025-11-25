"use strict";

var user = "Arun";
console.log(typeof user);

var desination = "sr.designer";
var organization = "Sentinel Design\u{2122}";
var city = "New York";
var country = "USA";
var location = city + ", " + country;
console.log(location);

var favQuote = " to 'single-qote'or \"double-quote\"";
console.log(favQuote);

var employeeData =
  "Name: " +
  user +
  "\nDesignation: " +
  desination +
  "\nOrganization: " +
  organization +
  "\nLocation: " +
  location;
console.log(employeeData);

// Template literals: Template literals in JavaScript are a special way of writing strings that make them easier to read and easier to insert variables.

// They are written using backticks:

var employeesData = `Name: ${user}
Designation: ${desination}
Organization: ${organization}
Location: ${location}`;

console.log(employeesData);

var greetings = `Hi my name is ${user} \u{1F642} and I work as a ${desination} at ${organization} here is a simple equation 2+2 = ${
  2 + 2
}`;
console.log(greetings);

var myQuote = "Best friends are like a mirror";
var authour = "Arun";
var fullQuote = myQuote + " -- " + authour;
var lengthOfString = fullQuote.length;
console.log(fullQuote);

console.log("Length of the Quote: ", lengthOfString);
