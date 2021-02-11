// My answer has worked for the most part and I was even correct in my initial answering of this problem using swithc statements and a forEach method. However, I didn't put the switch statement within the callback of the switch statement which is why it didn't work.

function minilang(string) {
    let stack = [];
    let register = 0;
    let commandArray = string.split(" ");
    let numbers = "1234567890"
    for (let i = 0; i < commandArray.length; i++) {
        let command = commandArray[i]
        if (numbers.includes(commandArray[i])) {
            register = Number(command);
        }
        if (command === "PUSH") {
            stack.push(Number(register));
        }
        if (command === "ADD") {
            register += stack.pop();
        }
        if (command === "SUB") {
            register -= stack.pop();
        }
        if (command === "MULT") {
            register *= stack.pop();
        }
        if (command === "DIV") {
            register /= parseInt(stack.pop(),10);
        }
        if (command === "MOD") {
            register %= parseInt(stack.pop(),10);
        }
        if (command === "POP") {
            register = stack.pop()
        }
        if (command === "PRINT") {
            console.log(register)
        }
    }

    // return numbers.includes(commandArray[0])
    // let command = string.split(" ").forEach(word => word)
    // switch (command) {
    //     case "PRINT":console.log(register)
    //         break;
    //     case "POP":register = (stack.pop())
    //         break;
    //     case "n":register = Number(n);
    //         break;
    //     case "PUSH": stack.push(register);
    //         break;

    //     default:
    //         break;
    // }
    // return register;
}
console.log(
// minilang('POP'),
minilang('PRINT'),
// 0

minilang('5 PUSH 3 MULT PRINT'),
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT'),
// // 5
// // 3
// // 8

minilang('5 PUSH POP PRINT'),
// // 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'),
// // 5
// // 10
// // 4
// // 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT'),
// // 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT'),
// // 12

minilang('-3 PUSH 5 SUB PRINT'),
// // 8

minilang('6 PUSH'),
// // (nothing is printed because the `program` argument has no `PRINT` commands)
)