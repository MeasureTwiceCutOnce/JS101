function sumSquareDifference(num) {
    let numArr = Array(num).fill(0);
    // let numArray = [];
    // for loop
    // for (let i = 1; i <= num; i++) {
    //     numArray.push(i)
    // }
    return numArr;
    // return `${squreOfTheSum(numArray) - sumOfTheSquares(numArray)}\n`;
}
function squreOfTheSum(array) {

    return (array.reduce((a,b) => {
        a += b
        return a
    }))**2;
}
function sumOfTheSquares(array) {
    return array.reduce((a,b) => {
        a += b**2;
        return a;
    });
}
console.log(
sumSquareDifference(3),      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10),     // 2640
sumSquareDifference(1),      // 0
sumSquareDifference(100),    // 25164150
)