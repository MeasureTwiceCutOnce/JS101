const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function detectWinner() {
    let winningLines = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
      [1, 5, 9], [3, 5, 7]             // diagonals
    ];

    for (let line = 0; line < winningLines.length; line++) {
      let [ sq1, sq2, sq3 ] = winningLines[line];

      if (
          sq1 === HUMAN_MARKER &&
          sq2 === HUMAN_MARKER &&
          sq3 === HUMAN_MARKER
      ) {
        return 'Player';
      } else if (
          sq1 === COMPUTER_MARKER &&
          sq2 === COMPUTER_MARKER &&
          sq3 === COMPUTER_MARKER
      ) {
        return 'Computer';
      }
    }

    return null;
  }

  console.log(
      detectWinner(['X','X','X']),
      detectWinner([HUMAN_MARKER,HUMAN_MARKER,HUMAN_MARKER]),
      detectWinner([1,2,3]),
  )