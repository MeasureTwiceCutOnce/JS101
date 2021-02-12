// I like the LS answers because they actually did the same as me and got the short medium and long sides, but I did mine by sorting. I like how they did a isValid auxilary function which checks to see if it is a triangle. After that they made another auxiliary function that gets the type of triangle. I like in the getTriangle function they put the order so that they don't have to put in all the logic for the most complicated one which is the isosoles triangle. Very smart.

function triangle(side1, side2, side3) {
    let perimeter = side1 + side2 + side3;
    let longest = Math.max(side1, side2, side3);
    let shortest = Math.min(side1, side2, side3);
    let middle = perimeter - longest - shortest;

    if (isValid(shortest, middle, longest)) {
      return getTriangleType(side1, side2, side3);
    } else {
      return "invalid";
    }
  }

  function isValid(shortest, middle, longest) {
    return shortest > 0 && shortest + middle > longest;
  }

  function getTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      return "equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
