/* even integers 2,4,6,8...
2
24
246
2468
246810


given n (number of a particular row) return the sum of that row
*/

function sumOfEvenIntegers(n) {
  let lastDigit = (((n * (n + 1)) / 2) - 1);
  let ans = 0;
  let count = 0;

  while ( count < n) {
    if (lastDigit % 2 === 0) {
      ans += lastDigit;
      count++;
    }
    lastDigit--;
  }
return ans;
}
console.log(sumOfEvenIntegers(3));
console.log(sumOfEvenIntegers(5));
console.log(sumOfEvenIntegers(2));
console.log(sumOfEvenIntegers(4));


// function sumOfEvenIntegers(n) {
//   let sum = 0;
//   let array = [];

//   for (let evens = 2; evens < 1000; evens + 2) {
//     let inc = ((n * (n + 1)) / 2)
//     array.push(evens);

//     // for (let i = inc - n; i < inc + 1; i++) {
//     //   sum += array[i];
//     //   console.log(i);
//     // }
//     // return sum;
//     console.log(array);
//   }
// }
