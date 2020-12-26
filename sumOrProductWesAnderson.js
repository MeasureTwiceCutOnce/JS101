function execute() {
  let inputSeriesOption = getUser(
    "Enter a, if you'd like to choose a series of consecutive integers from 1 up to and including an integer.\nEnter b, if you'd like to enter a series of integers of your choice.\n"
  );
  if (inputSeriesOption !== 'a' && inputSeriesOption !== 'b') {
    return "I am error. Please only enter 'a' or 'b'.";
  } else if (inputSeriesOption === 'a') {
    return optionA();
  } else {
    return optionB();
  }
}

function getUser(inputParam) {
  let rlSync = require('readline-sync');
  return rlSync.question(inputParam);
}

function optionA() {
  let inputInteger = Number(getUser("Please enter an integer greater than 0.\n"));
  if (inputInteger === 0 || Number.isNaN(inputInteger) || !Number.isInteger(inputInteger)) {
    return "I am error. The integer has to be greater than zero.";
  }
  let arrayOfIntegers = [];
  let index = 1;
  while (index < (inputInteger + 1)) {
    arrayOfIntegers.push(index);
    index += 1;
  }
  return getOperation(arrayOfIntegers);
}

function optionB() {
  let arrayOfIntegers = [];
  do {
    let userElement = getUser("Please enter an integer (no input will be treated as 0).\n");
    arrayOfIntegers.push(Number(userElement));
  } while (getUser("Enter 'y' if you want to enter another integer.\n") === 'y');
  if (arrayOfIntegers.some(element => Number.isNaN(element)) || arrayOfIntegers.some(element => !Number.isInteger(element))) {
    return "I am error.";
  }
  return getOperation(arrayOfIntegers);
}

function getOperation(arrayParam) {
  let inputOperation = getUser(
    `If you want the sum of the integers ${arrayParam}, enter 's'.\nIf you want the product of the integers ${arrayParam}, enter 'p'.\n`
  );
  if (inputOperation !== 's' && inputOperation !== 'p') {
    return "I am error.";
  } else {
    return sumOrProduct(inputOperation, arrayParam);
  }
}

function sumOrProduct(operationParam, arrayParam) {
  if (operationParam === 's') {
    let result = arrayParam.reduce((acc, ele) => {
      acc += ele;
      return acc;
    }, 0);
    return `The sum of the integers ${arrayParam} is ${result}.`;
  } else {
    let result = arrayParam.reduce((acc, ele) => {
      acc *= ele;
      return acc;
    }, 1);
    return `The product of the integers ${arrayParam} is ${result}.`;
  }
}

console.log(execute());
