// My answer was almost correct here. My line thirteen matched and also my new array was the same. It looks like I messed up in two places: line 11 and 12 I think I put my limits incorrectly, and I did not include a the for loop on line 17 where it looks like it is reversing each row, but I can't understand why they would do that.

function rotate90(matrix) {
    let rotated = [];
    let newRowsCount = matrix[0].length;

    for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
      rotated.push([]);
    }

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
      for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
        rotated[colIdx].push(matrix[rowIdx][colIdx]);
      }
    }

    for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
      rotated[rowIdx].reverse();
    }

    return rotated;
  }



//   I like how coen used the unshift method instead of the reverse which I still don't quite understand. I really need to learn how to debug, because I would like to see the computer computations one at a time to see where my code would go off and not just get exception errors.
function rotate90(matrix) {
    let newMatrix = [];

    for (let idx = 0; idx < matrix[0].length; idx += 1) {
      newMatrix.push([]);
    }

    matrix.forEach((subArray, subIdx) => {
      subArray.forEach((num, numIdx) => {
        newMatrix[numIdx].unshift(num);
      });
    });

    return newMatrix;
  }
