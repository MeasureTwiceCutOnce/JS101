// I hate wasting time trying to fix code that is not close to being correct. This drives me crazy.

const matrix = [
    [1, 5, 8, 5],
    [4, 7, 2, 0],
    [3, 9, 6, 1]
  ];

function transpose(array) {
    if (array.length === array[0].length) {
        return matrix.map((el, i1) => {
            return matrix.map((el, i2) => matrix[i2][i1]);
          })
        } else if (array.length < array[0].length) {
            for (let i = 0; i <= array[0].length - array.length; i++) {
                array.push([]);
            }
            return matrix.map((el, i1) => {
                return matrix.map((el, i2) => matrix[i2][i1]);
              })
        }
    // array.fill([],array.length,array.length + (array[0].length - array.length))
    return array;
}


//   console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
//   console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]
console.log(
//   transpose([[1, 2, 3, 4]]),            // [[1], [2], [3], [4]]
//   transpose([[1], [2], [3], [4]]),      // [[1, 2, 3, 4]]
//   transpose([[1]]),                     // [[1]]

  transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]),
  // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

)