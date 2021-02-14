// Here the LS team made a nested array using a for loop and then pushed the numbers into that array using a nested for loop. I did the same with my nested for loop, however, I did not create a nested array in which to put it in. I know you can do this simplier with the map technique. Standby.

function transpose(matrix) {
    let transposed = [];

    for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
      transposed.push([]);
    }

    for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
      for (let colIdx = 0; colIdx < 3; colIdx += 1) {
        transposed[colIdx].push(matrix[rowIdx][colIdx]);
      }
    }

    return transposed;
  }

//   Coen using the forEach
function transpose(matrix) {
    let newMatrix = [[], [], []];

    matrix.forEach((row, rowIdx) => {
      row.forEach((column, columnIdx) => {
        newMatrix[columnIdx].push(matrix[rowIdx][columnIdx]);
      });
    });

    return newMatrix;
  }
//   JOEY! Used the map in a map method that I wanted to do originally. So the missing piece that didn't allow mine to work was not using the second map's element construct. Another mistake I made was using the push method on a new array because of the fact that a map in a map will create a nested array for you.
function transpose(matrix) {
    return matrix.map((subarray, index) =>
      subarray.map((_, secondIndex) => {
        return matrix[secondIndex][index];
      })
    );
  }
//   Colin gave another more concise version of the double map technique
let transpose = matrix => {
    return matrix.map((el, i1) => {
      return matrix.map((el, i2) => matrix[i2][i1]);
    })
  }

//   Bilal below
let matrix = [[1, 5, 8], [4, 7, 2], [3, 9, 6]];
let result = [[],[],[]];

function transpose(m) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result[i][j] = m[j][i];
    }
  }
  return result;
}