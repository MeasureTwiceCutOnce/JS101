function wordToDigit(string) {
    const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let stringArray = string.split(" ");

    let newString = stringArray.reduce((acc,curr) => {
        if (NUMBERS.includes(curr.toLowerCase())) {
            return acc += NUMBERS.indexOf(curr);
        }
        acc += `${curr} `
        return acc
    },"")
    return newString
}
// for (let number of stringArray) {
//     if (number.includes(number.toLowerCase())) {
//         return stringArray.join(" ").replace(number,NUMBERS[NUMBERS.indexOf(number)])
//     }

// }
console.log(
wordToDigit('Please call me at five five five one two three four. Thanks.')
// "Please call me at 5 5 5 1 2 3 4. Thanks."
)