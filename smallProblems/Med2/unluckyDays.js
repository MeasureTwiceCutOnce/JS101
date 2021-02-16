/*
Same answer as everyone else, but I
didn't see a for...of so
I posted.
*/
function fridayThe13ths(year) {
    const MONTHS = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    let count = 0;
    for (let month in MONTHS) {
        if  (new Date(year, month, 13).getDay() === 5) {
            count++;
        }
    }
    return `${count}\n`
}


console.log(
fridayThe13ths(1986),      // 1
fridayThe13ths(2015),      // 3
fridayThe13ths(2017),      // 2
)

// I had to post Coen's answer below because this is what I was trying to do, but to no avail. So mine was working, but I had compared to the day of the week in word form while this method returns the day of the week in number form.
// function fridayThe13ths(year) {
//     let unluckyDays = 0;

//     for (let month = 0; month < 12; month += 1) {
//       if (new Date(year, month, 13).getDay() === 5) unluckyDays += 1;
//     }

//     return unluckyDays;
//   }