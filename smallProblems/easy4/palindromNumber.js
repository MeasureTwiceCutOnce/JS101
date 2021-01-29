function isPalindromicNumber(num) {

    return parseInt(num,10).toString === parseInt(num,10).toString(10).split("").reverse().join("");
}
// function isPalindromicNumber(num) {
//     return num.toString(10) === num.toString(10).split("").reverse().join("");
// }

console.log(
isPalindromicNumber(34543),        // true
isPalindromicNumber(123210),       // false
isPalindromicNumber(22),           // true
isPalindromicNumber(5),            // true
)