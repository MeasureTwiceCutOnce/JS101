function isDigit(char) {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false;
  }
}

console.log(isDigit(345));
console.log(isDigit(52));
console.log(isDigit(5));
console.log(isDigit(Number(52)));