function getUserInput(prompt) {
  let sync = require("readline-sync");
  return sync.question(prompt);
}

function execute () {
  let val1 = Number(getUserInput(`What is your first number?\n`));
  let val2 = Number(getUserInput(`What is your second number?\n`));
  if ((isNaN(val1)) || (isNaN(val2))) {
    console.log(`Please only enter numbers.`)
  } else if (val2 === 0) {
    console.log(`I am sorry. The second value can not be zero.`)
  } else {console.log(displayAddition(val1, val2));
  console.log(displaySubtraction(val1, val2));
  console.log(displayMultiplication(val1, val2));
  console.log(displayDivision(val1, val2));
  console.log(displayRemainder(val1, val2));
  console.log(displayPower(val1, val2));}
}

function displayAddition(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return `${firstNumber} + ${secondNumber} = ${result}`
}
function displaySubtraction(firstNumber, secondNumber) {
  let result =  firstNumber - secondNumber;
  return `${firstNumber} - ${secondNumber} = ${result}`;
}

function displayMultiplication(firstNumber, secondNumber) {
  let result =  firstNumber * secondNumber;
  return `${firstNumber} * ${secondNumber} = ${result}`;
}

function displayDivision(firstNumber, secondNumber) {
  let result =  firstNumber / secondNumber;
  return `${firstNumber} / ${secondNumber} = ${result}`;
}

function displayRemainder(firstNumber, secondNumber) {
  let result =  firstNumber % secondNumber;
  return `${firstNumber} % ${secondNumber} = ${result}`;
}

function displayPower(firstNumber, secondNumber) {
  let result =  Math.pow(firstNumber, secondNumber);
  return `${firstNumber} to the power of ${secondNumber} = ${result}`;
}

execute();