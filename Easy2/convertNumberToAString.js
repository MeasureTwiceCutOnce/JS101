// // Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

// the answer from LS
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(number) {
  if (number < 0) {
    return "-" + integerToString(number * -1);
  } else {
    return integerToString(number);
  }
}

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

console.log(signedIntegerToString(-3));
console.log(signedIntegerToString(-453));
console.log(signedIntegerToString(0));
// Below is my wrong answer! % of a number below ten % 10 returns that number because it is just 0.that number.
// const DIGITS = {
//   0:"0",
//   1:"1",
//   2:"2",
//   3:"3",
//   4:"4",
//   5:"5",
//   6:"6",
//   7:"7",
//   8:"8",
//   9:"9"
// }

// function integerToString(integer) {
//   let onesString = [];
//   let tensString = [];
//   let hunString = [];
//   let thousandsString = [];

//   while (integer > 0) {

//   }
//   return integer.split("").join("");

// }

// console.log(integerToString(453));
