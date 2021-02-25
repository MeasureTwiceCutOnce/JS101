// // const readline = require("readline-sync");

// // const INITIAL_MARKER = " ";
// // const HUMAN_MARKER = "X";
// // const COMPUTER_MARKER = "O";

// // function prompt(msg) {
// //     console.log(`=> ${msg}`);
// //   }

// // function displayBoard() {
// //     // console.log('     |     |');
// //     // console.log('     |     |');
// //     // console.log('     |     |');
// //     // console.log('-----+-----+-----');
// //     // console.log('     |     |');
// //     // console.log('     |     |');
// //     // console.log('     |     |');
// //     // console.log('-----+-----+-----');
// //     // console.log('     |     |');
// //     // console.log('     |     |');
// //     // console.log('     |     |');
// //     // console.log('');
// //     console.clear();
// //     console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

// //     console.log('');
// //     console.log(` ${board["1"]} | ${board["2"]} | ${board["3"]} `);
// //     console.log('---+---+---');
// //     console.log(` ${board["4"]} | ${board["5"]} | ${board["6"]} `);
// //     console.log('---+---+---');
// //     console.log(` ${board["7"]} | ${board["8"]} | ${board["9"]} `);
// //     console.log('');
// // }

// // function initializeBoard() {
// //     let board = {};

// //     for (let i = 1; i <= 9; i++) {
// //         board[String(i)] = INITIAL_MARKER;
// //     }
// //     return board;
// // }


// // function emptySquares(board) {
// //     return Object.keys(board).filter(key => board[key] === " ");
// //   }

// // function playerChoosesSquare(board) {
// //     let square;

// //     while (true) {
// //         prompt(`Choose a square ${emptySquares(board).join(", ")}:    `)
// //         square = readline.question().trim();

// //         if (emptySquares(board).includes(square)) {
// //             break;
// //         } else {
// //             prompt("Sorry, that is not a valid choice")
// //         }
// //     }

// //     board[square] = HUMAN_MARKER;
// // }

// // function computerChoosesSquare(board) {
// //     let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

// //     let square = emptySquares(board)[randomIndex];
// //     board[square] = COMPUTER_MARKER;
// // }

// // function boardFull(board) {
// //     return emptySquares(board).length === 0;
// // }

// // function someoneWon(board) {
// //     return !!detectWinner(board);
// // }

// // function detectWinner(board) {
// //     let winningCombos = [[1, 2, 3],
// //         [4, 5, 6],
// //         [7, 8, 9],
// //         [1, 4, 7],
// //         [2, 5, 8],
// //         [3, 6, 9],
// //         [1, 5, 9],
// //         [3, 5, 7]]

// //     for (let line = 0; line < winningCombos.length; line++) {
// //         let [sq1,sq2,sq3] = winningCombos[line]

// //         if (
// //             board[sq1] === HUMAN_MARKER &&
// //             board[sq2] === HUMAN_MARKER &&
// //             board[sq3] === HUMAN_MARKER
// //         ) {
// //             return "Player";
// //         } else if (
// //             board[sq1] === COMPUTER_MARKER &&
// //             board[sq2] === COMPUTER_MARKER &&
// //             board[sq3] === COMPUTER_MARKER
// //         ) {
// //             return "The computer"
// //         }
// //     }
// //     return null;
// // }

// // while (true) {
// //     let board = initializeBoard();

// //     while (true) {
// //         displayBoard(board);

// //         playerChoosesSquare(board);
// //         if (someoneWon(board) || boardFull(board)) break;

// //         computerChoosesSquare(board);
// //         if (someoneWon(board) || boardFull(board)) break;
// //     }

// //     displayBoard();

// //     if (someoneWon(board)) {
// //         prompt(`${detectWinner(board)} won!`)
// //     } else {
// //         prompt(`It's a tie!!!`)
// //     }

// //     prompt('Play again? (y or n)');
// //     let answer = readline.question().toLowerCase()[0];
// //     if (answer !== 'y') break;

// // }
// // prompt(`Thanks for playing.`)
// //     // function isAllChosen(array) {
// // //     array.every(choice => choice !== " ")
// // // }

// // // computerChoosesSquare(board);
// // // displayBoard(board);

// // // let isWinner = false;

// // // while (!isWinner) {

// // //     playerChoosesSquare(board);
// // //     displayBoard(board);

// // //     let playerChoices = Object.values(board);

// // //     if (isAllChosen(playerChoices)) {
// // //         isWinner = true;
// // //     } else {
// // //         console.log(`Keep going.`)
// // //     }
// // // }

const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const seriesWin = 5;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

while (true) {
  let board = initializeBoard();
  let playerWins = 0;
  let computerWins = 0;

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    if (detectWinner(board) === "Player") {
        playerWins++;
    } else {
        computerWins++;
    }
  } else {
    prompt("It's a tie!");
  }

  prompt(`The player has won ${playerWins}/5 games\nwhile the computer has won ${computerWins}/5 games.\n\nPlay again?`);
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

function joinOr(arr, delimiter = ', ', word = 'or') {
    switch (arr.length) {
      case 0:
        return '';
      case 1:
        return `${arr[0]}`;
      case 2:
        return arr.join(` ${word} `);
      default:
        return arr.slice(0, arr.length - 1).join(delimiter) +
               `${delimiter}${word} ${arr[arr.length - 1]}`;
    }
  }


// My function below worked for the most part, but it was returning a comma after the and or "or" which I could not figure out how to get rid of. So I was close in that I used the splice method to push in the "and" just before the end, but that ended up putting an extra comma where I didn't want it to go. The LS answer above used the slice method and then concatenated it with the desired ending.
// function joinOr(array, delimiter, joiner) {
//     if (array.length === 2) {
//         return array.join(joiner)
//     }
//     if (array.length > 2) {
//         // splice in "and" if the argument is indicated, otherwise splice in "or" in the array.length - 2
//         if (joiner) {
//             return array.splice(array.length - 1, 0, joiner)

//         }
//         array.splice(array.length - 1, 0, "or")
//         return array.join(delimiter)


//     }
//     return array.join(",");
// }
// console.log(
// joinOr([1,1],": ", " and ")
// )
prompt('Thanks for playing Tic Tac Toe!');