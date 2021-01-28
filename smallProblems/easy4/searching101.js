function getUserInput(message) {
    let sync = require("readline-sync");
    return sync.question(message);
}


function isNumFound() {
    let numArray = [];
    console.clear();

    let num1 = Number(getUserInput(`Please enter the 1st number.`))
    let num2 = Number(getUserInput(`Please enter the 2nd number.`))
    let num3 = Number(getUserInput(`Please enter the 3rd number.`))
    let num4 = Number(getUserInput(`Please enter the 4th number.`))
    let num5 = Number(getUserInput(`Please enter the 5th number.`))
    let num6 = Number(getUserInput(`Please enter the 6th number.`))

            numArray.push(num1);
            numArray.push(num2);
            numArray.push(num3);
            numArray.push(num4);
            numArray.push(num5);
    console.clear();

    if (isAboveNum(num6,numArray)) {
        console.log( `The number ${isAboveNum(num6,numArray)} is greater than ${num6} in the set of numbers: [${num1}, ${num2}, ${num3}, ${num4}, ${num5}].`)

    } else {
        console.log(`The number ${num6} is the largest number in the set of numbers: [${num1}, ${num2}, ${num3}, ${num4}, ${num5}].`)
    }
}

function isAboveNum(num, array) {
    return array.find(element => element > num)
}

isNumFound();
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