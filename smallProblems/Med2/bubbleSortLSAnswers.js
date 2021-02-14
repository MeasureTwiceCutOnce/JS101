// Below is an answer from a website that is a little more efficient thatn the double for loop and this is similar to our last problem which also used a do while loop in order to speed up the processing time. OK, I think I see what is going on here. All pairs are set to default of false because they have not passed the sorted check test. As the loop goes through all the pairs the and swaps a pair, then that pair is stamped with a checked "true" mark and the loop will not check that same pair again later which would speed up the time on this loop. I don't understand where the program saves the checked stamp and how it would know that this pair has been checked since the numbers will be changing all over the place.

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return inputArr;
 };
// The LS answer below is using the while loop and the false true optimization with their answer. They also creatively used destructuring to swap the values without having to do the temp variable two pointer method. Very nice.
function bubbleSort(array) {
    while (true) {
      let swapped = false;
      for (let idx = 1; idx < array.length; idx++) {
        if (array[idx - 1] <= array[idx]) continue;
        [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
        swapped = true;
      }
      if (!swapped) break;
    }
  }