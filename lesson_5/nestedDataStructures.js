let arr = [1, 2];

let arr2 = arr.map(subArr => arr.pop()); // => [ 2, <1 empty item> ]

console.log(arr);
console.log(arr2);

// console.log([[[1, 2], [3, 4]], [5, 6]].map(arr => {
//     return arr.map(elem => {
//       if (typeof elem === 'number') { // it's a number
//         return elem + 1;
//       } else {                  // it's an array
//         return elem.map(number => number + 1);
//       }
//     });
//   }));

// [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
//     return element1.forEach(element2 => {
//       return element2.filter(element3 => {
//         return element3.length > 0;
//       });
//     });
//   });



  // => [ undefined, undefined ]



// // console.log([[1, 2], [3, 4]].map(arr => {
//     return arr.map(num => num * 2);
//   }));

// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//     return arr.map(num => {
//       if (num > 5) {
//         return console.log(num);
//       }
//     });
//   });



// let arr = [[1, 3], [2]];
// arr[0][1] = 5;

// console.log(arr);