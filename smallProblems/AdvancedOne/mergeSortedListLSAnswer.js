// The LS answers below is really good, and I like how they were able to mutate the copy array and that was how they were able to know when to be finished, because one of the problems my code had was that I pushed each element one at a time and so I left many elements in the sister array without pushing them. I like how they used the shift method which returns the shifted element and then they push that into the new array. They didn't have to do any complex logic since they just hard coded the first element of each array and since they are mutating that array, then they will continue until it was gone. Very nice.

function merge(array1, array2) {
    let copy1 = array1.slice();
    let copy2 = array2.slice();
    let result = [];

    while (copy1.length > 0 && copy2.length > 0) {
      result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
    }

    return result.concat(copy1.length === 0 ? copy2 : copy1);
  }
//   Seo uses two pointer approach

function merge(arr1, arr2) {
    if (!arr1.length) return arr2;
    if (!arr2.length) return arr1;
    let result = [];
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer1 < arr1.length || pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            result.push(arr1[pointer1]);
            pointer1++;
        } else if (arr1[pointer1] > arr2[pointer2]) {
            result.push(arr2[pointer2]);
            pointer2++;
        } else {
            result.push(arr1[pointer1], arr2[pointer2]);
            pointer1++;
            pointer2++;
        }
        if (pointer1 >= arr1.length || pointer2 >= arr2.length) {
            break;
        }
    }
    if (pointer1 < arr1.length) {
        const copy = arr1.slice(0);
        result = result.concat(copy.slice(pointer1));
    }
    if (pointer2 < arr2.length) {
        const copy2 = arr2.slice(0);
        result = result.concat(copy2.slice(pointer2));
    }
    return result;
}

// Wes below
function merge(arrParamA, arrParamB) {
    let result = [];
    let shallowA = arrParamA.slice();
    let shallowB = arrParamB.slice();

    while (shallowA['length'] !== 0 && shallowB['length'] !== 0) {
      if (shallowA[0] > shallowB[0]) {
        result.push(shallowB.shift());
      } else {
        result.push(shallowA.shift());
      }
    }

    while (shallowA['length'] !== 0) {
      result.push(shallowA.shift());
    }

    while (shallowB['length'] !== 0) {
      result.push(shallowB.shift());
    }

    return result;
  }
// Brendan below
function merge(arr1, arr2) {
    let [min, max] = [ Math.min(...arr1, ...arr2), Math.max(...arr1, ...arr2) ];
    let sortedMerged = [];
    for (let value = min; value <= max; value += 1) {
      arr1.forEach(val => (val === value) ? sortedMerged.push(val) : null);
      arr2.forEach(val => (val === value) ? sortedMerged.push(val) : null);
    }
    return sortedMerged;
  }