let arr = [2,3,4,5];
console.log(Object.keys(arr).length === arr.length)



// let arr1 = [null, undefined, 3]
// console.log(arr1.length);

// arr1.length = 0;
// console.log(arr1);
// console.log(arr1.length)
// arr1.length = 3;
// console.log(arr1)
  // while (arr1 === arr2) {
  //   console.log("true");
  //   break;
  // }
  // console.log("False");

// // function lessThan(upperLimit) {
// //   let lengths = [];

// //   for (let candidate = 1; candidate < upperLimit; candidate += 1) {
// //     lengths.push(candidate);
// //   }

// //   return lengths;
// // }
// // console.log(lessThan(5));

// // let str = 'This is a string';
// let arr = ['This', 'is', 'a', 'string'];
// // let obj = { 'This is': 'a string' };
// // let lastItem = arr[-1];
// // console.log(lastItem)
// // let dog = 'fido';

// // let letters = dog.split('');
// // letters[0] = letters[0].toUpperCase();
// // dog = letters.join('');
// let sliceItem = arr.slice(0,1);
// console.log(sliceItem)
// let item = arr.shift()
// console.log(item);
// console.log(arr.shift())

// let cat = 'Butterscotch';

// console.log(
//   cat[-4]
// )

// // Using a for loop. It is amazing how much you do not know.
// let statement = "The Flintstones Rock";

// let result = {};

// for (let counter = 0; counter < statement.length; counter += 1) {
//   let char = statement[counter];
//   if (char === ' ') continue;

//   result[char] = result[char] || 0;
//   result[char] += 1;
// }

// console.log(result)
// let charsInStatement = statement.split("").filter(char => char !== " ");
// let result = {};

// charsInStatement.forEach(char => {
// result[char] = result[char] || 0;
// result[char] += 1;
// })

// console.log(result);
// // or like this without the || operator

// let charsInStatement = statement.split('').filter(char => char !== ' ');
// let result = {};

// charsInStatement.forEach(char => {
//   if (Object.keys(result).includes(char)) {
//     result[char] += 1;
//   } else {
//     result[char] = 1;
//   }
// });
// let ages = {
//     Herman: 32,
//     Lily: 30,
//     Grandpa: 5843,
//     Eddie: 10,
//     Marilyn: 22,
//     Spot: 237
//   };


//   function smallestMember(obj) {

// // let agesKeyValues = Object.entries(ages);
// let agesValues = Object.values(obj);
//     return Math.min(...agesValues);
//     // let pointer1 = agesValues[0];

//     // for (let i = 1; i < agesValues.length; i++) {
//     //      if (pointer1 > agesValues[i]) {
//     //         pointer1 = agesValues[i];
//     //      }
//     //      return pointer1;
//     // }

// }
// console.log(smallestMember(ages))
// Now that is an interesting things to say, "don't go method hunting" because that is exactly what I do everytime I have a problem. I search for a method that will do what I need done, and maybe that is a source of my confusion. I need to maybe stick to those few methods that I do know and make sure that I use those correctly everytime.

// let ages = {
//     Herman: 32,
//     Lily: 30,
//     Grandpa: 5843,
//     Eddie: 10,
//     Marilyn: 22,
//     Spot: 237
//   };

//   let totalAges = 0;
//   Object.values(ages).forEach(age => totalAges += age);
//   totalAges; // => 6174

//   let values = Object.values(ages);
// function adding(array) {

//     let total = 0;

//   for(let i in array) {

//       total += array[i];
//   }
//  return total;
// }
// //   values.reduce((a,b) => {
// //        a + b;
// //   }, 0)
// console.log(adding(values));

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// const obj = {};

// flintstones.forEach((name, index) => {
//     obj[name] = index;
// })

// console.log(obj);
// console.log(['ant', 'bear'].map(elem => {
//     if (elem.length > 3) {
//       return elem;
//     }
//   }));  This is very interesting and good to know because you don't want to have arrays return and not know what is in them or how long they are. This can lead to bugs.

// console.log([1, 2, 3].every(num => {
//     return num = num * 2;
//   }));
// 2
// 4
// 6
// true

// console.log(['ant', 'bear', 'caterpillar'].pop().length); THis one was crazy because
// console.log([1, 2, 3].map(num => num * num));

// console.log([1, 2, 3].map(num => {
//     return num * num;
//   }));

// console.log([1, 2, 3].filter(num => 'hi')); The value is truthy therefore it will just return all the values without evaluating them.