// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:
function palindromeSubstrings(str) {
  let array = str.split("")
  let reverseArray = str.split("")




}
console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]






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