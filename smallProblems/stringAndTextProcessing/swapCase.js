// My answer below was correct because of systematic repitition. I have done this problem or something similar to it many times and this time I was able to experiement with other methods which I was successful with. They didn't work originally because I was trying to use tertiary syntax and I guess that doesn't work within a reduce or map method. So when I put those functions in a regular if then statement they worked well.
function swapCase(string) {
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // reduce method
    let swappedWord = string.split("").reduce((acc,curr) => {
        if (lowercase.includes(curr)) {
            acc += curr.toUpperCase()
        } else if (uppercase.includes(curr)) {
            acc += curr.toLowerCase()
        } else {
            acc += curr
        }
        return acc
    }, "");
    console.log(swappedWord)

    // let swappedWord = string.split("").map(letter => {
    //     if (lowercase.includes(letter)) {
    //         return letter.toUpperCase()
    //     }  else if (uppercase.includes(letter)) {
    //         return letter.toLowerCase()
    //     } else {
    //         return letter;
    //     }
    // })
    // console.log(swappedWord.join(""))
}
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// Below is Bilal's answer which I like because it looks like it is one of shortest most concise answers I have seen for this question
function swapCase(string) {
    return string.split('')
      .map(e => e.toUpperCase() === e ? e.toLowerCase() : e.toUpperCase())
      .join('');
  }