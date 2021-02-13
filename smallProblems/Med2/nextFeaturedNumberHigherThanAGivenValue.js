function featured(num) {
    for (let i = num; i <= 9876543201; i++) {
        if (i % 2 === 1 && i % 7 === 0 && isValid(String(i))) {
            return i;
        }
    }
    return "here is no possible number that fulfills those requirements."
}
function isValid(num) {
    let arr =  num.split("")
    let dupArray = arr.filter((item, index) => arr.indexOf(item) != index)

    if (dupArray.length > 0) {
        return false;
    }
    return true;
}
console.log(
featured(12),           // 21
featured(20),           // 21
featured(21),           // 35
featured(997),          // 1029
featured(1029),         // 1043
featured(999999),       // 1023547
featured(999999987),    // 1023456987
featured(9876543200),   // 9876543201
featured(9876543201),   // "There is no possible number that fulfills those requirements."
)
// The auxilary function used by LS below is what I need to see because I knew that I could use a hash table to map out an array of objects, but this is new to be because they didn't count the number of each element, but just checked to see if the array had one already(true), and if it did, then they would return false to the main function which would tell the main function that this has a duplicate.
// function allUnique(number) {
//     let digits = String(number).split('');
//     let seen = {};

//     for (let idx = 0; idx < digits.length; idx += 1) {
//       if (seen[digits[idx]]) {
//         return false;
//       }

//       seen[digits[idx]] = true;
//     }

//     return seen;
//   }
//   console.log(allUnique(234567890));
//   console.log(allUnique(2344));