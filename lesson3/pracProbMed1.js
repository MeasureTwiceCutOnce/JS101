function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
console.log(bar(foo()));

// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }

// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// // console.log(paper);



// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }

// console.log(messWithDemographics(munsters));
// console.log(munsters);
// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);

// let nanArray = [NaN];

// console.log(isNaN(nanArray));

// console.log(parseFloat(0.3) + parseFloat(0.6));
// console.log(0.3 + 0.6 === 0.9);

// #4 Alyssa and her buffer
// Yes, she needs her buffer to follow a FIFO method which would require the array to stay in tack so that the index would serve as the "order keeper". The concat method will turn the array into a string and just add the next element which would make it impossible to keep order as the array would now be just one long string.

// //Debugging

// function factors(number) {
//   let divisor = number;
//   let factors = [];

//  while (divisor > 0) {
//    if (number % divisor === 0) {
//      factors.push(divisor);
//     }
//     divisor--;
//   }
//  return factors;
// }

// console.log(factors(3));
// console.log(factors(21));
// console.log(factors(9));
// console.log(factors(-1));



//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }



// // Case swap

// let munstersDescription = "The Munsters are creepy and spooky.";

// console.log(
// munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join(""));

// let newArray = munstersDescription.split(" ");
// console.log(newArray);
// for (let i = 0; i < newArray.length; i++) {
//   console.log(newArray[i][0].toLowerCase() + newArray[i].slice(1).toUpperCase());

// }
// let i = 0;
// while (i < newArray.length) {
//   console.log(newArray[i][0].toLowerCase() + newArray[i].slice(1).toUpperCase());
//   i++;

// }



// // #1 ASCII art

// let string = "The Flintstones Rock!";

// for (let i = 0; i < 10; i++) {
//   // console.log(string);
//   console.log(string.padStart(string.length + (1 + i), " "));
// }

// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flinstones Rock!");
// }