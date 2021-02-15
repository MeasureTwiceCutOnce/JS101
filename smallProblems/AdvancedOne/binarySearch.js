// I am not sure why my code is not working. It looks exactly as the regular ansewr, but I can't get it to work. Weird.

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

function binarySearch(array, searchItem) {
    let upperLimit = array.length - 1;
    let lowerLimit = 0;
    let mid = Math.floor((array[lowerLimit] + array[upperLimit])/2);

    while (lowerLimit <= upperLimit) {

        if (array[mid] === searchItem) {
            return mid;
        } else if (array[mid] < searchItem) {
            lowerLimit = mid + 1;
            return binarySearch(array,searchItem);
        } else if (array[mid] > searchItem) {
            upperLimit = mid - 1;
            return binarySearch(array,searchItem);
        }
    }

    return -1;
}
console.log(
binarySearch(yellowPages, 'Pizzeria'),                   // 7
binarySearch(yellowPages, 'Apple Store'),                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77),    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89),    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5),     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'),  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'),  // 6
)