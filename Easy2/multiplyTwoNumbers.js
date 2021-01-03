function returnMultiplied(num1, num2) {
  let result  = Number(num1) * Number(num2);
  console.log(result);
  return result;
}

function getUserInput(prompt) {
  let sync = require("readline-sync");
  return sync.question(prompt);
}

let val1 = getUserInput(`Please enter a number.\n`);
let val2 = getUserInput(`Please enter another number.\n`);

returnMultiplied(val1, val2);

// Sam checking for NaN and not a number
// function multiply(num1, num2) {
//   if ((typeof num1 !== 'number') || (typeof num2 !== 'number') ||
//       (Number.isNaN(num1)) || (Number.isNaN(num2)) ||
//       (Number.isNaN(num1 * num2))) {
//     return 'Invalid Input';
//   } else {
//     return num1 * num2;
//   }
// }