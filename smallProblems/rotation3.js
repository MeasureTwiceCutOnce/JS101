//Here is a prime example of overthinking a problem.
function maxRotation(number) {
  let numberDigits = String(number).length;
  for (let count = numberDigits; count >= 2; count--) {
    // I was close because I was trying to do this recursive feature.
    number = rotateRightmostDigits(number, count);
  }
  return number;
}
function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}
// My answer below is really trying to reinvent the wheel but the LS answer above is just taking the old answer linking functions together.

function maxRotation(num) {
    let rotationIndex = 0;
    let numberString = String(num);
    let resultString = "";

    while (rotationIndex < numberString.length) {
        let firstPart = numberString.slice(0, rotationIndex);
        if (rotationIndex === 0) {
            firstPart = numberString.slice(0);
        }
        let secondPart = numberString.slice(rotationIndex);
        let resultString = firstPart + rotateString(secondPart);
        rotationIndex++;
        numberString = resultString;
    }

    return Number(resultString);
  }

  function rotateString(string) {
    return string.slice(1) + string[0];
  }
console.log(
maxRotation(735291),          // 321579
maxRotation(3),               // 3
maxRotation(35),              // 53
maxRotation(105),             // 15 -- the leading zero gets dropped
maxRotation(8703529146),      // 7321609845
)
// function maxRotation(num) {
//     let numString = String(num);
//     let rotationIndex = 0;
//     let rotatedString = '';
//     let rotationChar = '';

//     while (rotationIndex < numString.length) {

//         for (let idx = 0; idx < numString.length; idx++) {
//             if (idx === rotationIndex) {
//                 rotationChar = numString[idx];
//             } else {
//                 rotatedString += numString[idx];
//             }
//         }
//         rotationIndex++;
//         numString = rotatedString + rotationChar;
//     }
//     return Number(numString)

// }
// console.log(
// maxRotation(735291),          // 321579
// maxRotation(3),               // 3
// maxRotation(35),              // 53
// maxRotation(105),             // 15 -- the leading zero gets dropped
// maxRotation(8703529146),      // 7321609845
// )
