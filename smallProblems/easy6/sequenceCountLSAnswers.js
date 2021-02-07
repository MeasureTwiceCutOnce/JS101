// This, from Seohyun, is what I wanted to do when I was attempting my reduce method

function sequence(count, num) {
    if (count === 0) return [];
    return [...Array(count)].map((_, index) => num * (index + 1));
}

// Of course Wes did the reduce which I am trying to wrap my head around
function sequence(countP, numP) {
    let array = [];
    array['length'] = countP;
    return array.fill().reduce((acc, _, idx) => {
      acc.push(numP * (idx + 1));
      return acc;
    }, []);
  }

