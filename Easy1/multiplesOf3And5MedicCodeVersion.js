function multisum(num) {

  if (typeof num === 'number' && Number.isInteger(num)) {
    console.log('number')
  } else {
    return console.log('Sorry not a number')
  }

  let arr = [...Array(num).keys()].map(i=> i+1)
  divisible = arr.filter(item => item % 3 === 0 || item % 5 === 0)
  sumDivisible = divisible.reduce((a,e)=> a+e,0)
  console.log(sumDivisible)
  return sumDivisible
}

multisum(null) // Sorry not a number
multisum(undefined) // Sorry not a number
multisum(NaN) // Sorry not a number
multisum({}) // Sorry not a number
multisum(3.2) // Sorry not a number
multisum(3);       // Number 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000)     // 234168
