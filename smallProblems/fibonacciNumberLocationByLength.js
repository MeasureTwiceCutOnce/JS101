// function findFibonacciIndexByLength(num) {
//     let fibArray = getFibArray();
//     let targetDigCount = num;
//     let digitIndex = {
//         1:1,2:7,3:100,4:1000,5:10000,6:100000
//     }

//     return fibArray.findIndex(num => num >= digitIndex[targetDigCount])

// }

// function getFibArray() {
//     let fibNumsArray = [1,1];
//     for(let i = 0; i < 70; i++) {
//         fibNumsArray.push((fibNumsArray[fibNumsArray.length - 1]) + (fibNumsArray[fibNumsArray.length - 2]))
//     }
//     return fibNumsArray;
// }

// WHile my code above did not work, I do think that it is almost correct. I tried to utilize the hash method of creating a table that would have the data needed to be accessed, but I think I failed with the use of the indexOf method and with something else. The code below is the example answer which I think is pretty smooth. I wanted to see how to use a do while loop and this is a good example for the fact that the first possibility is always going to be 1 and then after that you want a loop that will terminate when the index is found.
function findFibonacciIndexByLength(length) {
    let first = 1;
    let second = 1;
    let index = 2;
    let fibonacci;

    do {
      fibonacci = first + second;
      index += 1;
      first = second;
      second = fibonacci;
    } while (String(fibonacci).length < length);

    return index;
  }
//   Though this is not an array, it reminds me of the two pointer technique, because the fibonacci requires using a sequence of numbers one after the other and here the first pointer starts on one and the second pointer starts on two while the sum of the two has to be switched to the next number and the second number becomes the first, then the process repeats. Very cool stuff.
// function fib(n) {
//     var a=0, b=1, f=1;
//     for(let i=0; i<n; i++) {
//         f = a+b;
//         a = b;
//         b = f;
//     }
//     return f;
// }

console.log(findFibonacciIndexByLength(2));

// let fibNumsObj = {};

// for(let i = 0; i < 50; i++) {
//     fibNumsObj[i] = fib(i);
// }
// return fibNumsObj;

// // }

// let digitIndex = {
//     1:1,2:7,3:100
// }

// console.log(digitIndex[2])


// findFibonacciIndexByLength(2);       // 7
// findFibonacciIndexByLength(10);      // 45
// findFibonacciIndexByLength(16);      // 74

// Don't try any higher values until you read the solution Discussion

// console.log(fib(1200))
