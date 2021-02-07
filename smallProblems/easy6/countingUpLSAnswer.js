// Sam answer
function sequence(num) {
    return [...Array(num)].map((_, idx) => idx + 1);
  }

// Wes does it again. I love the recursion. So genius.
// initial recursion solution
function getSequence(numP, sequenceP = []) {
    if (numP > 0) {
      sequenceP.unshift(numP);
      numP -= 1;
      return getSequence(numP, sequenceP);
    } else {
      return sequenceP;
    }
  }

// This one I am not getting entirely. The fill method is doing what here. I thought that to fill you had to put a number in the parenthasis.
// additional reduce solution
function getSequence1(numP, sequenceP = []) {
    sequenceP['length'] = numP;
    return sequenceP.fill().reduce((acc, _, idx) => {
      acc.unshift(numP - idx);
      return acc;
    }, []);
  }


//   From Yu Xia
function sequence(num) {
    return [...Array(num).keys()].map(i => ++i);
  }
//   Spencer Brainard also did a nice solution here
function sequence(num) {
    return [...Array(num + 1).keys()].slice(1);
  }

  // forEach
  function sequence(num) {
    let result = [];
    [...Array(num).keys()].forEach(num => result.push(num + 1));
    return result;
  }