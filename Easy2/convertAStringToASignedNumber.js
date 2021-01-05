function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}



function stringToInteger(string) {

  let DIGITS = {
    0:0,
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
  }

  if (string.match(/^-\d+$/) == ~)) {
      let newArray = string.split("").map(char => DIGITS[char]);

        let value = 0;

        newArray.forEach(digit => (value = (value * 10) + digit));
            return value = ~value + 1;
  } else {
    let newArray = string.split("").map(char => DIGITS[char]);

        let value = 0;

        newArray.forEach(digit => (value = (value * 10) + digit));
        return value;
  }
}

console.log(stringToInteger("4321"));
console.log(stringToInteger("-4321"));