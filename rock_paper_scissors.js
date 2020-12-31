function getUserInput(param) {
  console.log(sync.question(param))
}

function getUserNameAndGreeting() {
  let userName = getUserInput(`Welcome to the game: rock, paper, and scissors.\n Please type your name.\n`);

  getUserChoice(userName);
}

function getUserChoice(userName) {
  let userChoice = Number(getUserInput(`Welcome ${userName}! \n\n ${userName} is one of my favorite names. \n\n Ok, listen ${userName}, choose between rock, paper, and scissors by typing\n 1 for rock\n 2 for paper or \n 3 for scissors \n\n\nI'm waiting for your choice!!!`));

  if (userChoice == 1 && userChoice == 2 && userChoice == 3) {
    console.log(`Please enter only 1, 2, or 3.`);
    
  } else {
    return getComputerChoice(userName, userChoice);
  }
}

function getComputerChoice(param, userChoice) {
  let computerChoice = getRandomIntInclusive(1, 3);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return calculateWinner(param, userChoice, computerChoice);
}

function calculateWinner(userName, userChoice, computerChoice) {
    
 if ( (userChoice === 1 && computerChoice === 3) || 
                    (userChoice === 3 && computerChoice === 2) ||
                    (userChoice === 2 && computerChoice === 1)) 
                    {
    let winner = userName;
  } else if ((computerChoice === 1 && userChoice === 3) || 
  (computerChoice === 3 && userChoice === 2) ||
  (computerChoice === 2 && userChoice === 1)) {
    let winner = computerChoice;
  } else {
    let winner = 0;
  }
  
  return announceWinner(winner, userName, userChoice, computerChoice);
}

function announceWinner(winner, userName, userChoice, computerChoice) {
  if (winner === userChoice) {
    console.log(`Congrats ${userName}! You are the winner. \n The computer picked ${computerChoice}, and you picked ${userChoice}!`);
  } else if (winner === computerChoice) {
    console.log(`Ohhhh. Sorry ${userName}, the computer picked ${computerChoice}, and you picked ${userChoice}!!`);
  } else {
    console.log(`IT'S A TIE, ${userName}!!!`);
  }
}

let sync = require("readline-sync");

getUserNameAndGreeting();


// LS Code using a while loop
// const readline = require('readline-sync');
// const VALID_CHOICES = ['rock', 'paper', 'scissors'];

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// function displayWinner(choice, computerChoice) {
//   prompt(`You chose ${choice}, computer chose ${computerChoice}`);

//   if ((choice === 'rock' && computerChoice === 'scissors') ||
//       (choice === 'paper' && computerChoice === 'rock') ||
//       (choice === 'scissors' && computerChoice === 'paper')) {
//     prompt('You win!');
//   } else if ((choice === 'rock' && computerChoice === 'paper') ||
//              (choice === 'paper' && computerChoice === 'scissors') ||
//              (choice === 'scissors' && computerChoice === 'rock')) {
//     prompt('Computer wins!');
//   } else {
//     prompt("It's a tie!");
//   }
// }

// while (true) {
//   prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
//   let choice = readline.question();

//   while (!VALID_CHOICES.includes(choice)) {
//     prompt("That's not a valid choice");
//     choice = readline.question();
//   }

//   let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
//   let computerChoice = VALID_CHOICES[randomIndex];

//   displayWinner(choice, computerChoice);

//   prompt('Do you want to play again (y/n)?');
//   let answer = readline.question().toLowerCase();
//   while (answer[0] !== 'n' && answer[0] !== 'y') {
//     prompt('Please enter "y" or "n".');
//     answer = readline.question().toLowerCase();
//   }

//   if (answer[0] !== 'y') break;
// }