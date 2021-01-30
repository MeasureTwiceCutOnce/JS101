// This was a great pracitce because I have been wanted to get better at creating hash tables this week. I created my solution by creating a helper function that would count the number of words in the given array, and then in the main function, the word size would be set as the key for the new table and that getCount helper function assigns the count value to that corresponding key.
function wordSizes(string) {
    let sortedWordHash = {};
    let array = string.split(" ");

    for (let i = 0; i < array.length; i++) {
        if (array[i].length === 0) {
            return {};
        }
        sortedWordHash[array[i].length] = getCount(array, array[i].length);
    }
    return sortedWordHash;
}

function getCount(array, len) {
    let count = 0;
    for (let word of array) {
        if (word.length === len) {
            count++;
            }
        }
        return count;
}
console.log(
wordSizes('Four score and seven.'),                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'),  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"),                              // { "2": 1, "4": 1, "6": 1 }
wordSizes(''),                                            // {}
)
// Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// The below answer was provided by LS and I love the simplicity of it. ITbasically asks, if this key does not exist, then create it and set it to zero. Then it goes through the rest of the array and if that same key is found, then it adds one to that key. They keys in this problem are made up of the length of the individual words within the given array.
// function wordSizes(words) {
//     let wordsArray = words.split(' ');
//     let count = {};

//     for (let idx = 0; idx < wordsArray.length; idx += 1) {
//       let wordSize = wordsArray[idx].length;
//       if (wordSize === 0) {
//         continue;
//       }

//       if (!count[wordSize]) {
//         count[wordSize] = 0;
//       }
//       count[wordSize] += 1;
//     }

//     return count;
//   }