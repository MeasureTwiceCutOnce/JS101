function getUserInput(message) {
    let sync = require("readline-sync");
    return sync.question(message);
}

let readlineSync = require("readline-sync");
function execute() {

    while (true) {
        console.clear();
        let userName = getUserInput(`What is your name?\n`);
        console.clear();

        console.log(`Welcome ${userName}!`);

        let choices = ["I want the odd letters capial.", "I want the even letters capital."];
        let index = readlineSync.keyInSelect(choices, `\nWould you like to have each odd letter capitlized, or the even letters capitalized?\n`);

        console.log(`You said "${choices[index]}"`);


        let userText = getUserInput(`Please type in the text that you would like to be capitalized.\n`)

        console.clear();


        console.log(staggeredCase(userText, index));

        let endGame = getUserInput(`Would you like to do it again?\n`)
        if (endGame[0].toLowerCase === "y") {
            return execute();
        } else {
            return false;
        }
    }
}
    function staggeredCase(string, choice) {
        if (choice === "1") {
            return string.split(" ").map(word => {
                return isLowercase(word) ? staggeredCaseUpperFirst(word) : staggeredCaseLowerFirst(word);
            }).join(" ")
        } else {
            return string.split(" ").map(word => {
                return !(isLowercase(word)) ? staggeredCaseUpperFirst(word) : staggeredCaseLowerFirst(word);
            }).join(" ")
        }
    }

function staggeredCaseUpperFirst(string) {
    return string.split('')
      .map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
      .join('');
  }

function staggeredCaseLowerFirst(string) {
    return string.split('')
      .map((char, idx) => idx % 2 === 1 ? char.toUpperCase() : char.toLowerCase())
      .join('');
  }

function isLowercase(word) {
    return word[0] >= "a" && word[0] <= "z";
}

execute();

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");
