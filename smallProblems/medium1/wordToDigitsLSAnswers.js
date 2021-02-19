// I like how the LS answer also taught how to not include regex of substrings by adding the following code.
regex = new RegExp('\\b' + word + '\\b', 'g');

const NUM_WORDS = {
    zero:  0,
    one:   1,
    two:   2,
    three: 3,
    four:  4,
    five:  5,
    six:   6,
    seven: 7,
    eight: 8,
    nine:  9,
  };

  function wordToDigit(sentence) {
    Object.keys(NUM_WORDS).forEach(word => {
      let regex = new RegExp(word, 'g');
      sentence = sentence.replace(regex, NUM_WORDS[word]);
    });

    return sentence;
  }
// Joey's answer splits a second time the period, but that doesn't handle questions marks or other punctuation.  I would have stripped the sentence of any outside punctuation and then split, and then mapped over it.
const numberMap = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  function wordToDigit(statement) {
    let stringArray = statement.split(' ').map(item => item.split('.'));

    stringArray = stringArray.map(subarray =>
      subarray.map(item => {
        if (numberMap.hasOwnProperty(item)) {
          return numberMap[item];
        } else {
          return item;
        }
      })
    );

    stringArray = stringArray.map(subarray => subarray.join('.'));
    return stringArray.join(' ');
  }

// I thought MIcheals solution below is a good one as well. function wordToDigit(string) {
  let numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  numberWords.forEach((ele, idx) => {
    while (string.includes(ele)) {
      string = string.replace(ele, idx);
    }
  });

  return string;
}
// Sam
function wordToDigit(str) {
    const numericWords=  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine'];

    numericWords.forEach((word, idx) => {
      while (str.includes(word)) str = str.replace(word, idx.toString());
    });

    return str;
  }