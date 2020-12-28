const MESSAGES = require('./calculator_messages.json');



function execute() {
  let operationOption = getUserInput('Hello.\n\n I am a simple calculator.\n\n I can perform simple operations like\n adding (+), subtracting (-), multiplying (x), and dividing (/).\n Please type which operation you would like to perform by \npressing "1" for adding, "2" for subtracting, "3" for dividing, and "4" for mutliplying.\n')

  
  if (operationOption !== "1" && operationOption !== "2" && operationOption !== "3" && operationOption !== "4") {
   prompt(`Please only enter 1,2,3 or 4.`);
   execute();
  } 
  switch (operationOption) {
    case "1":
      return operationAdd();
      
    case "2":
      return operationSubtract();
      
    case "3":
      return operationDivide();
      
    case "4":
      return operationMultiply();
      
  }
}
//   if (operationOption !== "1" && operationOption !== "2" && operationOption !== "3" && operationOption !== "4") {
//     return `Please only enter 1,2,3, or 4.\n`
//   } else if (operationOption === "1"){
//     return operationAdd()
//   } else if (operationOption === "2") {
//     return operationSubtract()
//   } else if (operationOption === "3") {
//     return operationDivide() 
//   } else if (operationOption === "4") {
//     return operationMultiply()
//   } else {
//     return "Please pick one of the choices."
//   }
// }

function prompt(message) {
  console.log(`=> ${message}`);
}


function getUserInput(inputParam) {
  return sync.question(prompt(inputParam));
}
let sync = require("readline-sync");

function operationAdd() {
  let inputInteger1 = Number(getUserInput(`Please enter your first number.\n`));
  let inputInteger2 = Number(getUserInput(`Please enter your second number.\n`));

  if (Number.isNaN(inputInteger1) || inputInteger1 === null || inputInteger1 === "") {
    return `Please input a number.`
  } else if (Number.isNaN(inputInteger2 || inputInteger2 === null || inputInteger2 === "")) {
    return `Please input a number.`
  } else {
    let total = inputInteger1 + inputInteger2;
    return `\n ${inputInteger1} plus ${inputInteger2} equals ${total}.\n Thank you for calculating with me. \n<3 <3 <3 `;
  }
  
}

function operationSubtract() {
  let inputInteger1 = Number(getUserInput(`Please enter your first number.\n`));
  let inputInteger2 = Number(getUserInput(`Please enter your second number.\n`));

  if (Number.isNaN(inputInteger1) || inputInteger1 === null || inputInteger1 === "") {
    return `Please input a number.`
  } else if (Number.isNaN(inputInteger2 || inputInteger2 === null || inputInteger2 === "")) {
    return `Please input a number.`
  } else {
    let total = inputInteger1 - inputInteger2;
    return `\n ${inputInteger1} minus ${inputInteger2} equals ${total}.\n Thank you for calculating with me. \n<3 <3 <3 `;
}
}

function operationDivide() {
  let inputInteger1 = Number(getUserInput(`Please enter your first number.\n`));
  let inputInteger2 = Number(getUserInput(`Please enter your second number.\n`));

  if (Number.isNaN(inputInteger1) || inputInteger1 === null || inputInteger1 === "") {
    return `Please input a number.`
  } else if (Number.isNaN(inputInteger2 || inputInteger2 === null || inputInteger2 === "")) {
    return `Please input a number.`
  } else {
    let total = inputInteger1 / inputInteger2;
    return `\n ${inputInteger1} divided by ${inputInteger2} equals ${total}.\n Thank you for calculating with me. \n<3 <3 <3 `;
}
}

function operationMultiply() {
  let inputInteger1 = Number(getUserInput(`Please enter your first number.\n`));
  let inputInteger2 = Number(getUserInput(`Please enter your second number.\n`));

  if (Number.isNaN(inputInteger1) || inputInteger1 === null || inputInteger1 === "") {
    prompt(`Please input a number.`)
    execute(4);
  } else if (Number.isNaN(inputInteger2 || inputInteger2 === null || inputInteger2 === "")) {
    return `Please input a number.`
  } else {
    let total = inputInteger1 * inputInteger2;
    return `\n ${inputInteger1} times ${inputInteger2} equals ${total}.\n Thank you for calculating with me. \n<3 <3 <3 `;
}
}
// user input of two numbers
// check for neg, zero, and max number


// four operation functions add, divide, subtract, multiply


// execute
console.log(execute());
