/*
Since I have been trying to get good
at the two pointer technique, I used
a while loop. Next techinque is
the binary search.
*/

function isPalindrome(string) {
    let i = 0;
    let j = string.length - 1;

    while (i < j) {
        if (string[i] === string[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}


console.log(
    isPalindrome('madam'),               // true
isPalindrome('Madam'),               // false (case matters)
isPalindrome("madam i'm adam"),      // false (all characters matter)
isPalindrome('356653'))              // true

// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.