// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}
console.log(
crunch('ddaaiillyy ddoouubbllee'),    // "daily double"
crunch('4444abcabccba'),              // "4abcabcba"
crunch('ggggggggggggggg'),            // "g"
crunch('a'),                          // "a"
crunch(''),
);
// My second attemp;t was close as well, but not quite.

// function crunch(string) {
//   let singleString = [];
//   for (let i = 0; i < string.length; i++) {
//     if (singleString.includes(string[i])) {
//       i++;
//     } else {
//       singleString.push(string[i]);
//     }

//   }
//   return singleString;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""



// // // First Try
// // function crunch(string) {
// //   let singleString = [];
// //   string.split("").reduce((acc , cur) => acc == cur ? singleString.push(cur) : singleString.push(acc), 0);

// //   return singleString;
// // }

// // Boris' answer below seems what I was thinking about in one iteration
// function crunch(string) {
//   /* VALID INPUT CHECK */
//   if (typeof string !== 'string') {
//     console.log('You must pass a string as an argument.');
//     return;
//   }
//   let charsArray = string.split('');
//   let counter = 0;
//   / * Loop through the give string */
//   for (let charIdx = 0; charIdx < charsArray.length; charIdx += 1) {
//   /* Inner loop to compare
//   the current character with all the other characters in the string */
//     for (
//       let otherCharIdx = charIdx + 1;
//       otherCharIdx < charsArray.length;
//       otherCharIdx += 1
//     ) { /* If the characters are equal, increase the variable
//   that count the number of consequent equal characters */
//       if (charsArray[charIdx] === charsArray[otherCharIdx]) {
//         counter += 1; /* Next line ends the inner loop
//   when the characters are not equal,
//   so we can check the next character */
//       } else break;
//     } /* Remove consequent duplicate characters from the array and reset counter */
//     charsArray.splice(charIdx + 1, counter);
//     counter = 0;
//   }
//   return charsArray.join('');
// }