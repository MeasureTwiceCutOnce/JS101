function swap(string) {
    let newString = string.split(" ");
    // two pointer that replaces the first index with the last index
    newString.map(word => {
        let i = 0;
        let temp = 0;
        let j = word.length - 1;

        temp = word[i];
        word[i] = word[j];
        word[j] = temp;
        return word;
    }, 0)
    return newString.join(" ");
    // return newString;
}
console.log(
swap('Oh what a wonderful day it is'),  // "hO thaw a londerfuw yad ti si"
swap('Abcde'),                          // "ebcdA"
swap('a'),                              // "a"
)

// function swap(input) {
//     let arr = input.split(' ');
//     let newArr = [];

//     arr.forEach(word => newArr.push(word.split('').reverse().join('')));
//     return newArr.join(' ');
//   }

// Below is the LS solution which did a nice job using the slice function which utilizes negative numbers in order to start from the end of the string and work backwards which perfectly fits with the slice method which takes in the beginning and end of the word that you would like to slice from.

// function swap(words) {
//     let wordsArray = words.split(' ');

//     for (let idx = 0; idx < wordsArray.length; idx += 1) {
//       wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
//     }

//     return wordsArray.join(' ');
//   }

//   function swapFirstLastCharacters(word) {
//     if (word.length === 1) {
//       return word;
//     }

//     return word[word.length - 1] + word.slice(1, -1) + word[0];
//   }