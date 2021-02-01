function halvsies(array) {
    let mid = Math.ceil(array.length / 2);
    let newArray = [];
    let firstHalf = Array();
    let secondHalf = Array();

    newArray.push(firstHalf);
    newArray.push(secondHalf);
// first half push numbers
    for (let i = 0; i < mid; i++) {
        newArray[0].push(array[i])
    }
    for (let i = mid; i < array.length; i++) {
        newArray[1].push(array[i])
    }
    console.log(newArray);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]


// Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.