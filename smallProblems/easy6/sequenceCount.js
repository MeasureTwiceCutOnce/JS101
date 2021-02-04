function sequence(length,multplesOf) {
    let newArray = [];

    while (length > 0) {
        newArray.push(multplesOf);
        length--;
        multplesOf *= length
    }

    // newArray.fill(length).reduce((acc,curr) => {
    //     return newArray.push(curr * length);
    //     length--;
    // },0)

    console.log (newArray);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []