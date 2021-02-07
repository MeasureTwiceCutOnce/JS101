function doubleConsonants(string) {
    // let vowels = ['a','e','i','o','u'];
    let newArray = string.split("");
    // consonantRegex =(/[a-z] &&[^aeiou]]/);
    const letter = RegExp(/[a-z]/i);
     const consonant = RegExp(/[^aeiou]/i);

    let doubleCons = [];

    for (let i = 0; i < newArray.length; i++) {
        if (letter.test(newArray[i]) && consonant.test(newArray[i])) {
            doubleCons.push(newArray[i]);
            doubleCons.push(newArray[i]);
        } else {
            doubleCons.push(newArray[i]);
        }
    }
    console.log(doubleCons.join(""))
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

