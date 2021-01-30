function runningTotal(array) {
  // reduce
  //   return array.reduce((acc, ele, idx) => {
  //   if (idx > 0) {
  //      acc.push(ele + acc[idx - 1])
  //   } else {
  //      acc.push(ele);
  //   }
  //   return acc;
  // },[])
  // map
  let sum = 0;

  let result = array.map((num) => {
    return  sum += num;
  })
return result;
  // for loop
  // if (array[0] === 0) return [];
  // for (let i = 0; i < array.length; i++) {
  //   sum += array[i];
  //   newArray.push(sum);
  // }
}





console.log(
  runningTotal([2, 5, 13]),             // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]),    // [14, 25, 32, 47, 67]
  runningTotal([3]),                    // [3]
  runningTotal([]),                     // []
  )




















// function runningTotal(array) {
//     let newArray = [];
//     let total = 0;

//     for (let i = 0; i < array.length; i++) {
//         newArray.push(total += array[i]);
//     }
//     return newArray;
// }
// function runningTotal(array) {
//     let newArray = [];
//     let total = 0;

//     array.map((a,b) => {
//         total = a + b;
//         newArray.push(total),array[0])

//         return newArray;
//     }
// }

// Above is my attempt.
// function runningTotal(array) {
//     if (array.length === 0) return array;
//     let result = [array[0]];
//     for (let idx = 1; idx < array.length; idx += 1) {
//       result.push(array[idx] + result[idx - 1]);
//     }
//     return result;
//   }
// The above is Boris' answer and it looks like what I was trying to do.


// The following is Wes Anderson's answer which look pretty good. I like how he used the reduce method.

// function runningTotal(array) {
//     return array.reduce((acc, ele, idx) => {
//         if (idx > 0) {
//             acc.push(ele + acc[idx - 1])
//         } else {
//             acc.push(ele)
//         }
//         return acc;
//     }, []);
// }

// The below isCoen's answer
// function runningTotal(arr) {
//     let sum = 0;

//     let result = arr.map((num, idx) => {
//       return sum += num;
//     });

//     return result;
//   }

