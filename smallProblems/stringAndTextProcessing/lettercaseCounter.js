function letterCaseCount(string) {
    let obj = {
        uppercase : 0,
        lowercase : 0,
        neither : 0
    };
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    string.split("").map(char => {
        if (uppercase.includes(char)) {
            obj.uppercase++;
        } else if (lowercase.includes(char)) {
            obj.lowercase++;
        } else {
            obj.neither++;
        }
        return obj
    })
    // obj.case = 1;

    console.log(obj)
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

// The LS answer below is interesting because they made the complete object before iterating over the string and then just added a number to the value. I wanted to do it in the case where we don't know what is in the string and had to create those things ourselves. That is new to me that you can select lowercase letters simplet by using a comparison operator, but I guess that makes sense since the letter is a distinguished figure like a digit. Also, it is nice to see my logic was mostly correct.
// function letterCaseCount(string) {
//     let counts = { lowercase: 0, uppercase: 0, neither: 0 }

//     for (let index = 0; index < string.length; index += 1) {
//       let char = string[index];
//       if ((char >= 'a') && (char <= 'z')) {
//         counts.lowercase += 1;
//       } else if ((char >= 'A') && (char <= 'Z')) {
//         counts.uppercase += 1;
//       } else {
//         counts.neither += 1;
//       }
//     }

//     return counts;
//   }

// //   The LS answer below is really smooth how they just made the target letters a string and then returned the string.length in an obj format. Very cool.
// function letterCaseCount(string) {
//     let lowercaseChars = string.match(/[a-z]/g) || [];
//     let uppercaseChars = string.match(/[A-Z]/g) || [];
//     let neitherChars = string.match(/[^a-z]/gi) || [];

//     return {
//       lowercase: lowercaseChars.length,
//       uppercase: uppercaseChars.length,
//       neither: neitherChars.length
//     };
//   }


// Wes was able to use reduce , but he also had to use a prefab object in order to add and subtract numbers from.
/*
for letterCaseCount
1. SET freqDist to
  - 'lowercase': 0
  - 'uppercase': 0
  - 'neither': length of input string
2. SET arrayOChar to string split by characters
3. WHILE there are elements in arrayOChar
  - IF element is both alpha and lowercase
    - SET 'lowercase' to current value plus 1
    - SET 'neither' to current value minus 1
    ELSE if element is both alpha and uppercase
    - SET 'uppercase' to current value plus 1
    - SET 'neither' to current value minus 1
  - RETURN freqDist
4. RETURN freqDist
*/

let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

let upperAlpha = lowerAlpha.toUpperCase();

function letterCaseCount(stringP) {
  return stringP.split('').reduce((acc, ele) => {
    if (lowerAlpha.includes(ele)) {
      acc['lowercase'] += 1;
      acc['neither'] -= 1;
    } else if (upperAlpha.includes(ele)) {
      acc['uppercase'] += 1;
      acc['neither'] -= 1;
    }
    return acc;
  }, {lowercase: 0, uppercase: 0, neither: stringP['length']});
}

// I also like Sam's answer below.
function letterCaseCount(str) {
    let count = { lowercase: 0, uppercase: 0, neither: 0 };

    str.split('').forEach(char => {
      if (char.toUpperCase() === char.toLowerCase()) count.neither += 1;
      else if (char === char.toUpperCase()) count.uppercase += 1;
      else count.lowercase += 1;
    });

    return count;
  }