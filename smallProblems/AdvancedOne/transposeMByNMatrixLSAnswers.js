// I am kind of upset how easy this answer is and how I was not able to get it. The thirteenth line is a little tricky to understand and implement, however, besides that I should have been able to get this one. I like how they used variable names that really help to show what is going on in the function and that makes this problem more readable and easier to understand.

function transpose(matrix) {
    let transposed = [];
    let newRowsCount = matrix[0].length;

    for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
      transposed.push([]);
    }

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
      for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
        transposed[colIdx].push(matrix[rowIdx][colIdx]);
      }
    }

    return transposed;
  }

// Wes was able to use the reduce method and the forEach method and I am not understanding how he can call on the argument array inside the reduce function. I would think that inside the reduce function it is iterating over each element, yet he is taking the argument array and making another iteration.
function transpose(matrixParam) {
    let newMatrix = new Array(matrixParam[0]['length']);
    for (let idx = 0; idx < newMatrix['length']; idx += 1) {
      newMatrix[idx] = [];
    }
    return matrixParam[0].reduce((acc, _, idx) => {
      matrixParam.forEach((_, jdx) => {
        acc[idx].push(matrixParam[jdx][idx]);
      });
      return acc;
    }, newMatrix);
  }

//   Thankfully Collin below has written in a very clear and readable style. Thank you. I did similar with creating a matrix with rows the same length as the columns.
let transpose = matrix => {
    let newMatrix = [];

    for (let idx = 0; idx < matrix[0].length; idx++) {
      newMatrix.push([]);
    }

    matrix.forEach(subarray => {
      subarray.forEach((num, index) => {
        newMatrix[index].push(num);
      })
    })

    return newMatrix;
  };

//   While I can't look at the below answer right now, I think it looks like a smooth way to answer this question.
const transpose = arr => {
    let result = Array(arr[0].length).fill(0).map(_ => Array(arr.length).fill(0))
    return result.map((subArr, outerIndex) => {
    return subArr.map((_, innerIndex) => arr[innerIndex][outerIndex])
  });
  }