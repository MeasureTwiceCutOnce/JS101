// I can see I do have a problem in my toggle swithc logic. I am turning all those lights on regardless if they were off or not before which is like disregarding the purpose of a toggle switch. toggle means to turn to the opposite status and I was sometimes just "toggle" ing it to the same status which is the opposite of what a toggle does.

function lightsOn(switches) {
    let count = 1;
    let toggleStatus = [];
    let start = 0;

    for (let i = 1; i <= switches; i++) {
        toggleStatus.push(0);
        // toggleStatus[i] = false;
    }

    while (count <= switches) {
        if (count % 2 === 1) {
            // Turn on
            for (let i = start; i < switches - 1; i++) {
                if (i % count === 0) {
                    if (toggleStatus[i] === 0) {
                        toggleStatus[i] = 1;
                    }
                    toggleStatus[i] = 0;
                }
            }
        } else {
            for (let i = start; i < switches - 1; i++) {
                if (i % count === 1) {
                    if (toggleStatus[i] === 1) {
                        toggleStatus[i] = 0;
                    }
                    toggleStatus[i] = 1
                }
            }
        }
        count++;
        start++;
    }
    let finalArray = [];

    toggleStatus.map((item,idx) => {
        if (item === 0) {
            finalArray.push(idx)
        }
    })

    return toggleStatus;
    // return toggleStatus;
    // let count = 1;
    // let toggleStatus = {};

    // for (let i = 1; i <= switches; i++) {
    //     // toggleStatus.push(false);
    //     toggleStatus[i] = false;
    // }

    // while (count <= switches) {
    //     for (let i = 1; i <= switches; i++) {
    //         if (count % 2 === 1) {
    //             if (i % count === 0) {
    //                 toggleStatus[i] = true;
    //             }
    //             toggleStatus[i] = false;
    //         }
    //     }
    //     count++;
    // }

    // return toggleStatus;
  }
//   function toggle(switch) {

//     return
//   }
  console.log(
  lightsOn(5),        // [1, 4]
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on
  // Round 2: lights 2 and 4 are now off,     1, 3, and 5 are on
  // Round 3: lights 2, 3, and 4 are now off, 1 and 5 are on
  // Round 4: lights 2 and 3 are now off,     1, 4, and 5 are on
  // Round 5: lights 2, 3, and 5 are now off, 1 and 4 are on

  lightsOn(100),      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
  )