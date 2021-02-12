// This is a good answer. I like how that use the string property of length to get the total which makes a lot less code than what I did. Much easier code to read than mine where I made an object with the wanted keys and then just added them by using if statements.
function letterPercentages(string) {
    let count = string.length;
    return {
      lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(
        2
      ),
      uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(
        2
      ),
      neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(
        2
      )
    };
  }

//   I also like their other answer below which uses a auxilary percentage function as I have, but much more smooth.
function letterPercentages(string) {
    let count = string.length;

    function percentage(regex) {
      let matchingChars = string.match(regex) || [];
      return ((matchingChars.length / count) * 100).toFixed(2);
    }

    return {
      lowercase: percentage(/[a-z]/g),
      uppercase: percentage(/[A-Z]/g),
      neither:   percentage(/[^a-z]/gi),
    };
  }
//   Below is Seohyuns and it is similar to mine, but I was not able to use the increment symobls correctly. I don't know why either.
function isLowerCaseLetter(char) {
    return char >= 'a' && char <= 'z';
}
function isUpperCaseLetter(char) {
    return char >= 'A' && char <= 'Z';
}
function letterPercentages(str) {
    const occurenceMap = {
        lowercase: 0,
        uppercase: 0,
        neither: 0
    };
    str.split("").forEach(char => {
        if (isLowerCaseLetter(char)) {
            occurenceMap.lowercase++;
        } else if (isUpperCaseLetter(char)) {
            occurenceMap.uppercase++;
        } else {
            occurenceMap.neither++;
        }
    });
    const computePercentage = (type) => {
        return String(((occurenceMap[type] / str.length) * 100).toFixed(2));
    }
    return {
        lowercase: computePercentage('lowercase'),
        uppercase: computePercentage('uppercase'),
        neither: computePercentage('neither')
    };
}
// I like how Coen below used a for loop to go through the string. I also like his logic in the if statements where you simply compare if the lowercase version matches the original version, but I worry would that also count not letter characters as well like : / ? because they do not change when put to lowercase?
function letterPercentages(str) {
    let onePercent = str.length / 100;
    let upperCase = 0;
    let lowerCase = 0;
    let neither = 0;

    for (let idx = 0; idx < str.length; idx++) {
      let char = str[idx];
      let charCode = char.toLowerCase().charCodeAt();

      if (!(charCode >= 97 && charCode <= 122)) {
        neither += 1;
      } else if (char === char.toLowerCase()) {
        lowerCase += 1;
      } else if (char === char.toUpperCase()) {
        upperCase += 1;
      }
    }

    let uRatio = (upperCase / onePercent).toFixed(2);
    let lRatio = (lowerCase / onePercent).toFixed(2);
    let nRatio = (neither / onePercent).toFixed(2);

    return `lowercase: ${lRatio}, uppercase: ${uRatio}, neither: ${nRatio}`;
  }
//   Wes below is similar to what I originally wanted to do which was create a hash table from scratch, and then increase the corresponding key with every char. I like how he did it and that is interesting how he uses the neither-- one. It kind of seems overly complicated for this program, but I do like how he uses reduce and map all the time. I have to start doing this.
/*
1. SET array to split string at characters
2. SET freq to object w/ lowercase: 0, uppercase: 0, neither: length of input string
3. WHILE array has elements
  - IF char is letter & lowercase
    - SET freq[lowercase] += 1
    - SET freq[neither] -= 1
    ELSE IF char is letter & uppercase
    - SET freq[uppercase] += 1
    - SET freq[neither] -= 1
4. SET freq to entries array
5. SET map to array w/ length 0
6. WHILE elements in freq
  - SET map to include element but where element[1] = element[1] / length of input string and multiplied by 100 and rounded to 2
7. SET freq to object from entries of map
8. RETURN freq
*/

let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

let upperAlpha = lowerAlpha.toUpperCase();

function letterPercentages(strParam) {
  return Object.fromEntries(Object.entries(strParam.split('').reduce((acc, ele) => {
    if (lowerAlpha.includes(ele)) {
      acc['lowercase'] += 1;
      acc['neither'] -= 1;
    } else if (upperAlpha.includes(ele)) {
      acc['uppercase'] += 1;
      acc['neither'] -= 1;
    }
    return acc;
  }, { lowercase: 0, uppercase: 0, neither: strParam['length'] })).map(ele => {
    ele[1] = ((ele[1] / strParam['length']) * 100).toFixed(2);
    ele = [ele[0], ele[1]];
    return ele;
  }));
}
