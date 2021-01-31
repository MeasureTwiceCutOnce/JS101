// const DEGREE = '\xB0';
// const MINUTES_PER_DEGREE = 60;
// const SECONDS_PER_MINUTE = 60;
// const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

// function dms(degreesFloat) {
//   let degreesInt = Math.floor(degreesFloat);
//   let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
//   let seconds = Math.floor(
//     (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
//     SECONDS_PER_DEGREE
//   );

//   return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
//                                        padZeroes(seconds) + '"';
// }

// function padZeroes(number) {
//   let numString = String(number);
//   return numString.length < 2 ? ('0' + numString) : numString;
// }

// While the above code seems a little difficult for me to understand at the moment mostly due to the mathematical calucuation part in lines 7-11, I did find another student's answer (below) that very similar to what I was doing and matches my math almost exact. The only thing I was missing from my answer was the Math.floor.

onst MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(floatingPointDegrees) {
  while (floatingPointDegrees < 0 || floatingPointDegrees > 360) {
    if (floatingPointDegrees < 0) {
      floatingPointDegrees += 360;
    } else {
      floatingPointDegrees -= 360;
    }
  }

  const degrees = Math.floor(floatingPointDegrees);
  const floatingPointMinutes = (floatingPointDegrees % 1) * MINUTES_PER_DEGREE;
  const minutes = Math.floor(floatingPointMinutes);
  const seconds = Math.floor((floatingPointMinutes % 1) * SECONDS_PER_MINUTE);

  const minutesPadded = String(minutes).padStart(2, '0');
  const secondsPadded = String(seconds).padStart(2, '0');

  return `${degrees}˚${minutesPadded}'${secondsPadded}"`;
}