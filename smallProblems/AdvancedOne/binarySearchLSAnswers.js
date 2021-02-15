// The LS Answer below is what I had, though I did have to look up the exact syntax. I have done this type of problem before, so I knew what to do just waas not strong on the syntax. Repetition is the key.

function binarySearch(array, searchItem) {
    let high = array.length - 1;
    let low = 0;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (array[mid] === searchItem) {
        return mid;
      } else if (array[mid] < searchItem) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return -1;
  }
//   William Baker below used recursion like me
let binarySearch = function(array, item, indexOffset = 0) {
    let midPoint = Math.floor(array.length / 2);

    if (array[midPoint] === item) {
      return midPoint + indexOffset;
    } else if (array.length <= 1) {
      return -1;
    }

    if (array[midPoint] < item) {
      indexOffset += midPoint + 1;
      return binarySearch(array.slice(midPoint + 1), item, indexOffset);
    } else {
      return binarySearch(array.slice(0, midPoint), item, indexOffset);
    }

  };