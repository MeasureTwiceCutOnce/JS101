function average(array) {
    let sum = 0;
    array.forEach(element => {
        return sum += element;
    })

    console.log(Math.floor(sum / array.length));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

// Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

// The answer below is Joey's answer which utilizes the reduce method as I was trying to use.

function average(numbers) {
    return Math.floor(
      numbers.reduce((sum, currentValue) => sum + currentValue) / numbers.length
    );
  }