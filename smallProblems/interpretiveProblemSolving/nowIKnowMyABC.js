// My code below is taking the "marking the letter as used" approach and I know it is working, but I am getting undefined though my dict is being updated properly. HIIIIYA!! I found the issue. I was using forEach and then I tried some and reduce, but all either returned undefined or they were all true or all false regardless of output. By using the every method, I required that the array have every number less than 1 or else it would be false and that is the right answer!!!! The cool aid man says Oh YEAH.

function isBlockWord(string) {
    let letters =
        {B:"O",X:"K",D:"Q",C:"P",N:"A",
        G:"T",R:"E",F:"S",J:"W",H:"U",
        V:"I",L:"Y",Z:"M"}
    let keys = Object.keys(letters)
    let values = Object.values(letters)
    const dict = Array.from(new Array(26))
    .reduce((p, c, i) => (p[String.fromCharCode(i + 65)] = 0, p), {})

    string.split("").forEach(letter => {
        let index = keys.indexOf(letter.toUpperCase()) !== -1 ? keys.indexOf(letter.toUpperCase()) : values.indexOf(letter.toUpperCase());

        dict[keys[index]] += 1;
        dict[values[index]] += 1;
    })

    return Object.values(dict).every(number => {
        if (number > 1) {
            return false;
        } else {
            return true;
        }
    })

    // return Object.values(dict).forEach(number => {
    //     if (number > 1) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // })
    // return dict
                    // string.split("").forEach(letter => {
                    //     if (keys.includes(letter.toUpperCase()) || values.includes(letter.toUpperCase()) ) {
                    //         set.add(letter)
                    //     }
                    // })
                    // let set = new Set();
}


console.log(
isBlockWord('BATCH'),      // true
isBlockWord('BUTCH'),      // false
isBlockWord('jest'),       // true
isBlockWord('floW'),       // true
isBlockWord('APPLE'),      // false
isBlockWord('apple'),      // false
isBlockWord('apPLE'),      // false
isBlockWord('Box'),        // false
)