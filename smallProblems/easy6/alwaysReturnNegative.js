function negative(num) {
    console.log(Math.sign(num) === 1 ? num * -1 : num);
    // console.log(-Math.abs(num))

}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0