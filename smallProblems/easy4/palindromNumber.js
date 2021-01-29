function isPalindromicNumber(num) {
    return num === num.toString().split("").reverse().join("");
}
console.log(
isPalindromicNumber(34543),        // true
isPalindromicNumber(123210),       // false
isPalindromicNumber(22),           // true
isPalindromicNumber(5),            // true
)