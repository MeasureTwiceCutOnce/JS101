function multiply(a, b) {
  a * b;
}

// function volume(height, width, depth) {
//   let result = height * width * depth;
//   console.log(result);
//   return result;
// }

// function foo1(a) {
//   return 2 * a;
// }

// let foo2 = function(a) {
//   return 2 * a;
// };

// const foo3 = a => 2 * a;

// // create a random integer between 0 and 9
// let randomNumber = Math.floor(10 * Math.random());

// console.log(foo1(randomNumber));
// console.log(foo2(randomNumber));
// console.log(foo3(randomNumber));

// console.log(foo());

// function foo() {
//   console.log('Waiting for bar!');
// }

// function foo() {
//   console.log(foo);
//   function bar() {
//     console.log('bar again');
//   }

//   bar();

//   function bar() {
//     console.log('bar again and again');
//   }
// }

// let string = "2.24";
// let num1 = Number(string);
// let num2 = parseInt(string);


// console.log(num1);
// console.log(num2);
// function longestWord3(sentence) {
//   let words = sentence.split(' ');
//   let savedWord = words.shift();

//   words.forEach(word => {
//     if (word.length > savedWord.length) {
//       savedWord = word;
//     }
//   });

//   return savedWord;
// }

// function longestWord4(sentence) {
//   let words = sentence.split(' ');
//   let savedWord = words[0];

//   words.forEach(word => {
//     if (savedWord.length <= word.length) {
//       savedWord = word;
//     }
//   });

//   return savedWord;
// }

// console.log(longestWord4("This is a very long sentence, but what if we had another word in here like Mississippi."))
// let a = 2;
// let b = Math.floor(Math.random() * 2);
// a *= b;

// if (a === 2) {
//   console.log('The value of `a` is two.');
// } else {
//   console.log('The value of `a` is NOT two.');
// }

