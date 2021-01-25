// Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

function triangle(num) {
    let starsPerRow = 0;
    for(let rowCount = (num + 1); rowCount > 0; rowCount--) {
        console.log(("*".repeat(starsPerRow).padStart(num," ")));
        starsPerRow++;
    }
}

// Below is one of my first attempts at this problem. I later did better as I just broke down what it is I am trying to do. I needed to just first make some rows of stars. That I labeled rowCount, then i needed to decrement those stars each row which I called starsPerRow. Finally, I added some padding which actually decremented along with the stars, so I didn't have to do any special math for it. Then I had to just add in the variable of the input from the user.
// let sub = 1;
// let targetLength = num + 1;
// let stars = "";

// while(targetLength >= 0) {
//     stars + "*".padStart(targetLength - sub, " ");
//     sub++;
// }
// console.log(stars)

// function summation(number) {
//     let sub = 1;
//     let totalStars = number;
//     let count = number;

//     while(count > 0) {
//         totalStars += number - sub;
//         count--;
//         sub++;
// }
//     return  totalStars;
// }


triangle(5);
triangle(3);
triangle(4);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// Wes Anderson's Answer


let readline = require('readline-sync');

function getUserInput(inputP) {
  return readline.question(inputP);
}

function impermissibleNumber(userInputP) {
  return Number.isNaN(Number(userInputP)) || Number(userInputP) <= 0;
}

function triangle(nP) {
  let numSpaces = nP;
  let numStars = 0;

  while (numSpaces >= 0) {
    console.log(`${" ".repeat(numSpaces)}${"*".repeat(numStars)}`);
    numSpaces -= 1;
    numStars += 1;
  }
}

console.clear();

let userInput = getUserInput("Enter a positive integer:\n");

while (impermissibleNumber(userInput)) {
  console.log("Whoops!");
  userInput = getUserInput();
}

let posInteger = Number.parseInt(userInput, 10);

triangle(posInteger);