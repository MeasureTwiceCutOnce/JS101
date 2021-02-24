// I was very close to having this. I knew I needed to filter the array and find if the length was equal to two. In which case, the square in the that array with the " " would be the square for the game to choose.  I was also correct in that I was supposed to make this its own function and use it in the computerChooses portion of the game.
function findAtRiskSquare(line, board) {
    let markersInLine = line.map(square => board[square]);

    if (markersInLine.filter(val => val === 'X').length === 2) {
      let unusedSquare = line.find(square => board[square] === ' ');
      if (unusedSquare !== undefined) {
        return unusedSquare;
      }
    }

    return null;
  }


//   B elow is the portion that goes into the computerChooses portion
function computerChoosesSquare(board) {
    let square;
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board);
      if (square) break;
    }

    if (!square) {
      let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
      square = emptySquares(board)[randomIndex];
    }

    board[square] = COMPUTER_MARKER;
  }
//Below with constants
function findAtRiskSquare(line, board) {
    let markersInLine = line.map(square => board[square]);

    if (markersInLine.filter(val => val === HUMAN_MARKER).length === 2) {
      let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
      if (unusedSquare !== undefined) {
        return unusedSquare;
      }
    }

    return null;
  }