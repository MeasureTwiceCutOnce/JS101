// function logInBox(string) {
//     let horizontalLength = string.length + 2;

//     if(string.length > 35) {
//         let index = 0;
//         horizontalLength = 40;
//         let lineEnd = (index + 1) * 40;
//         let stringArray = [];
//         stringArray.push(string);
//         let shortString = "";

//         while(index < lineEnd) {
//             // let lineStart = 0;
//             shortString = stringArray.splice(lineEnd,0,"\n");
//             index++;
//         }
//         return `${'*+'}${'-'.repeat(horizontalLength)}${'+*'} \n ${'|'} ${'|'.padStart(horizontalLength)}  \n ${'|'} ${'|'.padStart(horizontalLength)}  \n ${'|'} ${'|'.padStart(horizontalLength)} \n ${'|'} ${shortString.join("")} ${'|'} \n ${'|'} ${'|'.padStart(horizontalLength)}  \n ${'|'} ${'|'.padStart(horizontalLength)} \n ${'*+'}${Array(horizontalLength).fill("-").join("")}${'+*'}`;
//     }
//     return `${'*+'}${'-'.repeat(horizontalLength)}${'+*'} \n ${'|'} ${'|'.padStart(horizontalLength)}  \n ${'|'} ${'|'.padStart(horizontalLength)}  \n ${'|'} ${'|'.padStart(horizontalLength)} \n ${'|'} ${string} ${'|'} \n ${'|'} ${'|'.padStart(horizontalLength)}  \n ${'|'} ${'|'.padStart(horizontalLength)} \n ${'*+'}${Array(horizontalLength).fill("-").join("")}${'+*'}`;
// }

// function getArrayOfLines(maxP, stringP) {
//     let numOfFullLines = stringP.length  / maxP;
//     let index = 0;
//     let arrayOfLines = [];

//     while (index < numOfFullLines) {
//       let indexStart = index * maxP;
//       let indexEnd = (index + 1) * maxP;
//       let line = stringP.substring(indexStart, indexEnd);
//       arrayOfLines.push(line);
//       index += 1;
//     }

//     return logInBox(arrayOfLines);
//   }

let string = 'To boldly go where no one has gone before.To boldly go where no one has gone before.To boldly go where no one has gone before.To boldly go where no one has gone before.To boldly go where no one has gone before.To boldly go where no one has gone before.';
let maxLineLength = 20;
let numOfFullLines = string.length / maxLineLength;
let index = 0;

// for(let index = 0; index < numOfFullLines; )

while (index < numOfFullLines) {
    let endOfLine = (index + 1) * maxLineLength;
    let newLine = "\n";

    let result = string.split(" ").splice(endOfLine, 0, "\n").join(" ");
    index++;
    console.log(result);
}

// console.log(logInBox('To be, or not to be.'));
// console.log(logInBox('I came. I saw. I conquered.'));
// console.log(logInBox('I think I did it! HIYA!!!'));
// console.log(logInBox(""));
// console.log('To boldly go \n where no one \n has gone before.'.length);
// console.log('|'.repeat(process.stdout.columns))
// console.log();

/*+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/
// THe code below is what I found online and I really like how they did this. It is very smooth with the variables very clear and the way that it is so short.

// Write a method that will take a short line of text, and print it within a box.
// const printInBox = str => {
//     const length = str.length + 4;
//     console.log(buildLine('+', '-', length));
//     console.log(buildLine('|', ' ', length));
//     console.log(formMessageLine(str, length));
//     console.log(buildLine('|', ' ', length));
//     console.log(buildLine('+', '-', length));
// };

// const buildLine = (border, fill, length) => {
// let line = Array(length);
// line.fill(fill);
// return line.map((el, index) => (index === 0 || index === length - 1) ? border : el).join('');
// }

// const formMessageLine = (str, length) => {
// let line = str.split('');
// line.unshift('|', ' ');
// line.push(' ', '|');
// return line.join('');
// };
// //printInBox('To boldly go where no one has gone before.');
// printInBox('Hello World!');
