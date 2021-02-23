// Here LS uses the filter method instead so that it can return all the non negative words. This is similar to my answer, except I used a while loop and which just spliced or skipped a word.

function neutralize(sentence) {
    let words = sentence.split(" ");

    return words.filter(word => !isNegative(word)).join(" ");
  };

  function isNegative(word) {
    return  ["dull", "boring", "annoying", "chaotic"].includes(word);
  }

  console.log(
    neutralize("These dull boring cards are part of a chaotic board game.")
  ); // logs These cards are part of a board game.
// The student below did a cool way of fixing the splice technique which makes a copy and iterates over that one to get the indexes, but does the slicing on the original array. This way, the indexes of the original array stay intact the whole time and nothing is missed.
words.slice().forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
});