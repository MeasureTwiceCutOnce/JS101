function neutralize(sentence) {
    let words = sentence.split(" ");
    let i = 0;
    while (i < words.length) {
        if (isNegative(words[i])) {
            words.splice(i,1)
        } else {
            i++;
        }
    }
return words.join(" ");

    // words.forEach(word => {
    //     if (isNegative(word)) {
    //     const index = words.indexOf(word);
    //     words.splice(index, 1);
    //   }
    // });
    // return words.join(" ");
  }

  function isNegative(word) {
    return ["dull", "boring", "annoying", "chaotic"].includes(word);
  }

  console.log(
    neutralize("These dull boring cards are part of a chaotic board game.")
  );
  // Expected: These cards are part of a board game.
  // Actual: These boring cards are part of a board game.