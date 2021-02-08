function wordCap(string) {
    let splitArray = string.split(" ")

    // slice method
    // console.log(splitArray.map(word => word[0].toUpperCase() + (word.slice(1))).join(" "))

    // FOR LOOP
    // for (let i = 0; i < splitArray.length; i++) {
    //     splitArray[i][0].toUpperCase() + splitArray[i].slice(1);
    // }

    // reduce
    let caps = splitArray.reduce((acc,curr) => {
        acc + curr[0].toUpperCase() + curr.slice(1);
        return acc
    },"")


    console.log(caps)
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

// THis is a nice answer from RedeHevia who used the match function and a callback function in order to do this. This is smooth and I did not know we could pass in a callback function into the replace method. Is this something we can do in most methods? In the replace method one says (replace this thing, with this) and he just added a callback function to the later part.
function wordCap(str) {
    return str.replace(/\b[a-z]/g, (matchingStr) => matchingStr.toUpperCase());
  }