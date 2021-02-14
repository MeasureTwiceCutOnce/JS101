let matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
  ];

function tranpose(array) {
    // let newArray = [[],[],[]];

    // for (let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < array[i].length; j++) {
    //         newArray[i].push(matrix[j][i])
    //     }
    // }
    // return newArray;

    return array.map((subArray, i) => {
        return subArray.map((_, j) => {
            return matrix[j][i]
        })
    })

}
console.log(tranpose(matrix));
