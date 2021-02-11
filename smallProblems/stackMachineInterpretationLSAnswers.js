// Again, I did get this but I didn't put the switch statement within the callback function. I also used parse Int instead of Math.floor which I don't think makes a difference.

function minilang(program) {
    let stack = [];
    let register = 0;
    program.split(" ").forEach(token => {
      switch (token) {
        case "ADD":
          register += stack.pop();
          break;
        case "DIV":
          register = Math.floor(register / stack.pop());
          break;
        case "MULT":
          register *= stack.pop();
          break;
        case "MOD":
          register = Math.floor(register % stack.pop());
          break;
        case "SUB":
          register -= stack.pop();
          break;
        case "PUSH":
          stack.push(register);
          break;
        case "POP":
          register = stack.pop();
          break;
        case "PRINT":
          console.log(register);
          break;
        default:
          register = Number(token);
      }
    });
    return register;
  }
// I like Joeys answer below because he uses a commands array.
function isValidCommand(command) {
    const acceptableCommands = [
      'PUSH',
      'ADD',
      'SUB',
      'MULT',
      'DIV',
      'MOD',
      'POP',
      'PRINT',
    ];

    if (!acceptableCommands.includes(command) && Number.isNaN(Number(command))) {
      return false;
    } else {
      return true;
    }
  }

  function isStackEmpty(command, stack) {
    const operationalCommands = ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'];
    if (operationalCommands.includes(command) && stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function performOperation(command, stack, register) {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD':
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(command);
    }
    return register;
  }

  function minilang(statement) {
    const stack = [];
    let register = 0;

    const commands = statement.split(' ');
    const registerCommands = ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'];

    commands.forEach(command => {
      if (!isValidCommand(command)) {
        return console.log("You've entered an invalid command");
      }

      if (isStackEmpty(command, stack)) {
        return console.log(`The stack is empty!`);
      }

      if (
        registerCommands.includes(command) ||
        Number.isInteger(Number(command))
      ) {
        register = performOperation(command, stack, register);
      } else {
        performOperation(command, stack, register);
      }
    });
  }
// I like how Wes below compartmentalized the math operations and then used the reduce function to cycle through the commands. I also really like how he and Joey check for numbers by using the isNan method. I simply just converted it to a number because the instructions said it would be, but I like how they are thinking beyond the problem into the future.

/*
for miniLang
1. SET stack to []
2. SET register to 0
3. SET array to split string by whitespace
4. WHILE there are elements in array
  - IF number version of element is not NaN
    - SET register to number version of element
    ELSE IF set of permissible operations does not include element
    - PRINT 'impermissible operation'
    ELSE IF element is 'PUSH'
    - SET stack to include number of register
    ELSE IF element is 'POP'
    - SET register to include last element of stack
    ELSE IF element is 'PRINT'
    - PRINT register to console
    ELSE
    - SET register to RETURN value of performMath function
5. IF register is NaN
  - PRINT 'stack had length of 0'

for performMath
1. IF element is 'ADD'
  - SET register to register plus last element of stack
  ELSE IF element is 'SUB'
  - SET register to register minus last element of stack
  ELSE IF element is 'MULT'
  - SET register to register times last element of stack
  ELSE IF element is 'DIV'
  - SET register to truncated: register divided by last element of stack
  ELSE IF element is 'REM'
  - SET register to truncated: register remainder last element of stack
2. RETURN register
*/

let operations = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'REM', 'POP', 'PRINT'];

function performMath(accParam, eleParam, stackParam) {
  if (eleParam === 'ADD') {
    accParam += stackParam.pop();
  } else if (eleParam === 'SUB') {
    accParam -= stackParam.pop();
  } else if (eleParam === 'MULT') {
    accParam *= stackParam.pop();
  } else if (eleParam === 'DIV') {
    accParam = Math.trunc(accParam / stackParam.pop());
  } else if (eleParam === 'REM') {
    accParam = Math.trunc(accParam % stackParam.pop());
  }
  return accParam;
}

function miniLang(commandLineParam) {
  let stack = [];
  let register = commandLineParam.split(' ').reduce((acc, ele) => {
    if (!Number.isNaN(Number(ele))) {
      acc = Number(ele);
    } else if (!operations.includes(ele)) {
      console.log('impermissible operation');
    } else if (ele === 'PUSH') {
      stack.push(acc);
    } else if (ele === 'POP') {
      acc = stack.pop();
    } else if (ele === 'PRINT') {
      console.log(acc);
    } else {
      acc = performMath(acc, ele, stack);
    }
    return acc;
  }, 0);
  if (Number.isNaN(register)) console.log('stack had length of 0');
}

miniLang('PRINT'); // => 0
miniLang('5 PUSH 3 MULT PRINT'); // => 15
miniLang('5 PRINT PUSH 3 PRINT ADD PRINT'); // => 5, 3, 8
miniLang('5 PUSH POP PRINT'); // => 5
miniLang('5 PUSH PRINT'); // => 5
miniLang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'); // 5, 10, 4, 7
miniLang('3 PUSH PUSH 7 DIV MULT PRINT'); // => 6
miniLang('4 PUSH PUSH 7 REM MULT PRINT'); // => 12
miniLang('-3 PUSH 5 SUB PRINT'); // => 8
miniLang('6 PUSH'); // => n/a
miniLang('WIGGLE PRINT'); // => 'impermissible operation', 0
miniLang('2 ADD PRINT'); // => NaN, 'stack had length of 0'