function logInBox(string) {
    let horizontalLength = string.length + 1;

    return `${'*+'}${'-'.repeat(horizontalLength)}${'+*'} \n ${'|'} ${'|'.padStart(horizontalLength)}  \n ${'|'} ${'|'.padStart(horizontalLength)}  \n ${'|'} ${'|'.padStart(horizontalLength)} \n ${'|'} ${string}${'|'} \n ${'|'} ${'|'.padStart(horizontalLength)}  \n ${'|'} ${'|'.padStart(horizontalLength)} \n ${'*+'}${Array(horizontalLength).fill("-").join("")}${'+*'}`;
}


console.log(logInBox('To boldly go where no one has gone before.'));
console.log(logInBox('To be, or not to be.'));
console.log(logInBox('I came. I saw. I conquered.'));
console.log(logInBox('I think I did it! HIYA!!!'));
console.log(logInBox(""));
// console.log('To boldly go \n where no one \n has gone before.'.length);
// console.log('|'.repeat(process.stdout.columns))
// console.log();

/*+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

