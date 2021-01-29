function isRealPalindrome(string) {
    let i = 0;
    let j = string.length - 1;
    let lowerCaseString = string.toLowerCase();
    let cleanString = lowerCaseString.replace(/[^0-9a-z]/gi, '');

    while (i < j) {

        if (cleanString[i] === cleanString[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}
console.log(
isRealPalindrome('madam'),               // true
isRealPalindrome('Madam'),               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam"),     // true (only alphanumerics matter)
isRealPalindrome('356653'),              // true
isRealPalindrome('356a653'),             // true
isRealPalindrome('123ab321'),            // false
)