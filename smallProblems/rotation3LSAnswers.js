// Wes
/*
1. SET array variable to an array version of the input number
2. SET idx variable to 0
3. WHILE idx is less than the length of the array minus 1
  - SET array variable to itself without element at idx
  - SET digit variable to removed element
  - SET array variable with digit pushed to back
  - SET idx to idx plus 1
4. SET array variable to string version and then number version of itself
5. RETURN (number version of) array variable.
*/

function maxRotation(numberParam) {
    let array = String(numberParam).split('');

    for (let idx = 0; idx < array['length'] - 1; idx += 1) {
      let digit = array.splice(idx, 1);
      array.push(digit[0]);
    }

    return Number(array.join(''));
  }

// Brendan
function maxRotation(number) {
    let maximumRotation = [];
    let arrayOfDigits = String(number).split("");
    let rotationCount = arrayOfDigits.length;

    for (let i = 0; i < rotationCount; i++) {
      let digitToRotate = arrayOfDigits.shift();
      arrayOfDigits.push(digitToRotate);
      maximumRotation.push(arrayOfDigits.shift());
    }
    return maximumRotation.join("");
  }
// Keagan
function maxRotation(num) {
    let arr = String(num).split('');
    arr.forEach((_, i) => arr.push(arr.splice(i, 1)))
    return arr.join('');
  }