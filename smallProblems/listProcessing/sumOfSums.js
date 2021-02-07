function sumOfSums(array) {
    let sum = 0;

    for (let i = 1; i <= array.length; i++) {
        sum += array.slice(0,i).reduce((a,b) => a + b)
    }

    console.log(sum)
// The above answer is the LS answer which I am upset that I didn't get for the fact that I should have known this. I could have done this, and I started off really close to this using a for loop, but I did not use the reduce function correctly and I did not use the index of the slice solution correctly either. Lastly, I didn't use have the equals sign in the conditional part of the equation which kept giving me the wrong output.

// My answer is below and it did work. I used the leading substrings function from the last problem to pull out the numbers that I wanted from the array, and then I just reduced it twice because it had one layer deep of nested arrays.
    // let arrayOfNums = leadingSubstrings(array)

    // console.log(arrayOfNums.reduce((a,b) => {
    //     return Number(a) + b.reduce((a,b) => Number(a) + Number(b))
    // }))

}
// function leadingSubstrings(string) {
//     let newString = [];
//     let index = string.length;
//     let count = 1;

//     while (index >= 1) {
//         newString.push(string.slice(0,count));
//         index--;
//         count++;
//     }
//     return newString
// }

sumOfSums([3, 5, 2]);//) --> 21
sumOfSums([1, 5, 7, 3]);// --> 36
sumOfSums([4]);           // 4
sumOfSums([1, 2, 3, 4, 5]);//35

// Wes' answer below is crazy. I am not sure where to start with this one

/*
for sumOfSums
1. SET result to 0
2. SET i to 0
3. WHILE i is less than length of input array
  - SET j to i
  - WHILE j is greater than -1
    1. SET result to result plus number at input array index j
    2. SET j to j minus 1
  - SET i to i plus 1
  - RETURN result
4. RETURN result
*/

function sumOfSums(arrayONumsP) {
    return arrayONumsP.reduce((acc, _, i, src) => {
      let j = i;
      while (j > -1) {
        acc += src[j];
        j -= 1;
      }
      return acc;
    }, 0);
  }

  console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
  console.log(sumOfSums([4]));              // 4
  console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

//   It looks like Kevin's answer below is doing the same thing as Wes' but using two for loops and it is a little easier to understand.
// I think I understand this one to basically taking all possible combinations and adding them together, except this one is using the for loop as a guide for the second loop where the the second loop keeps stopping at the boundary of the first loop as the first loop runs through the array. Very cool.
function sumOfSums(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i ++) {
      for (let j = 0; j <= i; j ++) {
        sum += array[j];
      }
    }
    return sum;
  }
//   Brendans solution below
function sumOfSums(array) {
    let runningTotal = 0;

    do {
      runningTotal += array.reduce((num, nextNum) => num + nextNum);
      array.pop();
    } while (array.length > 0);

    console.log(runningTotal);
  }