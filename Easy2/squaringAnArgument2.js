// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
function square(num, exponent) {
  return (returnMultiplied(Number(num), Number(num) ** exponent));
}

function returnMultiplied(num1, num2) {
  let result  = Number(num1) * Number(num2);
  // console.log(result);
  return result;
}

// function getUserInput(prompt) {
//   let sync = require("readline-sync");
//   return sync.question(prompt);
// }

// let val1 = getUserInput(`Please enter a number.\n`);
// let val2 = getUserInput(`Please enter another number.\n`);

// returnMultiplied(val1, val2);

console.log(square(5, 3));
console.log(square(-8, 2));
console.log(square(20,4));
console.log(square(3.7,5.3));