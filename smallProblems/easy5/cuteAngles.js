function dms(num) {
    // let numArray = [];
    let tempMins = (num % 1).toFixed(2);
    // let sec = 0;

    // if (tempMins === 0) {
    //     return mins = "00" && sec = "00";
    // }

    // numArray.push(parseInt(num,10));
    // let mins = (tempMins * 60).toString()[0] + (tempMins * 60).toString()[1];
    // let tempSec = (tempMins * 60).toString()[3] + (tempMins * 60).toString()[4]


    console.log( (tempMins * 60) % 1);
    // console.log(mins);
    // console.log(tempSec);
    // console.log( mins);
}

function isNumber(char) {
    return char>= "0" && char <= "9";
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"