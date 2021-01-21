// Empty Arrays is a sparse complicated issue. Indexes can be assigned to undefined elements, but length is only assigned to elements that exist. You can assign a length to a smaller array, but the array will have empty elements where there are no given values.

// Method	Action	Considers the return value of the callback?	Returns a new array from the method?	Length of the returned array
// forEach	Iteration	No	No, it returns undefined	N/A
// filter	Selection/Filtering	Yes, its truthiness	Yes	Length of original or less
// map	Transformation	Yes	Yes	Length of original


let str = "What's up, Doc?";
let newStr = str.split('')
   .filter(char => 'aeiou'.includes(char.toLowerCase()))
   .join('');
// => 'auo'

console.log(newStr);

//  console.log([1, 2, 3].map(num => num * 2))
// [ 2, 4, 6 ]

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceKeyValues = Object.entries(produce);
// let onlyVegetables = produceKeyValues.filter(keyValue=> {
//   let [key, value] = keyValue;
//   return value === "Vegetable";
// })

// console.log(onlyVegetables)

// let numbers = [1, 2, 3];
// let oddNumbers = numbers.filter(num => num % 2 ===1);


// // for (let index = 0; index < numbers.length; index += 1) {
// //   if (numbers[index] % 2 === 1) {
// //     oddNumbers.push(numbers[index]);
// //   }
// // }

// console.log(oddNumbers); // => [1, 3]

// let produceKeyValues = Object.entries(produce);
// // produceKeyValues contains:
// //   [['apple', 'Fruit'],
// //    ['carrot', 'Vegetable'],
// //    ['pear', 'Fruit'],
// //    ['broccoli', 'Vegetable']]

// produceKeyValues.forEach(keyValue => {
//   let [ key, value ] = keyValue;

//   console.log(`${key} is a ${value}`);
// });
// logs:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable
// // Destructuring broken out
// let key = keyValue[0];
// let value = keyValue[1];
// // I love this object iteration stuff because I did not know how to do this before. I think I will practice this for a few days making sure that I do problems that require iterating over an object.