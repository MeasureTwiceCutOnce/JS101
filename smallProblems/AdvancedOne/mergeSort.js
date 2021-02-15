// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]
function mergeSort(array) {
    // let newArray = [];
    let half_length = Math.ceil(array.length / 2);
    // let leftSide = array.splice(0,half_length);
    // let rightSide = array.splice(half_length,array.length);

    // newArray.push(leftSide);
    // newArray.push(rightSide);

    let newArray = [];
    let i = 0;
    let n = array.length;

  while (i < n) {
    newArray.push(array.slice(i, i += half_length));
  }




    // newArray.map((elements,index)=> {
    //     while (index <= half_length) {
    //         newArray.push(elements)
    //     }
    //     while (index >= )
    // })

    // for (let i = 0; i < half_length; i++) {

    // }

    // newArray.map(element => element)

    return merge(newArray[0],newArray[1])
    // return newArray
}
function merge(arr1, arr2) {
    let [min, max] = [ Math.min(...arr1, ...arr2), Math.max(...arr1, ...arr2) ];
    let sortedMerged = [];
    for (let value = min; value <= max; value += 1) {
      arr1.forEach(val => (val === value) ? sortedMerged.push(val) : null);
      arr2.forEach(val => (val === value) ? sortedMerged.push(val) : null);
    }
    return sortedMerged;
  }
console.log(
mergeSort([9, 5, 7, 1]),           // [1, 5, 7, 9]
mergeSort([5, 3]),                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]),        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']),
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]),
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
)