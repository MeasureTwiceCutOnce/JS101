function star(num) {
    // let top = ((num - 1) /2) - 1;
    let middleRow = (num / 2)
    // let bottom = ((num -1) / 2) + 1;
    // let emptySpacesBottom = " ".repeat()
    // let sideSpace = " ".repeat();
    // let row = 0;

    for (let i = 0; i < middleRow; i++) {
        if (i === middleRow) {
            console.log("*".repeat(num))
        }
        console.log (" ".repeat(i) + "*" + " ".repeat(((num - 3) / 2) - i) + "*" + " ".repeat(((num - 3) / 2) - i)  + "*")
    }
    for (let i = 0; i < num / 2; i++) {
        console.log(" ".repeat(((num - 3) / 2) - i) + "*" + " ".repeat(i) + "*" + " ".repeat(i)  + "*")
    }



    //     let increment = 2;

    //     for (let idx = 1; idx > 0; idx += increment) {
    //         console.log('_'.repeat((idx - 1) / 2) +'*' + '_'.repeat(((num - 1) - idx) / 2) + '*' + '_'.repeat(((num - 1) - idx) / 2) + '*');
    //         if (idx === num) {
    //             console.log('*'.repeat((num)));
    //         }
    //       if (idx === num) increment = -2;
    //     }
    //   }
}
// console.log(
star(7);
// star(9);
/* logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/
// star(9);
// logs
/*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *
*/
// )

// function hollowDiamond(n) {
    //     let increment = 2;

    //     for (let idx = 1; idx > 0; idx += increment) {
    //       if (idx === 1) {
    //         console.log(' '.repeat((n - idx) / 2) + '*');
    //       } else {
    //         console.log(' '.repeat((n - idx) / 2) + '*' + ' '.repeat(idx - 2) + '*');
    //       }

    //       if (idx === n) increment = -2;
    //     }
    //   }