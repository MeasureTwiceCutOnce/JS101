let arr = ['10', '11', '9', '7', '8'];
let numbers = [];

arr.map(num => numbers.push(Number(num)));
console.log(numbers);


let sortedArray = numbers.sort((a,b) => b - a);
console.log(sortedArray);
// console.log(sortedArray);