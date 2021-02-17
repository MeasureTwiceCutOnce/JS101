function diamond(num) {
    let diamondString = ""
    let center = Math.ceil(num / 2);
    let padding = center;

    // let row = num;
    // let height = num;
    let stars = "*";
    let up = 1;
    while (num > 0) {

        for (let height = 0; height < num * 2; height++) {
            console.log((stars.repeat(up)).padStart(num ," "))
            up++;
            num--;
        }
        for (let height = 0; height < num * 2; height++) {
            console.log((stars.repeat(num)).padStart(num + 2," "))
            num--;
        }
    }
    // return stars;

    // return stars;
    // The below code worked but I got it from a source on line and, I forgot about the repeat method. so I am going to try and do this without looking at the rest of the answer.
    // var row, width, shape = '';

    // for(row = 0; row < num * 2 - 1; row++) {
    //   width = row < num ? row : num * 2 - row - 2;
    //   shape += Array(num - width).join(' ') + Array(width + 1).join('* ') + '*\n';
    // }
    // console.log(shape)
///////////////////////////////////////////***************************** */




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
// diamond(1),// logs *
// diamond(9),
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