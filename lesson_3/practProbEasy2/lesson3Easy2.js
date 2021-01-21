// // #10 Count the T's

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.t";

// console.log(statement1.match(/t/g||[]).length);
// console.log(statement2.match(/t/g||[]).length);
// // LS solution
// statement1.split('').filter(char => char === 't').length;
// statement2.split('').filter(char => char === 't').length;


// // Creating Spaces

// let title = "Flintstone Family Members";
// console.log(title.length);
// console.log(title.padStart(title.length + 20, " "));
// let padding = Math.floor((40 - title.length) / 2);
// console.log(title.padStart(padding + title.length));


// // Checking if arrays

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// #7 Array from Object

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// LS solution Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();


// My code below is wrong

// let newArray = [];
// let newArray2 = [];
// let keys = Object.keys(flintstones);
// let values = Object.values(flintstones);
// newArray.push(Object.keys(flintstones[2]));
// newArray.push(flintstones["Barney"]);

// console.log(newArray);


// // #4 FOUR scores

// let famousWords = "seven years ago...";
// let array = famousWords.split(" ");
// array.unshift(["Four scores and"]).join("");

// console.log(array);
// // //#3 Find in the Array

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));



// // #2 sorting and reversing without the functions


// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = [];

// numbers.forEach((number) => {
//   reversedArray.unshift(number);
// });

// console.log(reversedArray); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]
// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();

// let reversedNumbers = [];

// for (let i = (numbers.length - 1); i >= 0; i--) {
//   reversedNumbers.push(numbers[i]);
// }

// console.log(reversedNumbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// let sortedNumbers = [];

// function arraySorter(array) {

// array.forEach((element, index )=> {
//   if (element[index] > element[index + 1] ) {
//     element[index] = 0 ;
//   } else {

//   }
// });

  // for (let i = (numbers.length - 1); i >= 0; i--) {
  //   let count = array.length;

  //   if (numbers[i] )

  //   sortedNumbers.push(numbers[i]);
  // }

// }


// // 1 Replace

// let advice = "Few things in life are as important as house training your pet dinosaur. It is very important to not neglect your pet.";

// let pattern = /important/g;
// let replacement = "urgent";
// console.log(advice.replace(pattern, replacement));