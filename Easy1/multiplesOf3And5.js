function getUserInput(prompt) {
  let sync = require("readline-sync");
  return sync.question(prompt);
}

let targetNumber = parseInt(getUserInput(`Please enter a number.\n`));

function createArray(numbers) {
  let set = new Set();
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  let threes = range(0, numbers, 3);
  let fives = range(0, numbers, 5);

  set.add(threes);
  set.add(fives);

  return sumOfMultiples(set);
}

function sumOfMultiples(nums) {
  let sum = [];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }

  return sum;
}

if (targetNumber < 1) {
  parseInt(getUserInput(`Please enter an number above one.`));
} else {
  console.log(createArray(targetNumber))
}

// let array = [];
// for (let i = 0; i <= numbers; i + 3) {
//   array.push(numbers[i]);
// }
// for (let i = 0; i < numbers; i + 5) {
//   array.push(numbers[i]);
// }