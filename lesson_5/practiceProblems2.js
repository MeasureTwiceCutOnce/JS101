

// // Practice Problem 17
// // A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

// // Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// // Write a function that takes no parameters and returns a UUID.

// let randomNumbers = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

function uuidCreator() {
  let uuid = [];
  let arr1 = genRanHex(8);
  let arr2 = genRanHex(4);
  let arr3 = genRanHex(4);
  let arr4 = genRanHex(4);
  let arr5 = genRanHex(12);
  uuid.push(arr1);
  uuid.push(arr2);
  uuid.push(arr3);
  uuid.push(arr4);
  uuid.push(arr5);

  return uuid.join("-");
}

const genRanHex = size => {
  let result = [];
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join("");
}

console.log(uuidCreator());


// function randomHexMaker() {
//   let randNum = "";

//   randNum = randomNumbers[Math.floor(Math.random()*16)]
//   return randNum;
// }

// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// let obj = {};

// arr.forEach(subArray => {
//   obj[subArray[0]] = subArray[1];
// })
// console.log(obj);


// // Below is my bumbling around about trying to figure out how to create an object in JS. I saw that you can intialize it by using let and then the object, so I knew I had to initialize the object first, but the problem came after when i didn't know how to get the elements into the object which is as simple as referencing the obj with the name that you want for the key, then assigning that to the value that you want in that place.
// let obj = {};
// let smallArray = ['a', 1];

// obj[smallArray[0]] = smallArray[1];

// console.log(obj);
// // expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }


// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];


// console.log(arr.filter(subObj => {
//   return Object.values(subObj).every(subArray => {
//     return subArray.every(num => {
//       return num % 2 === 0;
//     })
//   })
// }) )
// Below is my incorrect answer, but I was close. I had used the map method twice which left me with the even numbers but they were nested two deep and that is not what it asked for.
//       console.log(arr.map(subObj => {
//   return subObj.map(subArray => {
//     return subArray.filter(num => {
//       return num % 2 === 0;
//     })
//   })
// })

// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let capitalize = word => word[0].toUpperCase() + word.slice(1);

// console.log(Object.values(obj).map(attributes => {
//   if (attributes['type'] === 'fruit') {
//     return attributes['colors'].map(char => capitalize(char));
//   } else {
//     return attributes['size'].toUpperCase();
//   }
// }));


// I was close to getting this right, but I am so frustrated that I am not getting this right. I will have to keep practicing and do like Jawad said and not take more than 15 to 30 minutes on the actually thinking of these problems. I will have to get better at these by just doing more of them. \


// let fruitDataArray = Object.entries(obj);
// let fruitNames = Object.keys(obj);
// for(let i = 0; i < fruitDataArray.length; i++) {

//   console.log(obj[fruitNames]["colors"]);

// }



// let fruitObj = Object.values(fruitData[0]);

// let fruitType = fruitObj[0];
// let fruitColor = fruitObj[1];
// let fruitSize = fruitObj[2];
// for(let key in obj) {
//   let newArray = [];
//   if(obj.fruit.type === "fruit") {

//   }
//   return
// }
// newArray.push(fruitObj[1]);
// newArray.push(fruitObj[2]);

// console.log(newArray);
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


// console.log(fruitObj);
// console.log(fruitType);
// console.log(fruitColor);
// console.log(fruitSize);

// HIYA! I got this one right as well which is such a blessing. It was not working at first because I had the return value of the function inside the forEach loop and not in the general part of the function, but it is nice to see my work adding up. No pun intended.
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// console.log(arr.sort((a,b) => {
//   return valueOfOdds(a) - valueOfOdds(b);
// }))

// function valueOfOdds(array) {
//   let value = 0;
//   array.forEach(num => {
//     if (num % 2 === 1) {
//       value += num;
//     }
//   })
//   return value;
// }


// THANK GOD! I was finally able to do a problem correctly. I did struggle with getting the syntax right, but after looking at the documentation, I was able to get it. I also, had made the mistake of using a map in a map that returned a new array which gave me too many nested arrays, so I had to rethink the issue and I read that filter would give a new array, so I used it like a boss. :-D
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];


//   let newArray = arr.slice().map(subArray => {
//     return subArray.filter(num => {
//       return num % 3 === 0
//     })
//   })
// console.log(newArray)

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(arr.map(obj => {
//   let incrementedObj = {};

//   for (let key in obj) {
//     incrementedObj[key] = obj[key] + 1;
//   }

//   return incrementedObj;
// })); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

// arr; // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(arr.map(obj => {
//   let incrementedObj = {};

//   for(let key in obj) {
//     incrementedObj[key] = obj[key] + 1;

//     return incrementedObj;
//   }
// }))
// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];




// // console.log(arr.map(array => {
// //   return array.splice().sort((a,b)) {
// //     if (typeof array[0] === "string") {
// //         if (b > a) {
// //           return 1
// //         } else if(a > b ) {
// //           return -1;
// //         } else {
// //           return 0
// //         }
// //       }
// //   } else {
// //     return array.splice().sort((a,b) => {
// //        b - a;
// //     })
// //   }
// // }})
// console.log(
// arr.map(subArr => {
//   return subArr.slice().sort((a, b) => {
//     if (typeof a === 'number') {
//       return b - a;
//     }

//     if (a < b) {
//       return 1
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// }));

// // => [ [ 'c', 'b', 'a' ], [ 3, 2, 1 ], [ 'green', 'blue', 'black' ] ]

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