function isBalanced(string) {
    let leftParenthCount = 0;
    let rightParenthCount = 0;
    let balanceTable = {};
    let regexOfSymbolPairs = /[(){}`"'<>]/g;

    for (let i = 0; i < string.length; i++){
        if (string[i].match(regexOfSymbolPairs)) {
            leftParenthCount++;
            if (balanceTable[string[i]]) {
                balanceTable[string[i]] += 1;
            } else {
                balanceTable[string[i]] = 1;
            }
        }
        if (balanceTable[")"] > balanceTable["("] || balanceTable["]"] > balanceTable["["] || balanceTable["}"] > balanceTable["{"]) {
                return false;
            }


        //     if (string[i].match(regexOfSymbolPairs))  {
            //         rightParenthCount++;
            //     }
                // }
                // return leftParenthCount === rightParenthCount;
                // console.log(leftParenthCount , rightParenthCount);
        }
            console.log(
                balanceTable,
                `()`,balanceTable[")"] === balanceTable["("] && "(" in balanceTable && ")" in balanceTable  && "[" in balanceTable && "]" in balanceTable,
                `[]`,balanceTable["]"] === balanceTable["["] && balanceTable["]"] !== null,
                `{}`,balanceTable["}"] === balanceTable["{"] && balanceTable["}"] !== null,
                `<>`,balanceTable["<"] === balanceTable[">"] && balanceTable["<"] !== null,
                `"`,balanceTable['"'] === balanceTable['"'] && balanceTable['"'] !== null,
                `'`,balanceTable["'"] === balanceTable["'"] && balanceTable["'"] !== null
            );
}
// Below is Sam's code which is similar to Medic-Code's code, but less functional since it only looks for parentheses.

// I would say that Medic-Code's code works the best out of the answer so far, but I do think there is a way to do this making each symbol into a hash table and then checking to see if the number is correct. I almost got it but not quite.


// function isBalanced(str) {
//     let parensStr = str.match(/[()]/g).join('');
//     while (parensStr.includes('()')) parensStr = parensStr.replace('()', '');
//     return !parensStr;
//   }


// isBalanced("What (is) this?");
// isBalanced("What is) this?");
// isBalanced("What is()())') this?");
// isBalanced("What is) this?''''''``");
console.log(isBalanced("What is) thi``';'`'s?"));
console.log(isBalanced("What is) thi<><><><>>s?"));
console.log(isBalanced("What is) thi~~~'')()()[][s?"));
// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);
