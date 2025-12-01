"use strict";

// A constructor function is a special type of function in JavaScript used to create multiple objects with the same structure (same properties and methods).

// It is basically a template for creating objects.

function User(name, age, isAdmin) {
  this.name = name;
  this.age = age;
  this.isAdmin = isAdmin;
  this.canDrive = () => (this.age > 18 ? "yes" : "no");
}

let user = new User("arun", 24, "true");

console.log(user, user.canDrive());

console.log(user.canDrive());

//

function Colour() {
  this.color = ["red", "Green", "blue"];
}

const colour = new Colour();
// console.log(colour);
console.log(colour.color);

// Important

const Product = function (name, description, cost, stock) {
  this.name = name;
  this.description = description;
  this.cost = cost;
  this.stock = stock;
  let revenue = 0;
  this.buy = (qty) => {
    if (qty <= this.stock) {
      this.stock = this.stock - qty;
      let costOfOrder = qty * this.cost;
      revenue = revenue + costOfOrder;
      console.log(`${qty} of ${this.name}: $${costOfOrder}`);
    } else {
      console.log(`we're out of stock ${this.name}`);
    }
  };
  this.getStock = () => `Available Quantity ${this.name}: ${this.stock} unit`;

  this.salesReport = () => `Total Sales for ${this.name}: $${revenue}`;
};
const vPhone = new Product(
  "vPhone 12 pro",
  "The fastest phone ever invented!",
  800,
  25
);
const tabBookPro = new Product(
  "tabBookPro",
  "The fastest phone ever invented!",
  1000,
  30
);

vPhone.buy(5);
console.log(vPhone.getStock());
console.log(vPhone.salesReport());

console.log();

tabBookPro.buy(5);
console.log(tabBookPro.getStock());
console.log(tabBookPro.salesReport());

//

const Person = function (firstname, lastname, age, email) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.age = age;
  this.email = email;
  this.introduction = () => `${this.firstName} is ${this.age} years old`;
  this.canDrive = () => (this.age >= 18 ? "Yes" : "No");
};

const Joe = new Person("Joe", "Mason", 17, "joe.m@mycorp.com");
console.log(Joe.introduction());
console.log(`Can the user drive? ${Joe.canDrive()}`);
