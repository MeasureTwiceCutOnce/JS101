function letterPercentages(string) {
    let stringArray = string.split("");
    let charCount = {"lowercase":0,"uppercase":0,"neither":0};

    // let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let lowercase = "abcdefghijklmnopqrstuvwxyz";
    // let upperCharCount = 0;
    // let lowerCharCount = 0;

    stringArray.map(char => {
        if (uppercase.includes(char)) {
            return charCount.uppercase += 1;
        }
        if (lowercase.includes(char)) {
            return charCount.lowercase += 1;
        }

        if (char) {
            return charCount.neither += 1;
        }
    })
    let values = Object.values(charCount)
    let total = values.reduce((a,b) => a + b)
    let lowercasePercentage = percentageMaker(values[0],total)
    let uppercasePercentage = percentageMaker(values[1],total)
    let neitherPercentage = percentageMaker(values[2],total)
    return `lowercase: ${lowercasePercentage}%, uppercase: ${uppercasePercentage}%, neither: ${neitherPercentage}%\n`
}
function percentageMaker(amount,total) {
    return (amount / total) * 100;
}
console.log(
letterPercentages('abCdef 123'),
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef'),
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123'),
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
)
