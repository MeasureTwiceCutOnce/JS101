function sumOrProduct() {
  const rlSync = require('../modules/node_modules/readline-sync');

  let strArr = rlSync.question("Enter multiple values separated by a space: ").split(" ");
  let numArr = strArr.map(str => parseInt(str));
  let operator = rlSync.question("Enter 's' to compute the sum, 'p' to compute the product: ");

  if (numArr.length < 2) return console.log('Error: Invalid Value Input');
  if (operator !== 'p' && operator !== 's') {
      return console.log('Error: Invalid Compute Input');
  }

  let func = (operator === 'p') ? (acc, val) => acc * val  : (acc, val) => acc + val;
  let aggregate = numArr.reduce(func, operator == "p" ? 1 : 0);
  if (isNaN(aggregate)) return console.log('Error: Invalid Value Input');
  console.log(`The ${operator === 'p' ? 'product' : 'sum'} of the entered values is ${aggregate}.`);
}
console.log(sumOrProduct());