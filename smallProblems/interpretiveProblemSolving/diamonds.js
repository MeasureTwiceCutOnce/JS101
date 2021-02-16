function diamond(num) {
    let diamondString = ""
    let center = Math.ceil(num / 2);
    let padding = center;

    // for (let row = 0; row < num; row++) {
    //     console.log(diamondString.padStart(padding,"-"))
    //     diamondString += "**"
    // }

    // for (let row = 0; row < num; row++) {
    //     console.log(diamondString)
    //     diamondString += row < num ? "*" : ""
    //     diamondString = row >=num ? diamondString.slice(3) :diamondString;
    // }
    // return diamondString
    var row, width, shape = '';

    for(row = 0; row < num * 2 - 1; row++) {
      width = row < num ? row : num * 2 - row - 2;
      shape += Array(num - width).join(' ') + Array(width + 1).join('* ') + '*\n';
    }
    console.log(shape)
    // if (row === 1) {
    //     console.log(shape);
    // } else if (row && 1) {
    //     console.log(shape);
    // }

}
// let values = array.values();
// for (let value of values) {
//     console.log(value);
// }
console.log(
diamond(1),// logs *
diamond(9),
diamond(3),
/* logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
)