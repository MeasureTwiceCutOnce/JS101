
function palindromes(string) {
    let allPossibilities = substrings(string);
    let paliArray = [];

    allPossibilities.forEach(word => {
        let p1 = 0;
        let p2 = word.length - 1;

            while (p1 < p2) {
                if (word[p1] !== word[p2]) {
                    return false;
                }
                p1++;
                p2--;
            }

            return word.length === 1 ? "" : paliArray.push(word);
    })
    // console.log(allPossibilities)
    return paliArray;
    // let map = string.split("").map(char => {
    //     return isValidChar(char) ? char : [];
    // })
    // console.log(allPossibilities);
}
// function isValidChar(char) {
//     let validChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     return (validChar.indexOf(char) > -1);
// }
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
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada","adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did", "-madam-", "madam", "ada", "oo" ]
console.log(palindromes('knitting cassettes'));// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// THIS is exactly what I am talking about. My code above did work and but it is very verbose while the code below is from LS and it is very short. My code is faster because this is the best way to check for a Palindrome according to leetcode, but it is wordy. So like CS50 was saying you have to constantly be looking to weigh in on how much you want to juggle use of coder time, program time, or memory space. For no reason am I mentioning this, but I did do the short palidrome search answer before, but I wanted to see if I could do it with faster code method here.
function isPalindrome(word) {
    return word.length > 1 && word === word.split("").reverse().join("");
  }

  function palindromes(string) {
    return substrings(string).filter(isPalindrome);
  }

//   Below is Seohyun's answer that works pretty well. I like the use of map and reduce to get the desired outcome.

function leadingSubstrings(str) {
    let substr = '';
    return str.split("").map(char => {
        substr = substr + char;
        return substr;
    });
}

function substrings(str) {
    return str.split("").reduce((acc, _, index) => {
        return acc.concat(leadingSubstrings(str.slice(index, str.length)));
    }, []);
}

function checkPalindrome(str) {
    if (str.length === 1) return false;
    return str.split("").reverse().join("") === str;
}

function palindromes(str) {
    const allStrings = substrings(str);
    return allStrings.filter(i => checkPalindrome(i));
}
