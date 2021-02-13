// Here the LS answer worked where mine didn't. Mabye my answer did work, but everytime I ran my program is looked like it was hanging so I would force stop because I worried that I was running an infinite loop.
function featured(number) {
    const MAX_FEATURED = 9876543201;
    //   The first auxilary function is asked to find the next biggest number that is odd and a multiple of 7 by using a do while loop that checked to see if the number was even or not a multiple of seven which makes the program a little faster because they don't have to increment through every integer. Now that the program has a number that is odd and a mult of seven, they check to see if it is unique and if it bigger than the upper limit. If the number is unique then they increment the number by 14
    let featuredNum = toOddMultipleOf7(number);

    do {
      if (allUnique(featuredNum)) {
        return featuredNum;
      }

      featuredNum += 14;
    } while (featuredNum < MAX_FEATURED);

    return 'There is no possible number that fulfills those requirements.';
  }

  function toOddMultipleOf7(number) {
    do {
      number += 1;
    } while (number % 2 === 0 || number % 7 !== 0);

    return number;
  }

  function allUnique(number) {
    let digits = String(number).split('');
    let seen = {};

    for (let idx = 0; idx < digits.length; idx += 1) {
      if (seen[digits[idx]]) {
        return false;
      }

      seen[digits[idx]] = true;
    }

    return true;
  }
//   Seo created a object as well but in the manner that I am familiar where I count each element of an array, and then she checks to see if any of those object values are higher than 1 which would mean it has a duplicate and be false. Also like me she use a for loop to check through every number possibility above the given number  and if that number is odd and multiple of seven. If so, then return that number unless it is above the max limit.

// I like how Joey below used the slice method to find the duplicates. It is also interesting how he set up his do while loop logic
function isOdd(number) {
    return number % 2 === 1;
  }

  function allDifferentDigits(number) {
    const stringArray = [...String(number)];
    const duplicateArray = stringArray.filter((element, index) =>
      stringArray.slice(index + 1).some(item => item === element)
    );

    if (duplicateArray.length) {
      return false;
    } else {
      return true;
    }
  }

  function featured(number) {
    const maximumPossibleValue = 9876543201;

    if (number >= maximumPossibleValue) {
      return 'There is no possible number that fulfills those requirements.';
    }

    const remainder = number % 7;

    let nextMultiple = remainder === 0 ? number + 7 : number + (7 - remainder);

    while (!isOdd(nextMultiple) || !allDifferentDigits(nextMultiple)) {
      nextMultiple += 7;
    }

    return nextMultiple;
  }
// Liz answer below. I like how she checked for duplicates using the new Set
function featured(number) {
    let baseNum = number + 1;
    baseNum = getASeven(baseNum);
    for (let start = baseNum; start <= 9876543201; start += 7) {
      if (start % 2 !== 0 && appearsOnce(start)) {
        return start;
      };
    };
    return "There is no possible number that fulfills those requirements.";
  };

  function appearsOnce(number) {
    let set = new Set((String(number)).split(""));
    let string = String(number);
    return set.size === string.length ? true : false;
  }

  function getASeven(number) {
    if (number % 7 !== 0) {
      number += 1;
      return getASeven(number);
    } else if (number > 9876543201) {
      return "There is no possible number that fulfills those requirements.";
    } else {
      return number;
    };
  };
//   Zachs answer below uses a nice way to check for dupes as well.
function featured(integer) {
    while (true) {
      if (integer >= 9876543201) {
        console.log("error");
        break;
      }
      integer += 1;
      if (integer % 7 === 0 && integer % 2 === 1 && isUniqueDigits(integer)) {
        console.log(integer);
        break;
      }
    }
  }

  function isUniqueDigits(integer) {
    let arr = String(integer).split('');
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        return false;
      }
    }
    return true;
  }