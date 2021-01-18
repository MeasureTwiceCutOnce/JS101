let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// console.log(arr.map(array => {
//   return array.splice().sort((a,b)) {
//     if (typeof array[0] === "string") {
//         if (b > a) {
//           return 1
//         } else if(a > b ) {
//           return -1;
//         } else {
//           return 0
//         }
//       }
//   } else {
//     return array.splice().sort((a,b) => {
//        b - a;
//     })
//   }
// }})
console.log(
arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}));

// => [ [ 'c', 'b', 'a' ], [ 3, 2, 1 ], [ 'green', 'blue', 'black' ] ]

// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// //OMG!!! This is crazy. I was able not able to do this one again! This is so frustrating.
// // OK. So I am supposed to map over this array and then ask if it is a string or a number. If string then split and sort. If a number then just sort.

// console.log(arr.map(array => {
//   if (typeof array[0] === "string") {
//     return array.slice().sort();
//   } else {
//     return array.slice().sort((a,b) => a - b);
//   }
// }))

// console.log(arr.map(array => {
//   array.sort((a,b) => {
//     if(a > b) {
//       return 1;
//     } else if (b > a ) {
//       return -1;
//     } else {
//       return 0;
//     }
//   })
// }))

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(array => {
//   array.forEach(word => {
//     // return console.log(word);
//     word.split("").forEach(letter => {
//       if("aeiou".includes(letter)) {
//         console.log(letter);
//       }
//     })
//   })
// })


// let vowels = values.forEach(vowel => {
//   vowel.split.filter(letter => {
//     return letter === "aeiou"
//   })
// })


// console.log(values[1][0]);

// values.forEach((a,b) => {
//   return console.log((a + b).split(""))
  // return console.log(array[0]);
// })

// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };


// // Here again is the reason why I need to practice this object accessing things more. Here what I need to do it user Object.entries to map out each of the key and values of the object. After that I will create a for loop of use for Each which will then have to assign a variable for name, age, and gender. Then I will use the literal backticks to console log the output desired.

// let entries = Object.entries(munsters);

// entries.forEach(entry => {
//   let name = entry[0][0].toUpperCase() + entry[0].substring(1);
//   let age = entry[1]["age"];
//   let gender = entry[1]["gender"];

//   console.log(`${name} is a ${age}-year-old ${gender}.`)
// })
// member.forEach(element => {
//   console.log(`${element[]} is a ${element.age}-year-old ${element.gender}.`)
// })

//Expected Output:  (Name) is a (age)-year-old (male or female).

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// // let members = Object.keys(munsters);
// // let ages = Object.keys(Object.keys(munsters));

// console.log(munsters["Herman"]["age"]);
// console.log(munsters["Herman"]["gender"]);

// let array = Object.entries(munsters);
// // console.log(array);

// function addAges(obj) {
//   let sum = 0;

//   for(let member in obj) {
//    if(obj[member]["gender"] === "female") {
//      sum += Number(obj[member]["age"]);
//    }
//   }
//   return sum;
// }
// console.log(addAges(munsters));

// // The method below is using the Object.values method to set a variable as each member of the family. Then after it does that it will use a for loop or forEach to cycle through each member and see if they are male. If they are, then they will add the age to the totalAge variable. It is amazing to me how super simple this is, but when you don't know it, it is the most difficult thing in the world. I am struggling with this and I need to do more object type problems like this.
// let memberDetails = Object.values(munsters);
// let totalMaleAge = 0;

// memberDetails.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// });

// ****************************************
// let arr1 = [1, [2, 3], 4];

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

// let obj1 = { first: [1, 2, [3]] };

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };


// arr1[1][1] = 4;
// arr2[2] = 4;
// obj1["first"][2][0] = 4;
// obj2["a"]["a"][2] = 4;
// console.log(arr1);
// console.log(arr2);
// console.log(obj1);
// console.log(obj2);

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}


// console.log(arr1[2][1][3]);
// console.log(arr2[1]["third"][0]);
// console.log(arr3[2]["third"][0][0]);
// console.log(obj1["b"][1]);
// console.log(Object.keys(obj2["third"])[0]);


// obj1.map(element => {
//   return element.map(letter => {
//     letter.filter("g")
//   })
// })

// let books = [
//     { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//     { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//     { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//     { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
//   ];

// console.log(books.sort((a,b) => {
//   return Number(a.published) - Number(b.published);
// }))



// let arr = ['10', '11', '9', '7', '8'];
// let numbers = [];

// arr.map(num => numbers.push(Number(num)));
// console.log(numbers);


// let sortedArray = numbers.sort((a,b) => b - a);
// console.log(sortedArray);
// // console.log(sortedArray);