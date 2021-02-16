// Here the LS answer is very similar to mine. I did not finish the problem by creating a final array that gets pushed all the on values, however, I did have the initialize and toggle functions but I did not get mine to work correctly. I had something wrong maybe in the index part of the function. I am happy with my progress though because I was very close to the right answer and had the right logic for the most part. I was going to use false and true values, but since zero is false, I left it as zero and ones.

function lightsOn(count) {
    let lights = initializeLights(count);

    for (let switchNum = 1; switchNum <= count; switchNum += 1) {
      // rounds: 1..count
      lights = toggleLights(lights, switchNum);
    }

    let result = [];
    for (let idx = 0; idx < count; idx += 1) {
      // indices: 0..count-1
      if (lights[idx]) {
        result.push(idx + 1);
      }
    }

    return result;
  }

  function initializeLights(count) {
    let lights = [];

    for (let switchNum = 0; switchNum < count; switchNum += 1) {
      lights.push(false);
    }

    return lights;
  }

  function toggleLights(lights, round) {
    return lights.map((light, index) => {
     return (index + 1) % round === 0 ? !light : light;
   });
  }

//   Below is Coen's answer and I like how he used Array.from and a map to make the initial array of switches and turn them off. Also his answer and the LS answer used good variable names like "round" which I think makes a difference when you are trying to read the code later and maybe forgot which for loop is doing what.

function lightsOn(switches) {
    let switchBank = Array.from(Array(switches)).map(val => val = 'off');
    let startLight = 0;
    let increment = 1;

    for (let round = 0; round < switches; round += 1) {
      for (let idx = startLight; idx < switchBank.length; idx += increment) {
        switchBank[idx] = flipSwitch(switchBank[idx]);
      }

      startLight += 1;
      increment += 1;
    }

    return lightsOnArray(switchBank);
  }

  function flipSwitch(onOrOff) {
    if (onOrOff === 'off') {
      return 'on';
    } else {
      return 'off';
    }
  }

  function lightsOnArray(array) {
    return array.map((val, idx) => {
      if (val === 'on') {
        return idx + 1;
      }
    }).filter(val => val);
  }

//   Seo below is similar to what I was trying to do which was use a while loop and then toggle the switches for the number of the count. Her's is much better (because it works) and because I like how she labeled her variables.

function lightsOn(switches) {
    // define an array with the length of switches with 0
    let arr = Array.from(Array(switches), () => 0);
    const finalCount = switches;
    let count = 1;
    while (count <= finalCount) {
        for (let i = 0; i < arr.length; i++) {
            if ((i+1) % count === 0) {
                if (arr[i] === 1) {
                    arr[i] = 0;
                } else {
                    arr[i] = 1;
                }
            }
        }
        count++;
    }
    const result = [];
    arr.forEach((el, index) => {
        if (el === 1) {
            result.push(index + 1);
        }
    });
    return result;
}
// Medic-Code is also similar to me because I orignially wanted to create an object for this problem and then toggle it as he did. I like how his toggle funciton is so simple and works. What ever it is, return the opposite. It seems to be the most simple way of handling the toggle thus far. I also like how he got the final array by turning the object into an arrray using Object.entries, and then filtering for the elements that are true, and finally creating an array by calling the map method on the Number version of those elements . Very smooth.
function initialBoard(switches) {
    let switchObj = {}

    for (let i = 1; i <= switches; i++) {
      switchObj[i] = false;
    }
    return switchObj
  }

  function lightsOn(switches) {
    let switchObj = initialBoard(switches);

    for (let i = 1; i <= switches; i++) {
      for (let j in switchObj) {
        if(Number(j) % i === 0) {
          switchObj[j] = !switchObj[j]
        }
      }
    }

    return Object.entries(switchObj)
                          .filter(elem => {
                              if (elem[1]) {
                             return elem[0]
                            }})
                          .map(elem => Number(elem[0]));
  }
//   Sam did a great job as well below. His is a hybrid of the LS answer and using the object way, but he did a great job labeling his variables which makes a huge difference in understanding the code. I also thought it was really smooth how he used the reduce method and destructuring in order to return the final array. Very smooth
function lightsOn(count) {
    let lightsStatus = createLights(count);

    for (let pass = 1; pass <= count; pass += 1) {
      flipSwitches(lightsStatus, pass);
    }

    return Object.entries(lightsStatus).reduce((acc, keyVal) => {
      let [lightNo, status] = keyVal;
      if (status === 'ON') acc.push(Number(lightNo));
      return acc;
    }, []);
  }

  function createLights(count) {
    let lightsObj = {};
    for (let lightNo = 1; lightNo <= count; lightNo += 1) {
      lightsObj[lightNo] = 'OFF';
    }
    return lightsObj;
  }

  function flipSwitches(obj, pass) {
    for (let lightNo in obj) {
      if (!(Number(lightNo) % pass)) {
        if (obj[lightNo] === 'ON') obj[lightNo] = 'OFF';
        else obj[lightNo] = 'ON';
      }
    }
  }