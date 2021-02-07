function alphabeticNumberSort(array) {
    let order = "zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen"

    let sortedOrder = order.split(",").sort((a,b) => {
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    })
    let length = array.length;
    let sortedArray = [];

    for (let i = 0; i < length; i++) {
        sortedArray.push(array[array.indexOf(sortedOrder[i])])
        // sortedArray.splice(sortedOrder.indexOf(array[i]), 0, array[i])
    }
    console.log(sortedArray)
}

alphabeticNumberSort(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
 // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

//  The below was a pretty cool way to make your own method within JS that will insert a given argument at a given index
// Array.prototype.insert = function ( index, item ) {
//     this.splice( index, 0, item );
// };
// Then you can use it like:

// var arr = [ 'A', 'B', 'D', 'E' ];
// arr.insert(2, 'C');

// => arr == [ 'A', 'B', 'C', 'D', 'E' ]

// I did not understand this problem AT ALL!!
//  The solution below is from LS and I really don't understand what is going on, and I could not explain it to you. I think it is something to do with sorting the array in alphabetical order and I don't see what is going on though. My attempt above should be working but it is returning undefined, and I am not sure why that is.
let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return array.sort(wordSort);
}