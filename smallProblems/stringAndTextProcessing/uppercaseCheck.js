function isUppercase(string) {
    // let alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    // let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

    // if (string.includes(lowercaseLetters)) {
    //     return false;
    // } else if (string.includes(alphanumeric) || "") {
    //     return true;
    // }

}
function isUppercase(string) {
    return string.toUpperCase() === string;
  }

// The LS answer is pretty smooth and logical because they just make the string upper case and then compare. If true then it will be true.
console.log(
isUppercase('t'),               // false
isUppercase('T'),               // true
isUppercase('Four Score'),      // false
isUppercase('FOUR SCORE'),      // true
isUppercase('4SCORE!'),         // true
isUppercase(''),                // true
)