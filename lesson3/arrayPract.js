let produceKeyValues = Object.entries(produce);
// produceKeyValues contains:
//   [['apple', 'Fruit'],
//    ['carrot', 'Vegetable'],
//    ['pear', 'Fruit'],
//    ['broccoli', 'Vegetable']]

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;

  console.log(`${key} is a ${value}`);
});
// logs:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable
// // Destructuring broken out
// let key = keyValue[0];
// let value = keyValue[1];
// // I love this object iteration stuff because I did not know how to do this before. I think I will practice this for a few days making sure that I do problems that require iterating over an object.