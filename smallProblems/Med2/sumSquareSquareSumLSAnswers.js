// The LS answer below is nice and concise whereas my answer was much lengthier, though, my answer was right. It really shows how different answer can be and why I love seeing these problems because it is like looking at art. People are make different art and all art is unique and beautiful in some way, and of course those who are truely masters at their art, can produce some of the most widely acclaimed pieces.

function sumSquareDifference(count) {
    let sum = 0;
    let sumOfSquares = 0;
    for (let number = 1; number <= count; number++) {
      sum += number;
      sumOfSquares += Math.pow(number, 2);
    }
    return Math.pow(sum, 2) - sumOfSquares;
  }

//  I like how Coen below made his array using the keys method and map. A little on the too complicated side, but still cool.
function sumSquareDifference(num) {;
    let count = [...Array(num).keys()].map(num => num + 1); // creates [1, 2, 3]
    let squareOfSum = count.reduce((total, num) => total + num, 0) ** 2;
    let sumOfSquare = count.reduce((total, num) => total + num ** 2, 0);

    return squareOfSum - sumOfSquare;
  }

  sumSquareDifference(3);      // 22
//   Sam's answer below is interesting how he made his array using the fill method which I thought would fill the array with one particular element repeated. WOW! Ok I see what is happening. He is making an array of zeros but then uses the reduce method to use the index as the number and then just increases it by one each iteration because he purposely left out the curr variable which would have been another zero, but since he left it off, he just adds his next number which is one.
function sumSquareDifference(number) {
    let numArr = Array(number).fill(0);
    let squareOfSums = (numArr.reduce((acc, _, idx) => acc + idx + 1, 0)) ** 2;
    let sumOfSquares = numArr.reduce((acc, _, idx) => acc + ((idx + 1) ** 2), 0);
    return squareOfSums - sumOfSquares;
  }