// function fibonacci(num) {
//     let sum = 2;

//     for (let i = 3; i < num; i++) {
//         sum += ((i - 1) + (i - 2))
//     }


//     return sum
// }
// My solution above did not work and I am not sure why. I really don't understand the LS solution below. I will just keep moving on.
function fibonacci(nth) {
    let previousTwo = [1, 1];

    for (let counter = 3; counter <= nth; counter += 1) {
      previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
    }

    return previousTwo[1];
  }
console.log(
fibonacci(20),       // 6765
fibonacci(50),       // 12586269025
fibonacci(75),       // 2111485077978050
)
