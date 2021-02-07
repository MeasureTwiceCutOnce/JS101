function reverseWords(phrase) {
    return phrase
      .split(' ')
      .map(item => {
        if (item.length >= 5) {
          return [...item].reverse().join('');
        } else {
          return item;
        }
      })
      .join(' ');
  }
//   The above one is the same as my code, but a lot less writing. I can see how with the map function, since your are already returning a shallow copy, then you can just return the whole function as opposed to making an newArray in which to put the answers.