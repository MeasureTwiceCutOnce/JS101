function isLeapYear(year) {
  if (year < 1752) {
    return (year % 4 === 0) ? true : false;
  } else {
    if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
  }
}
  
console.log(isLeapYear(1016))
console.log(isLeapYear(2016))
console.log(isLeapYear(16))
console.log(isLeapYear(516))
console.log(isLeapYear(2000))
console.log(isLeapYear(2100))
console.log(isLeapYear(1107))
console.log(isLeapYear(2100) )     // false
console.log(isLeapYear(2400))      // true
console.log(isLeapYear(240000))    // true
console.log(isLeapYear(240001))    // false
console.log(isLeapYear(2000))      // true
console.log(isLeapYear(1900))      // false
console.log(isLeapYear(1752))      // true
console.log(isLeapYear(1700))      // false
console.log(isLeapYear(1))         // false
console.log(isLeapYear(100))       // false
console.log(isLeapYear(400))