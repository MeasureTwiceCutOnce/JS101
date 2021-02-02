// function interleave(arr1, arr2) {
//     let newArray = [];

//     // arr1.forEach((element, index)=> newArray.push(element,arr2[index]));


//     // arr1.redcue(element => newArray )

//     console.log(newArray);
// }
//  I like how Richard used the map function below. This was the step that I was missing in order to use the reduce function.  He created a variable that would take the 0 indexed element from each array and then he concated that combination onto the empty array. He also used the spread operator which gives him more points.
// Further Exploration using map()
// function interleave(arrA, arrB) {
//     let interleaved = arrA.map((_, idx) => [arrA[idx], arrB[idx]]);
//     return [].concat(...interleaved);
//   }

//   Below Joey did the same as me where he made two pointers and combined them one step at a time in a loop, however, I used did not go through the trouble of finding the length of the final array and I just looped through one of the original arrays since we know that they will be equal.

// function interleave(arrayOne, arrayTwo) {
//     const combinedLength = arrayOne.length + arrayTwo.length;
//     const result = [];
//     let count = 0;

//     while (result.length !== combinedLength) {
//       result.push(arrayOne[count], arrayTwo[count]);
//       count++;
//     }

//     return result;
//   }

// Of course Ol Wes does it again with the reduce function. I love how this better shows me the power of using the reduce function. It is really robust and versatile. This is essentially my answer but using the reduce and it will not just return a single value, but an array as asked. My question would, would this change the original array or make a new, because it looks like it changes the original. And it does not mutate the original array. See test below.
/*
START

1.  SET result array to empty array
2.  WHILE there are still elements to add to result array
      SET result array to include ith element of each input array
      SET idx variable to idx plus 1
3.  RETURN/PRINT result array

END
*/

// function interleave(firstArrayP, secondArrayP) {
//     return firstArrayP.reduce((acc, _, idx) => {
//       acc.push(firstArrayP[idx], secondArrayP[idx]);
//       return acc;
//     }, []);
// }
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c']
// console.log(interleave(arr1,arr2));    // [1, "a", 2, "b", 3, "c"]
// console.log(arr1);


function interleave(array1, array2) {
    return array1.reduce((acc, curr, idx) => {
      return [...acc, curr, array2[idx]];
    }, []);
  }


let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c']
console.log(interleave(arr1,arr2));    // [1, "a", 2, "b", 3, "c"]
console.log(arr1);




// function interleave(arr1,arr2) {
//     let newArray = [];
//     let j = 0;

//     for (let i = 0; i < arr1.length; i++) {
//         newArray.push(arr1[i]);
//         newArray.push(arr2[j]);
//         j++;
//     }
//     console.log(newArray);
// }


interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]


// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// THe LS answer below is smooth because I didn't know that you could simply just put the two clauses next to each other. I also didn't know that I could use the same index for both arrays.

// function interleave(array1, array2) {
//     let newArray = [];

//     for (let idx = 0; idx < array1.length; idx += 1) {
//       newArray.push(array1[idx], array2[idx]);
//     }

//     return newArray;
//   }