// In regards to peer review, I think my code worked pretty well except for a couple of things: 1. Since I made so many functions chained together I was not able to use some of the variables in later funcitons and thus I had to pass through one parameter untouched through like three functions before it was finally used which I think would be bad code. 2. The calculations are coming out in correct, but I think that is some mathematical problem more so than code. 3. I think that I should have made my inputs in outer scope and then accessed those with the functions. <br> However, I am confused because the possible solution seems to put everything in one large function, and I thought I have read that making large functions is not a good idea. I think I can see the benefit of that large function in this problem because in my compartmentalized code, if the user types in the wrong, then they have to go back to the beginning whereas in the large function, they are able to just back up a step. 

function execute() {
  let loanLength = parseInt(getUserInput(`Please enter the total loan duration in years.\n`));
  if (loanLength <= 0 || loanLength === null || loanLength === undefined || isNaN(loanLength)) {
    console.log(`Error. Wrong input. Please enter the length of the loan in years.\n`);
    return execute();
  } 
  return getLoanMonthlyDuration(loanLength);
}

 
function getLoanMonthlyDuration(numYears) {
    let numInMonths = num * 12;

    return getMonthlyInterestRate(numInMonths, numInMonths); 
}

function getMonthlyInterestRate(inputParam, inputParam2) {
  let annualIntRate = parseFloat(getUserInput(`What is the yearly interest amount? (If 5%, then type 5)\n`));
  let monthlyRate = (annualIntRate / 100) / inputParam;
  if (annualIntRate <= 0 || annualIntRate === null || annualIntRate === undefined || isNaN(annualIntRate)) {
    console.log(`Error. Wrong input. Please enter the interest rate of the loan as a whole number.\n`);
    return execute();
  }
  return monthlyPaymentCalculator(monthlyRate, inputParam2);
}

function monthlyPaymentCalculator(inputParam2, inputParam1) {
  let loanAmount = parseInt(getUserInput(`Please enter your loan amount.\n`));
  let result = loanAmount * (inputParam2 / (1 - Math.pow((1 + inputParam2), (-inputParam1))));
  if (loanAmount <= 0 || loanAmount === null || loanAmount === undefined || isNaN(loanAmount)) {
    console.log(`Error. Wrong input. Please enter the total loan amount.\n`);
    return execute();
  }
  console.log(`\nYour monthly payments will be $${result.toFixed(2)} cents per month.\n Your monthly interest rate is ${inputParam2.toFixed(5)}.\n Your loan was calculated over ${inputParam1} months.` );
  console.log(inputParam2);
  console.log(inputParam1);
  const outputString = Your monthly payments will be $${result.toFixed(2)} cents per month. Your monthly interest rate is ${inputParam2.toFixed(5)} Your loan was calculated over ${inputParam1} months..trim()
console.log(outputString);
}

function getUserInput(inputParam) {
  let sync = require("readline-sync");
  return sync.question(inputParam)
}
execute();

// let monthlyPayments = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-n))));

// m = monthly payment  $ and fixed(2)
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

// let annualInterestRate = sync.question(`Please enter the annual interest rate in years.`)
//   let loanAmount = 
//   numberOfYears
