// const dupes = input.reduce((acc, v, i, arr) => arr.indexOf(v) !== i && acc.indexOf(v) === -1 ? acc.concat(v) : acc, [])
// console.log([1, 2, 2, 4, 3, 4].filter((e, i, a) => a.indexOf(e) !== i) )// [2, 4]

let array  = [1, 2, 2, 4, 3, 4];
function findDup(array) {
    return array.filter((e, i, a) => a.indexOf(e) !== i)
}
console.log(
findDup([1, 5, 3, 1]),                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]),    // 73
)
// function findDup(array) {
//     for (let idx = 0; idx < array.length; idx++) {
//         let checker = array.pop();
//         if (array.includes(checker)) return checker;
//     }
//   }

// function findDup(array) {
//     return array.filter((ele, idx) => array.slice(idx + 1).includes(ele))[0];
//   }
// function findDup(array) {
//     let element = array.shift();

//     while (!array.includes(element) && array.length > 0) {
//       element = array.shift();
//     }

//     if (array.length === 0) {
//       return undefined;
//     }

//     return element;
//   }
// function findDup(array) {
//     let value = 0;

//     do {
//       value = array.shift();
//     } while (!array.includes(value));

//     return value;
//   }

// function findDup(arr) {
//     return arr.find((val, idx) => arr.indexOf(val) !== idx);
//   }

// const findDup = (arr) => {
//     let result;
//     arr.forEach((el, idx) => {
//       if (arr.lastIndexOf(el) !== arr.indexOf(el)) {
//         result = el;
//       }
//     });
//     return result;
//   };
// function findDup(arr) {
//     return arr.filter(element => arr.indexOf(element) !== arr.lastIndexOf(element))[0];
//   }

// function findDup(array) {
//     let checkArray = [];

//     for (let idx = 0; idx < array.length; idx += 1) {
//       if (checkArray.includes(array[idx])) return array[idx];
//       checkArray.push(array[idx]);
//     }
//   }
// function findDup(array) {
//     let sortedArray = array.sort();

//     for (let i = 0; i < sortedArray.length; i += 1) {
//       if (sortedArray[i] === sortedArray[i - 1]) {
//         return sortedArray[i];
//       }
//     }
//   }

// function findDup(arrayP) {
//     let sliced = arrayP.slice();
//     return sliced.reduce((acc, ele, idx) => {
//       sliced.splice(idx, 1);
//       if (sliced.includes(ele)) {
//         acc = ele;
//       }
//       return acc;
//     }, undefined);
//   }
                                        // 73
console.log(findDup(array));

// var input = [1, 2, 3, 1, 3, 1];
// console.log(dupes);
// var duplicates = input.reduce(function(acc, el, i, arr) {
//   if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
// }, []);

// document.write(duplicates); // = 1,3 (actual array == [1, 3])

// The above code finds the dups

// var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

// var uniq = names
//   .map((name) => {
//     return {
//       count: 1,
//       name: name
//     }
//   })
//   .reduce((a, b) => {
//     a[b.name] = (a[b.name] || 0) + b.count
//     // console.log(b.count);
//     return a
//   }, {})
//   var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)
//   console.log(duplicates)
//   console.log(uniq);
// more compact below
// const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

// const count = names =>
//   names.reduce((a, b) => ({ ...a,
//     [b]: (a[b] || 0) + 1
//   }), {}) // don't forget to initialize the accumulator

// const duplicates = dict =>
//   Object.keys(dict).filter((a) => dict[a] > 1)

// console.log(count(names)) // { Mike: 1, Matt: 1, Nancy: 2, Adam: 1, Jenny: 1, Carl: 1 }
// console.log(duplicates(count(names))) // [ 'Nancy' ]