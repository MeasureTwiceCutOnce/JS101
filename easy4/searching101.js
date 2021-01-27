function getUserInput(message) {
    let sync = require("readline-sync");
    return sync.question(message);
}

function isNumFound() {


    console.log(`The number ${num6} does not appear in ${numArray}.`)
}

function createNumArray() {


    if (inputSeriesOption !== 'a' && inputSeriesOption !== 'b') {
        return "I am error. Please only enter 'a' or 'b'.";
      } else if (inputSeriesOption === 'a') {
        return optionA();
      } else {
        return optionB();
      }
    }

    let numArray = [];

    let num1 = getUserInput(`Please enter the 1st number.`)
    let num2 = getUserInput(`Please enter the 2nd number.`)
    let num3 = getUserInput(`Please enter the 3rd number.`)
    let num4 = getUserInput(`Please enter the 4th number.`)
    let num5 = getUserInput(`Please enter the 5th number.`)
    let num6 = getUserInput(`Please enter the 6th number.`)

    console.log(numArray.push(num1))
}


function isValidNum(num) {
    if(isNaN(num)) {
        return `Please only enter numbers`
    }
}


createNumArray();
// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.