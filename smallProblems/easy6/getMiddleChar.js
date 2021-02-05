function centerOf(string) {
    let length = string.length;
    if (length % 2 === 0){
        let half = length / 2;
        let center = string.substr(half - 1,2)
        console.log(center);
    } else {
        let half = Math.floor(length / 2);
        let center = string.substr(half,1)
        console.log(center);
    }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"


// JS101 - Small ProblemsEasy 6Get The Middle Character
// Get The Middle Character
// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.