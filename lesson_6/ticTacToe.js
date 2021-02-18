const prompt = require('prompt-sync')();

function displayBoard() {
    // console.log('     |     |');
    // console.log('     |     |');
    // console.log('     |     |');
    // console.log('-----+-----+-----');
    // console.log('     |     |');
    // console.log('     |     |');
    // console.log('     |     |');
    // console.log('-----+-----+-----');
    // console.log('     |     |');
    // console.log('     |     |');
    // console.log('     |     |');
    // console.log('');
    console.log('');
    console.log(` ${board["1"]} | ${board["2"]} | ${board["3"]} `);
    console.log('---+---+---');
    console.log(` ${board["4"]} | ${board["5"]} | ${board["6"]} `);
    console.log('---+---+---');
    console.log(` ${board["7"]} | ${board["8"]} | ${board["9"]} `);
    console.log('');
}

function initializeBoard() {
    let board = {};

    for (let i = 1; i <= 9; i++) {
        board[String(i)] = " "
    }
    return board;
}

function playerChoosesSquare(board) {
    let square = prompt(`Choose a square [1-9]     `)
    board[square] = "X";
}

function computerChoosesSquare(board) {
    let square = Math.floor(Math.random() * 9) + 1;
    board[square] = "O";
}

// function isWinner(board) {
//     if (row or column or diagonal) {
//         display Winner "user"
//     }
// }



let board = initializeBoard();
displayBoard(board);

function isAllChosen(array) {
    array.every(choice => choice !== " ")
}

// computerChoosesSquare(board);
// displayBoard(board);

let isWinner = false;

while (!isWinner) {

    playerChoosesSquare(board);
    displayBoard(board);

    let playerChoices = Object.values(board);

    if (isAllChosen(playerChoices)) {
        isWinner = true;
    } else {
        console.log(`Keep going.`)
    }
}