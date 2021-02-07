function findDup(array) {
    let seen = {};

    for (let idx = 0; idx < array.length; idx += 1) {
      if (seen[array[idx]]) {
        return array[idx];
      } else {
        seen[array[idx]] = true;
      }
    }

    return undefined;
  }

  // The LS answer above is pretty straigth forward but I am missing a couple things: the return true value and the return undefined. I don't understand why they would return undefined. Also, why are they returning true.
// The solution below is also theirs and it is pretty neat how they set up the function to count the duplicates. I guess that woudl take more memory but it seems right. The bottom one is almost recursive, but I guess more so a loop in  a loop where each element is taken one by one and then that element is checked against every element in the array to see if the count would be 2. So at best this would be O(1) , but more than likely to be O(n^2).

function count(array, element) {
  let count = 0;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === element) {
      count += 1;
    }
  }
  return count;
}

function findDup(array) {
  return array.find(element => count(array, element) === 2);
}

