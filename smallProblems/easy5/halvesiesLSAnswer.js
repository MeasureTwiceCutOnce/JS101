function halvsies(array) {
    let half = Math.ceil(array.length / 2);
    let firstHalf = array.slice(0, half);
    let secondHalf = array.slice(half);
    return [firstHalf, secondHalf];
  }

//   I like how this is very similar to my code. I only did not use the slice method but the Array() method to create the new arrays in the array. Admittedly, the LS answer is way more smooth and DRY than mine.
// The below code is what I was originally thinking about doing which is to take use the index numbers to tell if the function should put the value here or there. I love the one below.


function halvsies(arr) {
    let splitArr = [[], []];
    arr.forEach((val, idx) => {
      let splitArrIndex = (idx < (arr.length / 2)) ? 0 : 1;
      splitArr[splitArrIndex].push(val);
    });
    return splitArr;
  }

//   The below was pretty smooth as well.
const halvsies = (arr) => {
    let halfway;
    arr.length % 2 === 0
      ? (halfway = arr.length / 2)
      : (halfway = arr.length / 2 + 0.5);

    return [arr.slice(0, halfway), arr.slice(halfway)];
  };
