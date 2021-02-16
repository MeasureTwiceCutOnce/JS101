// Below is the LS answer and it is really good. I was on the same track almost, but I could not iterate over the getDay method and I should have created an array with the individual dates in it like LS did and then scroll those through the getDay function. I had the same logic as their reduce method which is awesome. I think it is smoooth how they set up their reduce function to do the counting for them. I have to remember that the first variable(the accumulator) can just be a variable that will be incremented as seen below. Very genious.
function fridayThe13ths(year) {
    let thirteenths = [];

    for (let month = 0; month < 12; month += 1) {
      thirteenths.push(new Date(year, month, 13));
    }

    return thirteenths.reduce((count, day) => {
      return day.getDay() === 5 ? (count + 1) : count;
    }, 0);
  }

//   I like Wes' formatting in his.
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function fridayThe13ths(yearParam) {
  return months.reduce((acc, _, idx) => {
    let newDate = new Date(`${months[idx]} 13, ${yearParam}`);
    if (newDate.getDay() === 5) acc += 1;
    return acc;
  }, 0);
}