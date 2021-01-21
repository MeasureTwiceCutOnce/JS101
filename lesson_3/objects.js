// Guard clause allows the non important numbers to be taken care of without much fanfare.

let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) continue;

  let square = numbers[index] * numbers[index];
  console.log(square);
}

// let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 1) {
//     let square = numbers[index] * numbers[index];
//     console.log(square);
//   }
// }

// let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
// let index = 0;

// while (index < names.length) {
//   if (names[index][0] === 'E') {
//     break;
//   }

//   console.log(names[index]);
//   index += 1;
// }


// let str = '';

// while (true) {
//   if (str.length >= 10) {
//     break;
//   }

//   str += '*';
//   console.log(str);
// }

// let str2 = '**********';

// while (true) {
//   if (str2.length <= 0) {
//     break;
//   }

//   str2 -= '*';
//   console.log(str2);
// }
// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// let pets = Object.keys(numberOfPets);
// let counter = 0;

// while (counter < pets.length)  {
//   let currentPet = pets[counter];
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`I have ${currentPetNumber} ${currentPet}!`);
//   counter += 1;
// }

// console.log(pets);

// This is important because this shows how to count over an object which I think should have been taught a long time ago. This is very important to know. Though we have been taught brakcet notation which is being used here, it is used in a way that I haven't though about before.