function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length < 4 || dotSeparatedWords.length > 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

    return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}


console.log(isDotSeparatedIpAddress("1.2.3.4.5"));
console.log(isDotSeparatedIpAddress("4.5.5"));
console.log(isDotSeparatedIpAddress("4.5.5.4"));
console.log(isDotSeparatedIpAddress("4.5.5"));


// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);


// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object);

// This was a good lesson on when and how JS inputs semi colons and why it is important to be cognicent of them.
// This could be a possible source of some of my past bugs for the fact that I was not cognizant of it before, and I am not sure if I had been very careful in writting my code without semi colons. Though I can attest that most of my previous code should follow JS conventions when it comes to semi colons. However, now I will keep my eyes a little more open.
// function first() {
//   return {
//     prop1: "hi there"
//   };
// }

// function second() {
//   return
//   {
//     prop1: "hi there"
//   };
// }

// console.log(first());
// console.log(second());