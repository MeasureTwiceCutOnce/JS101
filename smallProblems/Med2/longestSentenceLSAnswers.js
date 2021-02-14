
// INterestingly, the LS think that the regex was the most difficult part about this problem and it was the part that stumped me, however, the reduce method was a lot more genious in my opinion.
function longestSentence(text) {
    let sentences = text.match(/\w.*?[.!?]/g);

    let longest = sentences.reduce(
      function(longest, sentence) {
        let length = sentence.split(/\s/).length;
        if (length > longest.length) {
          return { text: sentence, length: length };
        } else {
          return longest;
        }
      },
      { text: "", length: 0 }
    );

    console.log(longest.text + "\n");
    console.log("The longest sentence has " + longest.length + " words.\n");
  }


//   This solution below is from Coen and he has done a good job  not using regex and he also sorted it the way I was trying to do, but I guess I left off the length component. DUH!
function longestSentence(text) {
    let sentences = [];
    let startIdx = 0;

    for (let idx = 0; idx < text.length; idx += 1) {
      let char = text[idx];

      if (char === '!' || char === '?' || char === '.') {
        sentences.push(text.slice(startIdx, idx + 1).trim());
        startIdx = idx + 1;
      }
    }

    sentences.sort((a, b) => {
      a = a.split(' ').length;
      b = b.split(' ').length;

      return b - a;
    })

    let wordCount = sentences[0].split(' ').length;
    console.log(sentences[0]);
    console.log(`The longest sentence has ${wordCount} words.\n`)
  }

//   Dominic made an object which he populated with the sentences using a for loop and then used the Math.max on the object keys to find the longest sentence. Great idea. He also used the split to make the sentences in arrays and then changed them back to strings by concating them as a string and also created the length by splitting them again and giving the length of those.
function longestSentence(longString) {
    let sentencesObj = {};
    let sentenceArr = longString.split(/([.!?])/);

    for (let i = 0; i < sentenceArr.length; i += 2) {
      let indSentence = sentenceArr[i].trimStart().concat(sentenceArr[i + 1]);
      let wordArr = indSentence.split(" ");
      sentencesObj[wordArr.length] = indSentence;
    }

    let biggestKey = Math.max(...Object.keys(sentencesObj));

    console.log(`Longest sentence: "${sentencesObj[biggestKey]}"`);
    console.log(`The longest sentence has ${biggestKey.toString()} words.`)
  }

//   Joey's answer
function countWords(string) {
    return [...string.matchAll(/\S+/g)].length;
  }

  function longestSentence(paragraph) {
    const sentences = [];
    let start = 0;

    for (let count = 0; count < paragraph.length; count++) {
      if (/[.?!]/.test(paragraph[count])) {
        sentences.push(paragraph.slice(start, count + 1).trim());
        start = count + 1;
      }
    }

    sentences.sort((a, b) => countWords(a) - countWords(b));

    console.log(sentences[sentences.length - 1]);

    const numberOfWords = countWords(sentences[sentences.length - 1]);
    return `The longest sentence has ${numberOfWords} words.`;
  }

//Steven Ni
function longestSentence(text) {
    let sentences = text.split(/[.!?]/);
    let maxSentenceLength = 0;
    sentences.forEach(sentence => {
      let sentenceLength = sentence.trim().split(' ').length;
      if (sentenceLength > maxSentenceLength) {
        maxSentenceLength = sentenceLength;
      }
    })
    return maxSentenceLength;
  }