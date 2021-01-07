// #10 Slice the sentence

let advice = "Few things in life are as important as house training your pet dinosaur.";

let cutPoint = advice.indexOf("house");
console.log(advice.slice(0, cutPoint));


// Expected return value:
// => 'Few things in life are as important as '



// // #9 Dino with More

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// let newbies = ["Dino", "Hoppy"];

// for (let i = 0; i < newbies.length; i++) {
//   flintstones.push(newbies[i]);
// }

// console.log(flintstones)

// // #8 Adding to an array
// // Very easy. This is what I mean by needing to do better scaffolding. We have done several problems that require the use of push to solve. We need to do the same with problems with higher level functions like reduce and map.

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones[flintstones.length] = "Dino";
// flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones.push("Dino");

// console.log(flintstones);

// //#7 Dino Search
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino. However, Dino is a bad pet.";

// function findDino(string) {
//   let regex = /Dino/g;
//   // let arrayOfString = string.split(" ");
//   // console.log(arrayOfString);
//   let found = string.match(regex);

//   if (found < 1) {
//     return `Sorry. Nothing was not found.`
//   } else {
//     return `There were ${found.length} matches.`
//   }

// }

// console.log(findDino(str1));
// console.log(findDino(str2));
// // #6 Adding elements to an object

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// // ages.Marilyn = 22;
// // ages.Spot = 237;

// Object.assign(ages, additionalAges);

// console.log(ages);

// // #4 First letter Capital
// // LS more succinct solution = munstersDescription.charAt(0).toUpperCase() +
//   munstersDescription.substring(1).toLowerCase();
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// function firstLetterCapital(string) {
//   let letters = string.toLowerCase();
//   let upperCase = letters[0].toUpperCase()
//   let words = upperCase.concat(letters.slice(1,letters.length));

//   return words;
// }

// console.log(firstLetterCapital(munstersDescription));

// // #3 Names and ages
// // LS solution = ages.hasOwnProperty("Spot");
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// function nameChecker(string) {
//   let values = Object.keys(string);

//   return values.includes("Spot") ? true : false;
// }

// console.log(nameChecker(ages));

// // Check for Exclamation Mark
// let str1 = "Come over here!"; // true
// let str2 = "What's !up, Doc?"; // false

// function exclamationMarkChecker(string) {
//   if (string.match(/!$/g)) {return true}  else {return false};
// }
// // LS solution

// str1.endsWith("!"); // true
// str2.endsWith("!"); // false

// console.log(exclamationMarkChecker(str1));
// console.log(exclamationMarkChecker(str2));

// QUestion 1
// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4];

// console.log(numbers);