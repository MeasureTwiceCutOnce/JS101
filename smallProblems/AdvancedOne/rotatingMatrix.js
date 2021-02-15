// let matrix = [
//     [1, 5, 8],
//     [4, 7, 2],
//     [3, 9, 6],
//   ];

//   3  4  1
//   9  7  5
//   6  2  8

function rotate90(matrix) {
    let transposed = [];

    for (let rowIdx = matrix[0].length; rowIdx >= 0; rowIdx--) {
      transposed.push([]);
    }

    // for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    //   for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
    //     transposed[colIdx].push(matrix[rowIdx][colIdx]);
    //   }
    // }
    for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
        for (let rowIdx = matrix.length; rowIdx >= 0; rowIdx--) {
            transposed[colIdx].push(matrix[rowIdx][colIdx])
        }
    }
    return transposed;
  }

console.log(rotate90([
        [1, 5, 8],
        [4, 7, 2],
        [3, 9, 6],
      ]));
      let matrix1 = [
        [1, 5, 8],
        [4, 7, 2],
        [3, 9, 6],
      ];

      let matrix2 = [
        [3, 7, 4, 2],
        [5, 1, 0, 8],
      ];

      let newMatrix1 = rotate90(matrix1);
      let newMatrix2 = rotate90(matrix2);
      let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

      console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
      console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
      console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]