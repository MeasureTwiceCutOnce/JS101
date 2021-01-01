// let name = 'johnson';

// ['kim', 'joe', 'sam'].forEach(fname => {
//   name = fname;
// });

// console.log(name);
// console.log(fname);


let names = ['kim', 'joe', 'sam', 'Jim', 'Rohn'];
names.forEach((_, index) => {
  console.log(`'${index + 1}: Got a name!'` )
});