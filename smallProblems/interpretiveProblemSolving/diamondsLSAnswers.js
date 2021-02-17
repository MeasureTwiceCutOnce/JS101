// // I had a hard time on this problem and the LS answer seems very understandable, so I am wondering why I had a problem.

// function diamond(n) {
//     // numberSequence(n).forEach(number => {
//     //   console.log(`${" ".repeat((n - number) / 2)}${"*".repeat(number)}`);
//     // });

//     for (let number of n) {
//         console.log(`${" ".repeat((number - 1))}${"*".repeat(number )}${" ".repeat(n + number)}${"*".repeat(number - number)}`)
//     }

//   }

//   function numberSequence(n) {
//     let result = [];
//     let increment = 2;
//     let number = 1;
// // I am loving this logic here. Increment the numbers by two and push them to a new array, and then once that number variable hits the same as the target number, then switch the number to negative two until it gets to zero. Genius. I love it. So cool.
//     while (number > 0) {
//       result.push(number);
//       if (number === n) {
//         increment = -2;
//       }
//       number += increment;
//     }

//     return result;
//   }

//   console.log(diamond(numberSequence(7)))

// //   Coen's answer
// function hollowDiamond(n) {
//     let increment = 2;

//     for (let idx = 1; idx > 0; idx += increment) {
//       if (idx === 1) {
//         console.log(' '.repeat((n - idx) / 2) + '*');
//       } else {
//         console.log(' '.repeat((n - idx) / 2) + '*' + ' '.repeat(idx - 2) + '*');
//       }

//       if (idx === n) increment = -2;
//     }
//   }
function hollowDiamond(n) {
    let leftPad = Math.floor(n / 2);
    let leftIncrement = -1;
    let centrePad = 1;
    let centerIncrement = 2;

    for (let idx = 0; idx < n; idx += 1) {
      if (leftPad === 0) leftIncrement = 1;
      if (centrePad === n - 2) centerIncrement = -2;

      if (idx === 0 || idx === n - 1) {
        console.log(`${' '.repeat(leftPad)}*`);
        leftPad += leftIncrement;
      } else {
        console.log(`${' '.repeat(leftPad)}*${' '.repeat(centrePad)}*`);
        leftPad += leftIncrement;
        centrePad += centerIncrement;
      }
    }
  }

  hollowDiamond(9)
//   Below is Seo's answer and I like how slick she made hers by increasing the empty space between two astericks and then for the top and bottom making the only the asterick printed.

function hollowDiamond(num) {
    let increment = 2;
    for (let i = 1; i <= num; i+=increment) {
        if (i < 0) break;
        const emptySpaces = ' '.repeat((num - i) / 2);
        let asterisks;
        if (i === 1) {
            asterisks = '*';
        } else {
            if (increment === 2) {
                asterisks = `*${' '.repeat(i - increment)}*`
            } else {
                asterisks = `*${' '.repeat(i + increment)}*`
            }
        }
        console.log(`${emptySpaces}${asterisks}`);
        if (i === num) {
            increment = -2;
        }
    }
// }Sam below
function diamond(size) {
    let diamondArr = [[0, size]];

    for (let index = size - 2; index > 0; index -= 2) {
      let spacesStars = [(size - index) / 2, index];
      diamondArr.unshift(spacesStars);
      diamondArr.push(spacesStars);
    }

    diamondArr.forEach(keyVal => {
      let [spacesCount, starsCount] = keyVal;
      console.log(' '.repeat(spacesCount) + '*'.repeat(starsCount));
    });
  }
//Brendan
function diamond(number) {
    let sequence = generateSequence(number);

    sequence.forEach((numbOfStars) => {
      let lineLength = ((number - numbOfStars) / 2) + numbOfStars;
      let starLine = setStarLine(numbOfStars);

      starLine = starLine.padStart(lineLength, " ");
      console.log(starLine);
    });
  }

  function setStarLine(numbOfStars) {
    const STAR = "*";
    let line = "";

    for (let i = 0; i < numbOfStars; i++) {
      line += STAR;
    }
    return line;
  }

  function generateSequence(number) {
    let sequence = [];

    for (let starCount = 1; starCount <= number; starCount += 2) {
      sequence.push(starCount);
    }
    return sequence.concat(sequence.slice(0, sequence.length - 1).reverse());
  }