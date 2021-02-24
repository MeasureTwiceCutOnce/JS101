// Here the offense is the same as defense, so we use the same function. However, an if statement is added which checks to see if defense is needed first. If not, then the computer can go on the offense.

function computerChoosesSquare(board) {
    let square;

    // defense first
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }

    // offense
    if (!square) {
      for (let index = 0; index < WINNING_LINES.length; index++) {
        let line = WINNING_LINES[index];
        square = findAtRiskSquare(line, board, COMPUTER_MARKER);
        if (square) break;
      }
    }

    // just pick a random square
    if (!square) {
      let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
      square = emptySquares(board)[randomIndex];
    }

    board[square] = COMPUTER_MARKER;
  }