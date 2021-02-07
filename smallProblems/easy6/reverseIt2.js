function reverseWords(string) {
    let arrayofWords = string.split(" ");
    let reverseWords = [];

    arrayofWords.forEach(word => {
        if (word.length >= 5) {
            return reverseWords.push(word.split("").reverse().join(""))
        } else {
            return reverseWords.push(word)
        }
    })


    console.log(reverseWords.join(" "));

}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"