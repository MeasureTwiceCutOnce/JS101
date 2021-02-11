function searchWord(word, text) {
    let regex = new RegExp(word, "gi");
    return text.replace(regex, `**${word.toUpperCase()}**`);
  }

//   I really like this answer from LS above where they were able to turn the word argument into a regex. THis is what I need to see because I can read about these things, but until I experience them, I will not truely learn them.

