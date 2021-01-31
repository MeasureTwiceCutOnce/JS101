function union(arr1, arr2) {
    return arr1.concat(arr2.filter(dup => arr1.indexOf(dup) < 0));
}
console.log(
union([1, 3, 5], [3, 6, 9]),  // [1, 3, 5, 6, 9]
union([1, 3, 5], [3, 6, 8, 3, 2, 0]),
union([1, 3, 5, 3, 1, 4], [3, 3, 9]),
union([1, 3, 5], [1, 6, 9,4]),
)
// Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.