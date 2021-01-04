// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// // You may assume that the input String will always contain at least two words.

// function penultimate(string) {
//   let newString = string.split(" ");
//   return newString.slice(-2,-1);
// }

// console.log(penultimate("I like to eat eat eat, apples and banananas."));
// console.log(penultimate("Launch School is great!"));
// console.log(penultimate("last word"));
// console.log(penultimate("To be, or not to be"));
// console.log(penultimate("I always get the last word"));

function returnMiddleWord(string) {
  let splitString = string.split(" ");

  for (i = 0; i < splitString.length; i++)
  if (typeof splitString[i] !== "string") {
    console.log(`Please only enter words.`)
  } else if (splitString.length < 2) {
    console.log(`Please enter a sentence that is longer than 2 words`)
  } else if (splitString.length % 2 === 0) {
    return splitString.slice(((splitString.length / 2) - 1), splitString.length / 2)
  } else {
    return splitString.slice(((splitString.length - 1) / 2), (((splitString.length - 1) / 2) + 1))
  }
}

console.log(returnMiddleWord("I like to eat eat eat, apples and banananas."));
console.log(returnMiddleWord("Launch School is great!"));
console.log(returnMiddleWord("last word"));
console.log(returnMiddleWord("To be, or not to"));
console.log(returnMiddleWord("I always get the last"));
console.log(returnMiddleWord("last"));
console.log(returnMiddleWord("I always get the last 23"));
