const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
let userWinnerCount = 0;
let computerWinnerCount = 0;
let totalRounds = 0;



function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
  (choice === 'paper' && computerChoice === 'rock') ||
  (choice === 'scissors' && computerChoice === 'paper')
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  

  if (playerWins(choice, computerChoice)) {
    userWinnerCount++;
    totalRounds++;
    prompt('You won that round!');
    prompt(`\nComputer score: ${computerWinnerCount}\n Your score: ${userWinnerCount}`)
    return totalRounds;
  } else if (computerChoice === choice) {
    prompt("That round was a tie!");
    prompt(`\nComputer score: ${computerWinnerCount}\n Your score: ${userWinnerCount}`)
  } else {
    computerWinnerCount++;
    totalRounds++;
    prompt('The computer won that round!');
    prompt(`\nComputer score: ${computerWinnerCount} out of five.\n Your score: ${userWinnerCount} out of five.`)
    
    return totalRounds;
    
    
  }
  
}

while (totalRounds < 5) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();
  while (choice[0] !== 'r' && choice[0] !== 'p' && choice[0] !== 's') {
    prompt(`Please choose only rock paper or scissors.`);
    choice = readline.question().toLowerCase();
  }

  let number = getRandomIntInclusive(1, 3);

  function choiceConverter(number) {
    if (number = 1) {
      return computerChoice = "rock";
    } else if (number = 2) {
      return computerChoice = "paper";
    } else if (number = 3) {
      return computerChoice = "scissors";
    }
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return choiceConverter(Math.floor(Math.random() * (max - min + 1) + min));
  }

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    break;
   } else if (totalRounds = 5 && userWinnerCount > computerChoice) {
      prompt(`You are the winner!`)
    } else if (totalRounds = 5 && computerChoice > userWinnerCount) {
      prompt(`Sorry! The computer is the winner.`)
    }
}