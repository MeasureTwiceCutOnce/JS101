// Leap Years

function isLeapYear(year) {
  
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
  
console.log(isLeapYear(2016))
console.log(isLeapYear(2016))      // true
console.log(isLeapYear(2015))      // false
console.log(isLeapYear(2100) )     // false
console.log(isLeapYear(2400))      // true
console.log(isLeapYear(240000))    // true
console.log(isLeapYear(240001))    // false
console.log(isLeapYear(2000))      // true
console.log(isLeapYear(1900))      // false
console.log(isLeapYear(1752))      // true
console.log(isLeapYear(1700))      // false
console.log(isLeapYear(1))         // false
console.log(isLeapYear(100))       // false
console.log(isLeapYear(400))       // true
// // Short Long Short

// // shortLongShort('abc', 'defgh');    // "abcdefghabc"
// // shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// // shortLongShort('', 'xyz');         // "xyz"

// let sync = require("readline-sync");
// let arr1 = sync.question(`Please enter some characters without spaces.\n`);
// let arr2 = sync.question(`Please enter some characters without spaces.\n`);

// function shortLongShort(arr1, arr2) {
//   if (!(arr1 || arr2) === "string" ) {
//     return "Please enter only letters."
//   } else if (arr1.length > arr2.length){
//     let result = arr2.concat(arr1).concat(arr2);
//     return result;
//   } else {
//     let result = arr1.concat(arr2).concat(arr1);
//     return result;
//   }
   
// }


// console.log(shortLongShort(arr1, arr2));

// // Sum or Product of Consecutive Numbers

// function muliplied(arr) {
//   const reducer = (multi, val) => {
//     multi * val;
    
//   }
//   return arr.reduce(reducer, 0);
// }

// function Summation(arr) {
//   const reducer = (sum, val) => {
//     sum + val;
    
//   }
//   return arr.reduce(reducer, 0);
// }

// let sync = require("readline-sync");
//   let someNumber = Number(sync.question(`Please enter an integer greater than 0.\n`));
//   let sumOrProduct = sync.question(`If you would like to multiply those numbers then press 1. \n If you would prefer to add those numbers then press 2.\n`);

//   let array1 = Array.from(Array(someNumber), (x, index) => index + 1);

//   if (sumOrProduct == 1) {
//     let sum = Summation(someNumber);
//     console.log(`The sum between 1 and ${someNumber} is ${sum}.`);
//   } else if (sumOrProduct == 2){
//     let product = muliplied(someNumber);
//     console.log(`The product between 1 and ${someNumber} is ${product}.`);
//   } else {
//     return `That does not compute.`
//   }

  // let sync = require("readline-sync");
  // let someNumber = Number(sync.question(`Please enter an integer greater than 0.\n`));
  // let sumOrProduct = sync.question(`If you would like to multiply those numbers then press 1. \n If you would prefer to add those numbers then press 2.\n`);

  // // let array1 = Array.from(Array(someNumber), (x, index) => index + 1);

  // if (sumOrProduct == 1) {
  //   let sum = allNumbersAdded(someNumber);
  //   console.log(`The sum between 1 and ${someNumber} is ${sum}.`);
  // } else if (sumOrProduct == 2){
  //   let product = productOfAllNumbers(someNumber);
  //   console.log(`The product between 1 and ${someNumber} is ${product}.`);
  // } else {
  //   return `That does not compute.`
  // }

  // function allNumbersAdded(someNumber) {
  //   let total = 0;
  //   for (i = 1; i <someNumber; i++) {
  //     total += i; 
  //   }
  //   return total;
  // }

  // function productOfAllNumbers(someNumber) {
  //   let total = 1;
  //   for (i = 1; i< someNumber; i++) {
  //     total *= i;
  //   }
  //   return total;
  // }
 

// function calculatedNumbers(someNumber) {
//   let array1 = Array.from(Array(someNumber), (x, index) => index + 1);
//   // let array2 = [...new Array(someNumber + 1)];
//   let reducerMultiplied = (acc, curr) => {
//     acc * curr;

//   }
//   let reducerSummed = (acc, curr) => {
//     return acc + curr;
//   }

//   if (sumOrProduct == 1) {
//     const product = array1.reduce(reducerMultiplied, 0);
//     return `The product between 1 and ${someNumber} is ${product}.`
//   } else if (sumOrProduct == 0) {
//     const sum = array1.reduce(reducerSummed, 0);
//     return `The sum between 1 and ${someNumber} is ${sum}.`
//   } else {
//     return `That does not compute`
//   }
// }

// console.log(calculatedNumbers());

// let result = 

// let array1 = Array.from(Array(6), (x, index) => index + 1);
// console.log(array1);
// // Tip Calc
// let sync = require("readline-sync");
// let bill = sync.question(`How much is the bill?\n`);
// let tip = sync.question(`What is the tip percentage?\n`)

// function tipAndBillCalc(bill, tip) {
//   let tipTotal = Number(bill) * (Number(tip) / 100);
//   let totalBill = Number(bill) + Number(tip);
  
//   console.log(`The tip is $${tipTotal}.\n The total is $${totalBill}.`)
// }

// // console.log(tip);
// // console.log(bill);
// console.log(tipAndBillCalc(bill, tip));


// // // How Big is the Room
// let sync = require('readline-sync');
// let lengthInMeters = sync.question(`What is the length of the room in meters?\n`);
// // console.log(lengthInMeters);
// let widthInMeters = sync.question(`What is the width of the room in meters?\n`);
// // console.log(widthInMeters);
// let unitChoice = sync.question(`Would you like your answer in square meters or square feet?`);

// if (unitChoice === "square meters") {
//   console.log(roomAreaCal(lengthInMeters, widthInMeters));
// } else {
//   console.log(roomAreaCalFeet(lengthInMeters, widthInMeters));
// }

// function roomAreaCal(length, width) {
//   let area = length * width;
//   let areaSqFeet = area * 10.7639;
//   return `The area of the room is ${area} square meters (${areaSqFeet.toFixed(2)} square feet).`
// }

// function roomAreaCalFeet(length, width) {
//   let area = length * width;
//   let areaSqMeters = area;
//   return `The area of the room is ${area} square feet (${areaSqMeters.toFixed(2)} square meters).`
// }
// // I am pretty sure writing a function twice is bad code. :D

// // // Even Numbers

// // for (let i = 0; i < 101; i += 2) {
// //   console.log(i);
  
// // }
// Odd Numbers Further Exploration
// log all odd numbers to a different line
// user input of limits

// let sync = require("readline-sync");
// let upperLimit = sync.question(`Please enter a top range for your odd numbers.\n`);

// function oddNumbersMaker(upperLimit) {
//   let i = 1;
//   while (i <= upperLimit) {
//     console.log(i);
//     i += 2;
//   }
// }

// console.log(oddNumbersMaker(upperLimit));
// // // Odd Numbers

// // for (let i = 1; i < 100; i += 2) {
// //   console.log(i);
  
// // }

// // Is Odd?
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true


// function isOdd(val) {
//   return ((! isNaN(val) )&& (val % 2 === 1)) ? true : false;
// }