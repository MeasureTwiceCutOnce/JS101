// Yates Shuffle which iterates from the end of an array and swaps that number with a random index from the same array using the destructuring method. Looks smooth.

function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
      [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
    }
  }