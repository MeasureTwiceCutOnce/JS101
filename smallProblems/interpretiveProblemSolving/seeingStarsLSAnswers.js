// I am really upset because I thought I had this one, and I spent so much time trying to figure this out.
function buildStarRow(spacesBetween, spacesPadding) {
    let asterisks = ["*", "*", "*"];
    let starRow = asterisks.join(" ".repeat(spacesBetween));
    let paddedStarRow = " ".repeat(spacesPadding) + starRow;

    return paddedStarRow;
  }

  function star(size) {
    let middleIdx = Math.floor(size / 2);

    for (let idx = 0; idx < middleIdx; idx += 1) {
      let spacesBetween = (size - 3) / 2 - idx;
      let spacesPadding = idx;
      console.log(buildStarRow(spacesBetween, spacesPadding));
    }

    console.log("*".repeat(size));

    for (let idx = 0; idx < middleIdx; idx += 1) {
      let spacesBetween = idx;
      let spacesPadding = (size - 3) / 2 - idx;
      console.log(buildStarRow(spacesBetween, spacesPadding));
    }
  }

  // Here is Coen's answer and it looks like what I was trying to do!!!! It looks like I was missing the part on the math in line 37 where the I was supposed to put the number minus three minus the index and that times 2. I do not know where he could have gotten that from. HOW?!
  function star(n) {
    let increment = 1;

    for (let idx = 0; idx >= 0; idx += increment) {
      if (idx === (n - 1) / 2) {
        console.log('*'.repeat(n));
        increment = -1;
      } else {
        let spaceGap = ' '.repeat((n - 3 - idx * 2) / 2);
        console.log(' '.repeat(idx) + '*' + spaceGap + '*' + spaceGap + '*');
      }
    }
  }