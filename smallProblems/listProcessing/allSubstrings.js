/*
for leadingSubstring
1. SET array to split string
2. SET idx to 0
3. WHILE array has elements
  - SET slash to slice of array from 0 to idx + 1
  - SET join to joined slash
  - SET accumulator to include join
  - RETURN accumulator
4. SET result to include accumulator
5. SET string to string with missing first character
6. GET substrings of string

for substrings
IF the length of the input string is not 0
  - GET leadingSubstrings of string
ELSE
  - PRINT result (if you don't want the result to be an array of arrays,
  then line 39 from `console.log(result);` to `console.log(result.flat());`)
*/

// let result = [];

// function leadingSubstrings(stringP) {
//   result.push(
//     stringP.split('').reduce((acc, _, idx, src) => {
//       acc.push(src.slice(0, (idx + 1)).join(''));
//       return acc;
//     }, [])
//   );
//   stringP = stringP.slice(1);
//   substrings(stringP);
// }

// function substrings(stringP) {
//   if (stringP['length'] !== 0) {
//     leadingSubstrings(stringP);
//   } else {
//     console.log(result.flat());
//   }
// }

substrings('abcde');
// The above answer is from Wes and this is what I was thinking that I wanted to do.
// function substrings(str) {
//   return str.split("").reduce((acc, _, index) => {
//       return acc.concat(leadingSubstrings(str.slice(index, str.length)));
//   }, []);
// }
// Above is the answer by Seohyun which is understandable, but I don't know why I am not getting by now. I keep seeing this reduce method, but it keeps aluding me when I want to use it. Doing the recursion in the place where curr is something that I would have not thought of, but I knew I needed to do something the like.
// function substrings(string) {
//         let currentSubstring = "";

//         while (currentSubstring.length > 0) {

//             let allCharCombos = string.split("").map(char => {
//                 currentSubstring += char;
//                 return currentSubstring;
//             });

//             substrings(Array.from(currentSubstring).shift().join(""));
//             console.log(allCharCombos);
//         }
// }

// function substrings(string) {
//     let newString = [];
//     let rightPointer = 1;
//     let leftPointer = 0;

//     while (leftPointer < string.length) {

//         while (rightPointer <= string.length) {
//             newString.push(string.substring(leftPointer,rightPointer));
//             rightPointer++;
//         }
//         leftPointer++;

//     }
//     console.log(newString)
// }
// My try above did not work but I think it is due to some error in my syntax. Maybe I was supposed to return something somewhere but I didn't know what ot return. The answer below is very similar in that they used the substring method just like me, but they used it correctly.

function substrings(string) {
    let substrings = [];
    for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
      let substring = string.substring(startIndex);
      substrings =substrings.concat(leadingSubstrings(substring));
    }

    return substrings;
  }

  function leadingSubstrings(string) {
    let substrings = [];
    for (let length = 1; length <= string.length; length += 1) {
      substrings.push(string.slice(0, length));
    }

    return substrings;
  }

  // My attempt below took another student's map answer and tried to add on another function in order to get the last few substrings. It works except it doesn't return a string and it is not in an array form.
//   function substrings(str) {
//     let substr = '';
//     str.split("").map(char => {
//         substr = substr + char;
//         console.log( substr);
//       });
//       return [].concat(substrings(str.slice(1)))
//     // while (str.slice().length >= 1) {

//     // }
// }
// function substrings(string) {
//   let newString = [];
//   string.split("")
//         .map((letter, idx)=> {
//           return newString.push(string.slice(0,idx + 1)), newString.push(string.slice(1,idx + 1)), newString.push(string.slice(2,idx + 1)),newString.push(string.slice(3,idx + 1)),newString.push(string.slice(4,idx + 1))
//         })

//         console.log(newString);
// }
substrings('abcde');
// console.log(Array.from('abcde').shift())
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]