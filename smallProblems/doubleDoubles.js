/*
I have an error with the 44 argument. I think it has something to do with lines 24 to 27 where the logic is getting messed up due to it being such a small string. We may be able to just add another piece of logic to the if statement on line 22, but I am not sure what I would add.




INSTRUCTIONS:
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.


The Cool-Aid man says OH YEAH!!!!!! I actually got this one right. I had the right thinking from the begining that I needed to use a two pointers solution, but I initially made the mistake of thinking of this as a Palindrome so I compared the first number with the last when I should have been comparing the first number with the midpoint plus one number. I also had to convert my number to a string in order to use the two pointer feature.
*/
function twice(num) {

    if(String(num).length % 2 === 0 && isDoubles(num)) {
        return num;
    } else {
        return num * 2;
    }
}

function isDoubles(num) {
    let numString = String(num);
    let i = 0;
    let j = Math.floor(numString.length / 2);

    while(i < Math.floor(numString.length / 2)) {
        if(numString[i] !== numString[j] ) {
            return false;
        } else {
            i++;
            j++;
            return numString[i] === numString[j];
        }

    }
}
console.log(
twice(37),          // 74
twice(44),          // 44
twice(334433),      // 668866
twice(444),         // 888
twice(107),         // 214
twice(103103),      // 103103
twice(3333),        // 3333
twice(7676),        // 7676
)
