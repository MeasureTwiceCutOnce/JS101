
console.log([1, 2, 3].every(num => {
    return num = num * 2;
  }));
// 2
// 4
// 6
// true

// console.log(['ant', 'bear', 'caterpillar'].pop().length); THis one was crazy because
// console.log([1, 2, 3].map(num => num * num));

// console.log([1, 2, 3].map(num => {
//     return num * num;
//   }));

// console.log([1, 2, 3].filter(num => 'hi')); The value is truthy therefore it will just return all the values without evaluating them.