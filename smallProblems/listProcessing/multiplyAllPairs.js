function multiplyAllPairs(arr1, arr2) {
    // let multipliedArray = [];

    // Double for loop approach
    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         multipliedArray.push(arr1[i] * arr2[j])
    //     }
    // }

    // map in map approach
    // console.log(  arr1.map(num => num.map(number => ) sum = num * number)))

    // multipliedArray.sort((a,b) => a - b);
    // console.log(multipliedArray);

    // Below is the LS answer which uses the for Each method
    // function multiplyAllPairs(array1, array2) {
    //     let products = [];
    //     array1.forEach(item1 => {
    //       array2.forEach(item2 => {
    //         products.push(item1 * item2);
    //       });
    //     });
    //     return products.sort((item1, item2) => item1 - item2);
    //   }
// }



multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// I love Wes' answer below
/*
I tried to generalize to multiply all n-tuples using the idea of a Cartesian product.

for multiplyAllNTuples:
1. GET cartesian product
2. SET result variable to empty array
3. WHILE there are cartesian products in renesProducts
  - SET product to 1
  - WHILE there are elements in cartesian product
    1. SET product to product times element
    2. RETURN product
  - SET result to include product
4. SET result so that it is in ascending order
5. RETURN result

for getCartesianProduct:
1. SET renesProducts to first input array
2. WHILE there are (additional) arrays in the input arrayOArrays
  - SET map1 to empty array
  - WHILE there are ele1 elements in renesProducts
    1. SET map2 to empty array
    2. WHILE there are ele2 elements in current input array (skipping first)
      - SET array to [ele1, ele2]
      - SET array to flattened version
      - SET map2 to include flattened version
    3. SET map1 to include map2
    4. SET map1 to flattened version
  - SET renesProducts to map1
3. RETURN renesProducts
*/

function getCartesianProduct(arrayOArraysP) {
    return arrayOArraysP.reduce((accumulator, otherArray) => {
      return accumulator.flatMap(ele1 => {
        return otherArray.map(ele2 => {
          return [ele1, ele2].flat();
        });
      });
    });
  }

  function multiplyAllNTuples(...arrayOArraysP) {
    let renesProducts = getCartesianProduct(arrayOArraysP);
    return renesProducts.reduce((result, array) => {
      result.push(
        array.reduce((product, ele) => {
          product *= ele;
          return product;
        }, 1)
      );
      return result;
    }, []).sort((a, b) => a - b);
  }

  console.log(multiplyAllNTuples([2, 4], [4, 3, 1, 2], [2, 2, 2]));

  //  [
  //    4, 4, 4,
  //    8, 8, 8, 8, 8, 8,
  //    12, 12, 12,
  //    16, 16, 16, 16, 16, 16,
  //    24, 24, 24,
  //    32, 32, 32
  //  ]

//   Looks like I should have used map with another method
function multiplyAllPairs(arr1,arr2) {
    arr1.reduce((accum,curr) => {
      return [...accum, ...arr2.map((elem) => elem*curr)]
    }, [])
        .sort((a,b) => a - b);
  }

//   Or this
function multiplyAllPairs(arr1, arr2) {
    return arr1
           .reduce((products, num1) => {
             return products.concat(arr2.map(num2 => {
               return num2 * num1;
             }));
           },[])
           .sort((a, b) => a - b);
  }