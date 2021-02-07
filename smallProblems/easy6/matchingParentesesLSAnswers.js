// LS had a cool way of figuring this one out. They basically looked to see if the number of parentheses balanced each other out or there increase when left was counted and decreased when the right was counter. I just checked to see if the numbers were equal.
// function isBalanced(string) {
//     let parens = 0;
//     for (let idx = 0; idx < string.length; idx++) {
//       if (string[idx] === "(") {
//         parens += 1;
//       } else if (string[idx] === ")") {
//         parens -= 1;
//       }
//       if (parens < 0) return false;
//     }
//     return parens === 0;
//   };
// let hash = { '(': 1, ')': 1 }

// console.log(hash["("])


// Medic tried the further exploration and I think he did a good job handeling it because he seperated the characters from the function by taking them as an argument. That definitely makes this problem a lot more approachable than what I was doing which was trying to create hash table, though I think my answer is better.
function isBalancedEx(string,char) {

    let charPair = 0;
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] === char[0]) {
        charPair += 1;
      }
      else if (string[i] === char[1]) {
        charPair -= 1;
      }
      if (charPair < 0) return false;
    }
    return charPair === 0;
  }
  console.log(
      isBalancedEx('[string]', ['[',']']), `[]`,
 isBalancedEx("What is) thi``','`'s?",["`"]), `backtick`,
isBalancedEx("What is) thi<><><><>>s?",["<",">"]), `<>`,
isBalancedEx("What is) thi~~~'')()()[][s?",["[","]"]), `[]`
)