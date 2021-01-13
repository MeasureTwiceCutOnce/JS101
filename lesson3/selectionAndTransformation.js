function multiply(NumList, multiplier) {
  let multipliedNums = [];

  for(let i = 0; i < NumList.length; i++) {
    let currentNum = NumList[i];

    multipliedNums.push(currentNum * multiplier);
  }
  return multipliedNums;
}




let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]

// function selectType(produceList, selectionCriterion) {
//   let produceKeys = Object.keys(produceList);
//   let selectedItems = {};

//   for (let counter = 0; counter < produceKeys.length; counter++) {
//     let currentKey = produceKeys[counter];
//     let currentValue = produceList[currentKey];

//     // used to be (currentValue === 'Fruit')
//     if (currentValue === selectionCriterion) {
//       selectedItems[currentKey] = currentValue;
//     }
//   }

//   return selectedItems;
// }

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// selectType(produce, 'Fruit');     // => {apple: 'Fruit', pear: 'Fruit'}
// selectType(produce, 'Vegetable'); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
// selectType(produce, 'Meat');      // => {}

// function doubleOddIndices(NumList) {

//   for(let i = 0; i < NumList.length; i++) {
//     if( i % 2 === 1) {
//       NumList[i] *= 2;
//     }
//   }
//   return NumList;
// }
// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddIndices(myNumbers));

// function doubleOddNumbers(NumList) {
//   let doubleNumbers = [];

//   for(let i = 0; i < NumList.length; i++) {
//     let currentNum = NumList[i];

//     if (currentNum % 2 == 1) {
//       doubleNumbers.push(currentNum * 2);
//     } else {
//       doubleNumbers.push(currentNum);
//     }
//   }
//   return doubleNumbers;
// }

// // // function doubleNumbers(numbers) {
// // //   numbers.forEach(element => element * 2);
// // //   return numbers;
// // // }
// // function doubleNumbers(numbers) {
// //   let counter = 0;

// //   while(counter < numbers.length) {
// //     numbers[counter] *= 2;
// //     counter++;
// //   }
// //   return numbers;
// // }
// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// // console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]


// // let produce = {
// //   apple: 'Fruit',
// //   carrot: 'Vegetable',
// //   pear: 'Fruit',
// //   broccoli: 'Vegetable'
// // };

// // // selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }


// // function selectFruit(obj) {
// //   let selectedFruit = {};
// //   let produceKeys = Object.keys(obj);

// //   for(let i = 0; i < produceKeys.length; i++) {
// //     let currentKey = produceKeys[i];
// //     let currentValue  = obj[currentKey];

// //     if(currentValue === "Fruit") {
// //       selectedFruit[currentKey] = currentValue;
// //     }
// //   }
// //   return selectedFruit;
// //   }

// // console.log(selectFruit(produce));




// // //Selcting certain numbers from an array
// // let numbers = [1, 3, 9, 11, 1, 4, 1];
// // let ones = [];

// // for (let counter = 0; counter < numbers.length; counter++) {
// //   let currentNum = numbers[counter];

// //   if (currentNum === 1) {
// //     ones.push(currentNum); // appends currentNum to the ones array
// //   }
// // }

// // ones; // => [1, 1, 1]


// // // Adding something to each element of an array

// // let fruits = ['apple', 'banana', 'pear'];
// // let transformedElements = [];
// // let counter = 0;

// // while (counter < fruits.length) {
// //   let currentElement = fruits[counter];

// //   transformedElements.push(currentElement + 's'); // appends transformed string into array
// //   counter += 1;
// // }

// // transformedElements; // => ['apples', 'bananas', 'pears']

// // // Finding something in an array
// // function selectVowels(str) {
// //   let selectedChars = '';

// //   for (let counter = 0; counter < str.length; counter += 1) {
// //     let currentChar = str[counter];

// //     if ('aeiouAEIOU'.includes(currentChar)) {
// //       selectedChars += currentChar;
// //     }
// //   }

// //   return selectedChars;
// // }

// // selectVowels('the quick brown fox');     // => 'euioo'

// // let sentence = 'I wandered lonely as a cloud';
// // selectVowels(sentence);                  // => 'Iaeeoeaaou'
// // sentence;                                // => 'I wandered lonely as a cloud'


// // let numberOfVowels = selectVowels('hello world').length;
// // numberOfVowels; // => 3

