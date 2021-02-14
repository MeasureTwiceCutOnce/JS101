// My function did work however it needed a double for loop to work while I originally had a for loop and a while loop on the inside. I am sure it could have worked if I got the syntax correct. I am a little confused on why the double for loop is not calling the i variable anywhere. OHHH! I think I get it. The i loop is checking the entire array while the j loop is checking the adjacent pair only. So the i loop will keep running until every j pair is correct.

function bubbleSort(array) {
    let temp = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;

}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]



