function reverseNumber(num) {
    let newNum = "";
    let numString = num.toString();
    for (let i = numString.length - 1; i >= 0; i--) {
        newNum += numString[i];
    }
    while (newNum.split("")[0] === "0") {
        return newNum.split("").shift();

    }
    return newNum;
}


reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1