function sequence(num, sequence1 = []) {
    // let arrayRange = [];
    // for (let i = 1; i <= num; i++) {
    //     arrayRange.push(i);
    // }

    while (num > 0) {
        sequence1.unshift(num);
        num--;
        return sequence(num, sequence1)
    }
    return sequence1;
}

console.log(
sequence(5),    // [1, 2, 3, 4, 5]
sequence(3),    // [1, 2, 3]
sequence(1),    // [1]
)