// function ageMaker(min, max) {
//     let randomAge = Math.floor(Math.random() * (max - min + 1)) + min;

//     console.log(`Teddy is ${randomAge} years old!`)
// }

//     ageMaker(120, 20)
for(let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * (120 - 1)))
    i;
}
  //Teddy is 69 years old!

//   I like how Boris below dealt with stupid users who switch the numbers.
// function getTeddyAge(min, max) {
//     let maxVal = max > min ? max : min;
//     let minVal = max > min ? min : max;
//     let age = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
//     console.log(`Teddy is ${age} years old!`);
//   }

// This was also a smooth way to deal with switched numbers: use the sort method on the input.
// let age = (max, min) => {
//     let ages = [max, min].sort();
//     return Math.round(Math.random() * (ages[1] - ages[0])) + ages[0];
//   };
//   console.log(`Teddy is ${age(120, 20)} years old!`);
//   ``