function removeVowels(array) {
        array = array.map(char => {
        return char = char.replace(/[aeiou]/gi,"")
    })
    console.log(array);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// I like the LS style of giving the short hand new method way of solving and then giving the mechanical more drawn out old school way of solving it. IT helps to see and understand what is happening under the "hood";


function removeVowels(stringArray) {
    return stringArray.map(string => {
      let chars = string.split("");
      let removedVowels = deleteVowels(chars);
      return removedVowels.join("");
    });
  }

  function deleteVowels(array) {
    const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    return array.map(char => {
      if (VOWELS.indexOf(char) >= 0) {
        return "";
      } else {
        return char;
      }
    });
  }