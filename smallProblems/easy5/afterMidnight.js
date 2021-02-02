function timeOfDay(number) {
    let totalDays = Math.floor(number / 1440);
    let totalHours = Math.floor(((number / 1440) - totalDays) * 24);
    let totalMinutes = (((number / 1440) - totalDays) * 24) - totalHours;
    let minutes = Math.round(totalMinutes * 60);
    let daysOfTheWeek = {0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}

    if ( totalHours < 10 && minutes < 10) {return `${daysOfTheWeek[totalDays]} "${daysOfTheWeek[totalDays]} 0${totalHours}:${minutes}0"`};
    if ( totalHours < 10) {return `${daysOfTheWeek[totalDays]} "0${totalHours}:${minutes}"`};
    if ( minutes < 10) {return `${daysOfTheWeek[totalDays]} "${totalHours}:${minutes}0"`};
    return `${daysOfTheWeek[totalDays]} "${totalHours}:${minutes}"`
}

// function timeOfDay(number) {

//     return number % 1440
// }

console.log(timeOfDay(0)) // "00:00");
console.log(timeOfDay(-3)) // "23:57");
console.log(timeOfDay(35)) // "00:35");
console.log(timeOfDay(-1437)) // "00:03");
console.log(timeOfDay(3000)) // "02:00");
console.log(timeOfDay(800)) // "13:20");
console.log(timeOfDay(-4231)) // "01:29");

// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input.

// You may not use javascript's Date class methods.

// My GOD! This took me like two hours to complete!!! Ay Curumba! LS answer below. I think our answers are similar except I did not think to use the modulo to figure out the numbers behind the decimal.

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function leadingZero(number) {
//   return number < 10 ? `0${number}` : String(number);
// }

// function formatTime(hours, minutes) {
//   return `${leadingZero(hours)}:${leadingZero(minutes)}`;
// }

// function timeOfDay(deltaMinutes) {
//   if (deltaMinutes < 0) {
//     deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
//   } else {
//     deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;
//   console.log(hours, minutes)
//   return formatTime(hours, minutes);
// }