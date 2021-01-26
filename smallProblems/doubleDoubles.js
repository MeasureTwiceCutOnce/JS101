function twice(num) {

    if(num.length % 2 === 0 && ifDoubles(num)) {
        return num;
    } else {
        return num * 2;
    }
}

function ifDoubles(num) {
    let i = 0;
    let j = num.length;

    while(i < j) {
        if(num[i] === num[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
}
console.log(
twice(37),          // 74
twice(44),          // 44
twice(334433),      // 668866
twice(444),         // 888
twice(107),         // 214
twice(103103),      // 103103
twice(3333),        // 3333
twice(7676),        // 7676
)
