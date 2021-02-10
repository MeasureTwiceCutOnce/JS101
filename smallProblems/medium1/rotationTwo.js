// While my answer below was correct, I think I went about in the working too hard fashion.I really could have condensed a lot of this.
function rotateRightmostDigits(num,digit) {
    let targetNum = Math.floor((((num % 10 ** digit) / 10 ** digit)) * 10);
    let sNum = num.toString().split("");
    let realDigits = sNum.map(Number);
    let index = realDigits.indexOf(targetNum)
    let rotatedNum = realDigits.slice(index)
    let slicedArray = realDigits.splice(index,1)
    // Using a while loop that counts down after each rotation.
    // let count = digit;
    // while (count > 0) {
    //     num / 10;
    //     count--;
    // }
    // rotatedNum[0]


    return realDigits.join("") + Number(targetNum)
}
console.log(
rotateRightmostDigits(735291, 1),      // 735291
rotateRightmostDigits(735291, 2),      // 735219
rotateRightmostDigits(735291, 3),      // 735912
rotateRightmostDigits(735291, 4),      // 732915
rotateRightmostDigits(735291, 5),      // 752913
rotateRightmostDigits(735291, 6),      // 352917
)
// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.