function sum(num) {
    // The reduce method
    let arrayOfDigits = num.toString().split("");

    let addedDigits = arrayOfDigits.reduce((a,b) => Number(a) + Number(b),0)

    //the recursion method, but I am missing something
    // while (num > 0) {
    //     let lastDigit = (num % 10) ;
    //     let remainder = (num - lastDigit) / 10;
    //     addedDigits += lastDigit
    //     console.log(sum(remainder))
    // }

// Below is Michael Rago doing my recursion version that I was trying to do. It looks like I should have just had one variable named remainder which would be the result and the argument for the reoccurring call.
function sum(num) {
    let remainder = num % 10;
    let tens = Math.floor(num / 10);
    if (tens < 1) {
      return remainder;
    } else {
      return remainder + sum(tens);
    }
  }
    console.log(addedDigits)
}


sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.