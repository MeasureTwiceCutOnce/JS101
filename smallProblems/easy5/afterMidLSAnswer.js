const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}

// This is an interesting answer but I don't completely understand why they are doing modula MINT+PER_DAY in the first answer because that is not returning 1440 on the last question. Also I don't know why it subtracts the time from the first one from the MIN_PER_DAY in the before mid function. Never mind, I just read the explanation and it tells that 0 and 1440 should return zero which is what I originally thought but in the test cases they gave us they didn't have that written.