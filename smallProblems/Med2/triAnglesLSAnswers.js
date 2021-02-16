// Here is the LS answer and I like how they used two methods that I have not used before: "some" and "every". This is perfect for this one and the last one, because all they have to do is put the arguments in an array and then see if every element follows some callback logic. This is great. I also like how they used reduce to get the angles. I could have done that, but I didn't think about it. I think my way was actually less typing, but I can see if you had to do several arguments, then the reduce method would be quicker. I like their logic in their check for isValid. I think it is very smooth. After just reading the MDN on some and every, they will definitely be helpful in the future because they iterate over every element in an array and with some returns if at least one element follows the logic and with every if all the elements follow the logic. Very useful.

function triangle(angle1, angle2, angle3) {
    const angles = [angle1, angle2, angle3];
    if (isValid(angles)) {
      return getTriangleType(angles);
    } else {
      return "invalid";
    }
  }

  function isValid(angles) {
    const totalAngle = angles.reduce((total, angle) => total + angle);

    const allNonZero = angles.every(angle => angle > 0);

    return totalAngle === 180 && allNonZero;
  }

  function getTriangleType(angles) {
    if (angles.some(testRightTriangle)) {
      return "right";
    } else if (angles.every(testAcuteTriangle)) {
      return "acute";
    } else {
      return "obtuse";
    }
  }

  function testRightTriangle(angle) {
    return angle === 90;
  }

  function testAcuteTriangle(angle) {
    return angle < 90;
  }


//   Dominic below used the includes method to get the one 90 angle which is smooth.
function triangle(num1, num2, num3) {
    let arr = [num1, num2, num3];
    if ((arr.reduce((acc, curr) => acc + curr) !== 180) ||
    (arr.some(element => element < 1))) {
      return "invalid"
    } else if (arr.includes(90)) return "right";
    else if (arr.some(element => element > 90)) return "obtuse";
    else return "acute";
  }

//   Thank you Wes again. He did what I originally wanted to do which is take the array of arguments from the beginning using the spread operator. I made the mistake of using the spread operator in the function. It did work when I called on it with console log, but it didn't when I tried to use it to pass as arguments to an interior function. Now that I am looking at it maybe my mistake was that I surrounded my spread operator with brackets and maybe that is what the function didn't like. Wes gets extra cool points for keeping it so short.
function triangle(...angParam) {
    if ((angParam.some(ele => ele === 0)) || (sum(angParam) !== 180)) return 'not a tri';

    if (angParam.some(ele => ele === 90)) return 'right';
    if (angParam.every(ele => ele < 90)) return 'acute';
    return 'obtuse';
  }

  function sum(arrONumsParam) {
    return arrONumsParam.reduce((acc, ele) => acc + ele);
  }