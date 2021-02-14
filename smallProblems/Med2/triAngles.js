function triangle(num1,num2,num3) {
    let sortedAngles = [...arguments].sort((a,b) => a - b)
    if (isValidTriangle(num1,num2,num3) && sortedAngles[0] !== 0) {
        return getTriangleType(num1,num2,num3);
    }
    return "invalid"
}
function isValidTriangle(num1,num2,num3) {
    return num1 + num2 + num3 === 180;
}
function getTriangleType(num1,num2,num3) {
    if (num1 < 90 && num2 < 90 && num3 < 90) {
        return "acute"
    } else if (num1 === 90 || num2 === 90 || num3 === 90) {
        return "right"
    } else {
        return "obtuse"
    }
}
console.log(
triangle(60, 70, 50),       // "acute"
triangle(30, 90, 60),       // "right"
triangle(120, 50, 10),      // "obtuse"
triangle(0, 90, 90),        // "invalid"
triangle(50, 50, 50),       // "invalid"
)