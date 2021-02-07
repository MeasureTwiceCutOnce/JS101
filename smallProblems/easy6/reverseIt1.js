// This is what I am talking about as far as effective curriculum development. We have been given several problems that have used the .join() and .reverse() technique which is good, but not good because we should spend more time systematically going over more difficult methods like map and reduce. To learn something, you have to be exposed to it many times and in increasingly less frequent intervals.

// Reverse It (Part 1)
// Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

function reverseSentence(string) {
    let array = string.split(" ");
    let newArray = [];
    // for loop
    // for (let i = array.length - 1; i >= 0; i--) {
    //     newArray.push(array[i])
    // }

    // map
    array.map((word, idx) => {
        return newArray.unshift(word);
    })

    console.log(newArray.join(" "));
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"