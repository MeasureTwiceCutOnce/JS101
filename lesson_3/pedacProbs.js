//

// input str
// output new str

// rules
// just strings?
// spacing?
// where are we starting? 0 or 1

function everyOtherWord(str) {
  let newString = [ ];
  let split = str.split(" ");
  // console.log(split);

  for (let i = 0; i < split.length; i + 2) {
    newString.push(split[i]).join(" ");
  }
  return newString;
}

console.log(everyOtherWord("There are only two ways to skin a cat."));



// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// function substrings(str) {
//   let result = [];
//   let startingIndex = 0;

//   while (startingIndex <= str.length - 2) {
//     let numChars = 2;
//     while (numChars <= str.length - startingIndex) {
//       let substring = str.slice(startingIndex, startingIndex + numChars);
//       result.push(substring);
//       numChars += 1;
//     }

//     startingIndex += 1;
//   }

//   return result;
// }

// function isPalidrome(str) {
//   return str === str.split('').reverse().join('');
// }

// function palindromeSubstrings(str) {
//   let result = [];
//   let substringsArr = substrings(str);

//   substringsArr.forEach(substring => {
//     if (isPalidrome(substring)) {
//       result.push(substring);
//     }
//   });

//   return result;
// }

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
// console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
// console.log(palindromeSubstrings("palindrome")); // []
// console.log(palindromeSubstrings(""));           // []


// // PROBLEM:

// // Given a string, write a function changeMe which returns the same
// // string but with all the words in it that are palindromes uppercased.

// // changeMe("We will meet at noon") == "We will meet at NOON"
// // changeMe("") == ""


// function changeMe(str) {
//   let array = str.split(" ");
// // console.log(array);
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length % 2 === 0 || array[i].length <= 1) {
//       continue;
//     }

//     let front = array[i].slice(0,(Math.floor(array[i].length / 2) + 1));
//     let end = array[i].slice((Math.floor(array[i].length / 2))).split("").reverse().join("");
//     array[i];

//     if (front === end) {
//       array[i].toUpperCase();
//       console.log(array.join(" "))
//     }
//   }
// }
// changeMe("No palindromes here");
// changeMe("I LOVE my mom and dad equally");
// changeMe("We will meet at noon") ;