/*
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
