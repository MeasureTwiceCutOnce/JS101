function timeOfDay(number) {
    // let minutesTotal = (Number(number) / 60).toFixed(2);
    // let time = minutesTotal.toString().split(".");
    // return min[1] * (1 / 60);
    // let days = 35 / 1440;
    // let totalMinutes = days - Math.floor(days)
    // let hours = minutes * 24;
    // let mins = hours * 60;
    // let days = time[0] / 24;

    let totalDays = Math.floor(number / 1440);
    let totalHours = (number / 1440) - totalDays;
    let totalMinutes = totalHours * 60;
    return totalMinutes;
}

// console.log(timeOfDay(0)) // "00:00");
// console.log(timeOfDay(-3)) // "23:57");
console.log(timeOfDay(35)) // "00:35");
// console.log(timeOfDay(-1437)) // "00:03");
// console.log(timeOfDay(3000)) // "02:00");
// console.log(timeOfDay(800)) // "13:20");
// console.log(timeOfDay(-4231)) // "01:29");

// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input.

// You may not use javascript's Date class methods.
