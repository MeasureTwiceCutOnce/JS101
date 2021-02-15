function merge(arr1,arr2) {
    // let newArray = arr1.slice().concat(arr2.slice())
    let newArray = []
    let longerArrayLength = arr1.length;
    let longerArray = arr1;
    let shorterArray = arr2;

    if (arr2.length > longerArrayLength) {
        longerArrayLength = arr2.length;
        longerArray = arr2;
        shorterArray = arr1;
    }

    for (let i = 0; i < longerArrayLength; i++) {
        if (longerArray[i] < shorterArray[i]) {
            newArray.push(longerArray[i])
        }
        newArray.push(shorterArray[i])
    }

    return newArray;
}
console.log(
merge([1, 5, 9], [2, 6, 8]),      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]),         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]),             // [1, 4, 5]
merge([1, 4, 5], []),             // [1, 4, 5]
)
