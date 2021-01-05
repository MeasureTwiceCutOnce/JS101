// Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

function stringToInteger(string) {

  let DIGITS = {
    0:0,
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
    a:10,
    b:11,
    c:12,
    d:13,
    e:14,
    f:15
  }

  let newArray = string.split("").map(char => DIGITS[char]);

  let value = 0;

newArray.forEach(digit => (value = (value * 16) + digit));
return value;
}

console.log(stringToInteger("4321"));


//   let newString = string.split("");
//   for (i = 0; i < newString.length; i++) {
//   let convertedString = [];
//     // if (newString[i] === "0") {
//     //   convertedString.push([i]);
//     // } else if {

//     // }

//   switch (newString[i]) {
//     case "0":
//       convertedString.push(0);
//       break;
//       case "1":
//         convertedString.push(1);
//         break;
//       case "2":
//         convertedString.push(2);
//         break;
//       case "3":
//         convertedString.push(3);
//         break;
//       case "4":
//         convertedString.push(4);
//         break;
//       case "5":
//         convertedString.push(5);
//         break;
//       case "6":
//         convertedString.push(6);
//         break;
//       case "7":
//         convertedString.push(7);
//         break;
//       case "8":
//         convertedString.push(8);
//         break;
//       case "9":
//         convertedString.push(9);
//         break;
//     default:
//       break;
//   }
//   return convertedString.join("");
// }
// }

