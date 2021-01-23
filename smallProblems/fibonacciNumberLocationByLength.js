function findFibonacciIndexByLength(num) {
    let fibArray = getFibArray();
    let targetDigCount = num;
    let digitIndex = {
        1:1,2:7,3:100,4:1000,5:10000,6:100000
    }

    return fibArray.findIndex(num => num >= digitIndex[targetDigCount])

}

function getFibArray() {
    let fibNumsArray = [1,1];
    for(let i = 0; i < 70; i++) {
        fibNumsArray.push((fibNumsArray[fibNumsArray.length - 1]) + (fibNumsArray[fibNumsArray.length - 2]))
    }
    return fibNumsArray;
}

console.log(findFibonacciIndexByLength(2));

// let fibNumsObj = {};

// for(let i = 0; i < 50; i++) {
//     fibNumsObj[i] = fib(i);
// }
// return fibNumsObj;

// // }

// let digitIndex = {
//     1:1,2:7,3:100
// }

// console.log(digitIndex[2])


// findFibonacciIndexByLength(2);       // 7
// findFibonacciIndexByLength(10);      // 45
// findFibonacciIndexByLength(16);      // 74

// Don't try any higher values until you read the solution Discussion

function fib(n) {
	var a=0, b=1, f=1;
    for(let i=0; i<n; i++) {
    	f = a+b;
        a = b;
        b = f;
    }
    return f;
}
// console.log(fib(1200))
