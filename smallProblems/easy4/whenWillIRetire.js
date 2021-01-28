/*
I purposely added all the spaces so that the questions
and answers could be centerd on the screen, but
I would like to know if there is a way to code that as
opposed to hard coding as I did.

I also, had trouble getting my validation function
to validate. Any ideas?
*/
function getUserInput(message) {
    let sync = require("readline-sync");
    return sync.question(message);
}

function displayRetirementAge() {
    console.clear();
    let userAge = getUserInput(`\n\n\n\n\n\n\n\n              What is your current age?\n                    `);
    let desireToRetireAge = getUserInput(`             At what age would you like to retire?\n                        `);
    let currentYear = new Date().getFullYear();
    let retiredYear = (Number(desireToRetireAge) - Number(userAge)) + currentYear;
    let yearsUntilRetired = Number(desireToRetireAge) - Number(userAge);

    if (!isValid(userAge)) {
        console.log(`Please only enter numbers.`)
    }

    if (!isValid(desireToRetireAge)) {
        console.log(`Please only enter numbers.`)
    }
    console.clear();
    let tooManyYearsMessage = `\n\n\n\n\n\n        It's ${currentYear}. You will retire in ${retiredYear}.\n        You have ${yearsUntilRetired} years of work to go!\n      You should consider speeding that up by saving and investing in real estate!\n\n\n\n`

    let justRightYearsMessage = `\n\n\n\n\n\n            It is ${currentYear}. You will retire in ${retiredYear}. \n           You have only ${yearsUntilRetired} years of work to go! \n        You must have saved and invested in real estate. Way to go buddy!\n\n\n\n`

    if (ifTooManyYears(yearsUntilRetired)) {
        console.log(tooManyYearsMessage);
    } else {
        console.log(justRightYearsMessage);
    }

}

function isValid(userInput) {
    if (Number(userInput) > 0 && Number.isInteger(userInput)) {
        return true;
    } else {
        return false;
    }
}

function ifTooManyYears(years) {
    if (Number(years) > 15) {
        return true;
    } else {
        return false;
    }
}

displayRetirementAge();
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!