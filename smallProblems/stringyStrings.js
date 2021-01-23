
function stringy(num) {
    return  Array(num).fill("10").join("").slice(0, num);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
stringy(11);
stringy(13);
stringy(17);
stringy(117);
stringy(127);
stringy(43);
stringy(1);
stringy(80948);

// While the below code did work, it is buggy because I am not able to give the exact number of characters back everytime due to the math being off. So I will try something else.


// let count = num;
// let tempArray = [];

// while(count > 0) {
//     for(let i = 0; i < num; i++)
//     if(tempArray[i] !== 1) {
//         tempArray.push(1);

//     } else {
//         tempArray.push(0)
//     }

//     count--;
// }
// console.log( tempArray.join(""))
