// function logElements(array) {
//   array.forEach((element)=> console.log(element));
// }

// logElements([1, 2, 3]);

// let number = 10;

// [6, 2, 1, 2, 3].forEach(number => {
//   console.log(number);
// });

// Capitlize the Words 

function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let names = ["chris", "kevin", "naveed", "frank"];
capitalize(names);
console.log(names); // => ['Chris', 'Kevin', 'Naveed']