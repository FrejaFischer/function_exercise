"use strict";
//exercise 1
// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const sayHi = greeting;

// console.log(sayHi("Harry"));

// console.log(greeting("Ron"));

//exercise 2
const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};
const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}

fireOrHire(hire, person4);
fireOrHire(fire, person3);

console.log(person3);
console.log(person4);

//exercise 3

// function loadJSON(url, callback) {
//   fetch(`${url}`)
//     .then((response) => response.json())
//     .then(callback);
// }

// function init() {
//   console.log("init");

//   loadJSON("marvel.json", prepareData);
// }

// function prepareData(data) {
//   console.log("prepare data");

//   console.table(data);
// }

// init();
