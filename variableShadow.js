// let name = 'johnson';

// ['kim', 'joe', 'sam'].forEach(fname => {
//   name = fname;
// });

// console.log(name);
// console.log(fname);


let names = ['kim', 'joe', 'sam', 'Jim', 'Rohn'];
names.forEach((name) => {
  console.log(`'${name[0].toUpperCase() + name.substring(1)}: Got a name!'` )
});