function rotateArray(array) {
    if (!Array.isArray(array)) {
      return undefined;
    }

    if (array.length === 0) {
      return [];
    }

    return array.slice(1).concat(array[0]);
  }
//   Here LS did a nice job in using fewer methods to get the answer above.

// Below I like how Dominic is showing a new way to copy an array using the JSON Stringify method.
function rotateArray(input) {
    if (!Array.isArray(input)) return undefined;
    else if (input.length < 2) return input;
    else {
      let arrayDeepCopy = JSON.parse(JSON.stringify(input));
      let rotatingValue = arrayDeepCopy.shift();
      return arrayDeepCopy.concat(rotatingValue)
    }
  }

// Below is Bilal's answer and again, I like the consiceness of it.
function rotateArray(array) {
    if (!Array.isArray(array)) return undefined;

    return array.length === 0 ? [] : array.slice(1).concat(array[0]);
  }