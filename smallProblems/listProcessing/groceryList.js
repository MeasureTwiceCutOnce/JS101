function buyFruit(array) {
    // fill method
//     let filledArray = [];

//     array.reduce((acc,curr) => {
//         acc.push(filledArray.fill(curr[0],0,curr[1]))

//         return acc;
//     },[])


// console.log(filledArray.flat())

    // map method
    let filledArray = array.map(arr => {
        return Array.from({length:arr[1]}, () => (arr[0]))
    })
return filledArray.flat();

    // for loop
    // let newArray = [];
    // for (let i = 0; i < array.length; i++) {
    //         let count = array[i][1];
    //         while (count > 0) {
    //             newArray.push(array[i][0])
    //             count--;
    //         }
    //         count = array[i][1]
    // }
    // console.log(newArray)
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// The LS answer below is a good one. I like how they flattened the nested arrays by just using reduce and concating the previous element with the following element. That is really smooth. I also see that they did pretty much thge same as me in the first step when they assigned the quantity and name to a variable. I just put mine into the for loop.
// function buyFruit(fruitsList) {
//     return fruitsList
//       .map(fruit => repeat(fruit))
//       .reduce((groceryList, fruit) => groceryList.concat(fruit));
//   }

//   function repeat(fruitAndQuantity) {
//     let result = [];
//     let fruit = fruitAndQuantity[0];
//     let quantity = fruitAndQuantity[1];

//     for (let num = 0; num < quantity; num += 1) {
//       result.push(fruit);
//     }

//     return result;
//   }
// //   Seohyun put the for loop in the reduce function which is pretty cool
// function buyFruit(arr) {
//     return arr.reduce((acc, current) => {
//         const subArr = [];
//         for (let i = 1; i <= current[1]; i++) {
//             subArr.push(current[0]);
//         }
//         return acc.concat(subArr);
//     }, []);
// }

// // Below is Joey's answer and I like how he used the pop method while in the map method to get the name and the quanitty and then he simply put that into a for loop
// function buyFruit(groceryArray) {
//     return groceryArray
//       .map(item => {
//         let count = item.pop();
//         let fruit = item.pop();

//         for (count; count > 0; count--) {
//           item.push(fruit);
//         }

//         return item;
//       })
//       .flat();
//   }
// // Wes used the reduce method
// /*
// for buyFruit
// 1. SET result to empty array
// 2. SET idx to 0
// 3. WHILE idx is less than the length of the input array
//   - SET rep to the number at index 1 of the current element
//   - WHILE rep is greater than 0
//     - SET result to include name at index 0 of the current element
//     - SET rep to rep minus one
//   - RETURN result
// 4. RETURN result
// */

// function buyFruit(groceryListP) {
//     return groceryListP.reduce((acc, ele) => {
//       let rep = ele[1];
//       while (rep > 0) {
//         acc.push(ele[0]);
//         rep -= 1;
//       }
//       return acc;
//     }, []);
//   }

//   console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
//   // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// //   Below Sam used the destructuring technique to gget the name and quantity from each sub array.
// function buyFruit(fruitQunatities) {
//     let fruitList = [];
//     fruitQunatities.forEach(fruitQuantity => {
//       let [fruit, quantity] = fruitQuantity;
//       while (quantity) {
//         fruitList.push(fruit);
//         quantity -= 1;
//       }
//     });
//     return fruitList;
//   }