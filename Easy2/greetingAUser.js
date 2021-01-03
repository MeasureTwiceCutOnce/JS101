function displayGreeting(string) {
  if (string.indexOf("!") > -1) {
    console.log(`HELLO ${string.toUpperCase()} \n WHY ARE WE SCREAMING?!`)
  } else {
    console.log(`Hello ${string}.`)
  }
}

let userName = getUserInput(`Please enter your name.\n`);

function getUserInput(prompt) {
  let sync = require("readline-sync");
  return sync.question(prompt);
}

displayGreeting(userName);