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