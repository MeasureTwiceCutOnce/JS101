// let string = [...nums];

function greatestNumber(array) {
  let savedNumber = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > savedNumber) {
      savedNumber = array[i];
    }
    i++;
  }
    return savedNumber;
}

  //  // This was my answer after reading the psuedo code
//   let i = 0;
//   let savedNumber = array[0];

//   while (i <= array.length) {
//     if (array[i] > savedNumber) {
//       savedNumber = array[i];
//     }
//       i += 1;
//   }
//   return savedNumber;
// }

//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] > highestValue) {
//       let highestValue = array[i];
//       return highestValue;
//     } 
//   }
  
   // This block was the LS answer...
    // let currentNumber = array[i];
  // array.forEach(num => {
  //   if (num > savedNumber) {
  //     savedNumber = num;
  //   }
  // })

// }

console.log(greatestNumber([1,2,3,23,4,4,5,6,23,100]));