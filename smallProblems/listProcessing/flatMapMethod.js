// const arr = [1, 2, [3, 4]];
const arr2 = [0, 1, 2, [[[3, 4]]]];

// // To flat single level array
// // arr.flat();
// // is equivalent to
// console.log(arr2.reduce((acc, val) => acc.concat(val), []));
// console.log(arr2.reduce((acc, val) => acc.reduce((a,b) => a.concat(b), [])));
// [1, 2, 3, 4]

// or with decomposition syntax
// const flattened = arr => [].concat(...arr);

// This is a very interesting method that takes all the sub arrays and brings them to the service or at least up one level. The flat method can specifiy bringing up deeper levels if you indicate that.
// Below is a cool way of flattening recursively
const arr = [1, 2, [3, 4, [5, 6]]];

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

console.log(flatDeep(arr, Infinity));
console.log(flatDeep(arr2, Infinity));
// [1, 2, 3, 4, 5, 6]

