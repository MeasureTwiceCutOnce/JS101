function triangle(num1,num2,num3) {
    let NAMES_OF_TRI = ['equilateral', 'isosceles', 'scalene', 'invalid'];

    let sortedArray = [...arguments].sort((a,b) => a - b);
    if (sortedArray[0] + sortedArray[1] < sortedArray[2] || num1 === 0 || num2 === 0 || num3 === 0) {
        return NAMES_OF_TRI[3];
    }
    if (num1 === num2 && num2 === num3) {
        return NAMES_OF_TRI[0];
    }
    if (num1 === num2 || num2 === num3 || num3 === num1) {
        return NAMES_OF_TRI[1];
    } else {
        return NAMES_OF_TRI[2];
    }

    // sum of two shortests >= longest side && !(side === 0)
    // return `${sortedArray}\n`;
}

console.log(
triangle(3, 3, 3),        // "equilateral"
triangle(3, 3, 1.5),      // "isosceles"
triangle(3, 4, 5),        // "scalene"
triangle(0, 3, 3),        // "invalid"
triangle(3, 1, 1),        // "invalid"
)