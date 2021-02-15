// Here we have the LS answer which is sort of similar to mine where it is breaking the original array in two half copies and then merging those. I spent a lot of time trying to figure out a way to split these arrays, and one was similar to the one below. However, I ended up using a while loop that broke the array into two halves and then just merged those two halves using the previous merge sort function.

function mergeSort(array) {
    if (array.length === 1) return array;

    let subArray1 = array.slice(0, array.length / 2);
    let subArray2 = array.slice(array.length / 2);
    subArray1 = mergeSort(subArray1);
    subArray2 = mergeSort(subArray2);

    return merge(subArray1, subArray2);
  }
