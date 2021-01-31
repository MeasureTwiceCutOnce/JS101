// // function copyNonDupsTo(resultArray, array) {
// //     array.forEach(value => {
// //       if (resultArray.indexOf(value) === -1) {
// //         resultArray.push(value);
// //       }
// //     });
// //   }

// //   function union(array1, array2) {
// //     let newArray = [];
// //     copyNonDupsTo(newArray, array1);
// //     copyNonDupsTo(newArray, array2);
// //     return newArray;
// //   }

// // Utilizing a way to accept any number of arguments in the answer below

// function copyNonDupsTo(resultArray, array) {
//     array.forEach(value => {
//       if (resultArray.indexOf(value) === -1) {
//         resultArray.push(value);
//       }
//     });
//   }

//   function union() {
//     let newArray = [];

//     for (let idx = 0; idx < arguments.length; idx += 1) {
//       copyNonDupsTo(newArray, arguments[idx]);
//     }

//     return newArray;
//   }

//  I always like Wes Andersons answers using the reduce method.

function union(firstArrayP, secondArrayP) {
    let withRepeats = firstArrayP.concat(secondArrayP);

    return withRepeats.reduce((acc, ele) => {
      if (!(acc.includes(ele))) {
        acc.push(ele);
      }
      return acc;
    }, []);
  }

  console.log(union([1, 3, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]