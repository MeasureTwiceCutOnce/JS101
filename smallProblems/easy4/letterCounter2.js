function wordSizes(string) {
    let wordHash = {};
    let array = string.split(" ").map(ele => ele.replace(/[^0-9a-z]/gi, ''));
console.log(array)
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === 0) {
            return {};
        }
        wordHash[array[i].length] = getCount(array, array[i].length);
    }
    return wordHash;
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
wordSizes('Four score and seven.'),                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'),  // { "3": 5, "6": 3 }
wordSizes("What's up doc?"),                              // { "2": 1, "3": 1, "5": 1 }
wordSizes(''),                                            // {}
)