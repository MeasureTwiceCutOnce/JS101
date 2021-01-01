let sync = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

const VALID_CHOICE = ["rock", "paper", "scissors"];

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, and the computer chose ${computerChoice}.\n`);

  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
             (userChoice === 'paper' && computerChoice === 'scissors') ||
             (userChoice === 'scissors' && computerChoice === 'rock')) {
    prompt('The computer wins!');
  } else {
    prompt("It's a tie!");
}
} 

function computerChoice(inputParam1) {
  let randomNumber = getRandomIntInclusive(1, 3);
  let rock = 1;
  let scissors = 3;
  let paper = 2;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  if (randomNumber === 1) return computerChoice = "rock";
    else if (randomNumber === 2) return computerChoice = "scissors";
    else if (randomNumber === 3) return computerChoice = "paper";
    else console.log(`error`);

  displayWinner(inputParam1, computerChoice);
}

while (true) {
  prompt(`Welcome to the game: Rock Paper Scissors!\n Are you ready to play?`)
  userChoice = sync.question().toLowerCase();

  while (!VALID_CHOICE.includes(userChoice)) {
    prompt(`That is not a valid choice.\n Please type \n"rock", \n"paper", or \n"scissors" `)
    userChoice = sync.question().toLowerCase();
  }
  computerChoice(userChoice);

  prompt(`Would you like to play again? \n Type y or n`);
  answer = sync.question().toLowerCase();
  while (answer[0] !== "n" || answer[0] !== "y") {
    prompt(`Please only enter y or n.\n`)
    answer = sync.question().toLowerCase();
  }
  if (answer[0] !== "y") break;
}