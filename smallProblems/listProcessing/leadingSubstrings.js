// function leadingSubstrings(string) {
//     let newString = [];
//     let index = string.length;
//     let count = 1;

//     while (index >= 1) {
//         newString.push(string.slice(0,count));
//         index--;
//         count++;
//     }
//     console.log(newString)
// }
// function leadingSubstrings(str) {
//     let substr = '';
//     return str.split("").map(char => {
//         substr = substr + char;
//         console.log( substr);
//     });
// }
// // Above is Seohyn and below is Wes using reduce
// function leadingSubstrings(stringP) {
//     return stringP.split('').reduce((acc, _, idx, src) => {
//       acc.push(src.slice(0, (idx + 1)).join(''));
//       return acc;
//     }, []);
//   }
// function leadingSubstrings(str) {
//     let currentSubstring = "";
//     let allCharCombos = str.split("").map(char => {
//       currentSubstring += char;
//       return currentSubstring;
//     });
//   console.log(allCharCombos);
//   }
//   This is Brendan Leal's answer I think what is happening is that the map is running everytime and each time adding a character to the substring which makes it look like it is returning the string in pieces. Sam Clark gave the ansewr below using reduce. I wonder if these people are just starting to code or they have some background in it prior to now.

// function leadingSubstrings(str) {
//     let currentSubstring = "";
//     let allCharCombos = str.split("").map(char => {
//       currentSubstring += char;
//       return currentSubstring;
//     });
//   console.log(allCharCombos);
//   }


// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]