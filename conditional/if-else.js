"use strict";

let cost = 1250;
if (cost > 1000) {
  console.log(`you have discount of 5%: ${cost * 0.5}`);
} else {
  console.log(cost);
}
//

let currentHour = new Date().getHours();

if (currentHour >= 0 && currentHour < 12) {
  console.log("good morning");
} else if (currentHour >= 12 && currentHour < 16) {
  console.log("good Afternoon");
} else if (currentHour >= 16 && currentHour < 20) {
  console.log("good Evening");
} else {
  console.log("good Night");
}
