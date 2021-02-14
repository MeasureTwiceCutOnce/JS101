// The LS answer below is pretty smooth. I like how they created their own template tokens which I didn't know one could do, then they just used the replace method along with an object of the desired replacement words. They use d a random method like I did, but they were able to access the length of the object using smart logic unlike mine.
let template1 =
  "The %{adjective} brown %{noun} %{adverb} " +
  "%{verb} the %{adjective} yellow " +
  "%{noun}, who %{adverb} %{verb} his " +
  "%{noun} and looks around.";

let template2 = "The %{noun} %{verb} the %{noun}'s %{noun}.";

function madlibs(template) {
  const REPLACEMENT_TEXTS = {
    adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
    noun: ["fox", "dog", "head", "leg", "tail"],
    verb: ["jumps", "lifts", "bites", "licks", "pats"],
    adverb: ["easily", "lazily", "noisily", "excitedly"]
  };

  function replaceText(match) {
    let key = match.replace(/[^a-z]/g, "");
    let index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][index];
  }

  return template.replace(/%{[a-z]+}/g, replaceText);
}

// Below is Coens answer which doesn't use regex but it still creates its own token which is just paraenthsis which could be problematic.

function madlibs(template) {
    const words = {
      adj : ['quick', 'lazy', 'sleepy', 'noisy','hungry'],
      no : ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
      ve : ['jumps', 'lifts', 'bites', 'licks', 'pats'],
      adv : ['easily', 'lazily', 'noisily', 'excitedly'],
    };

    const wordCategories = Object.keys(words);

    // loop as long as 'template' still includes (adj), (no), (ve), or (adv)
    while (strIncludesKey(template, wordCategories)) {

      // iterate through all keys of object, replacing (adj), (no), (ve), and (adv)
      for (let idx = 0; idx < wordCategories.length; idx += 1) {
        let category = wordCategories[idx];
        template = template.replace(`(${category})`, selectWord(words[category]));
      }
    }

    return template;
  }

  // select random word from word array
  function selectWord(arr) {
    let num = Math.floor(Math.random() * (arr.length));
    return arr[num];
  }

  // check if 'template' still includes any instance of (adj), (no), (ve), or (adv)
  function strIncludesKey(str, arr) {
    for (let idx = 0; idx < arr.length; idx += 1) {
      let element = arr[idx];
      if (str.includes(`(${element})`)) return true;
    }

    return false;
  }

  let template1 = "The (adj) brown (no) (adv) (ve) the (adj) yellow (no), who " +
                  "(adv) (ve) his (no) and looks around.";
  let template2 = "The (adj) brown (no) (adv) (ve) the (adj) yellow (no), who " +
                  "(adv) (ve) his (no) and looks around.";

  madlibs(template1);
  madlibs(template1);

//   The below answer is fromJoey and he did a good job split and map primarily.
function randomIndex(end) {
    return Math.floor(Math.random() * end);
  }

  function madlibs(template) {
    const templateArray = template.split(' ').map(word => word.split(','));

    const wordTypes = ['adjective', 'noun', 'verb', 'adverb'];

    const wordBank = {
      adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
      noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
      verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
      adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
    };

    return templateArray
      .map(subarray =>
        subarray
          .map(word => {
            if (wordTypes.includes(word)) {
              return wordBank[word][randomIndex(wordBank[word].length)];
            } else {
              return word;
            }
          })
          .join(',')
      )
      .join(' ');
  }

//   Wes is the reduce King!
let adj = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
let adv = ['easily', 'lazily', 'noisily', 'excitedly'];

let template1 = "The ADJ brown NOUN ADV VERB the ADJ yellow NOUN and the NOUN ADV VERB their NOUN and looks around.";
let template2 = "The NOUN VERB the NOUN of the NOUN all the way to town.";

function getRandomIdxFromInterval(minParam, maxParam) {
  return Math.floor((Math.random() * (maxParam - minParam + 1)) + minParam);
}

function madlibs(templateParam) {
  return templateParam.split(' ').reduce((acc, ele) => {
    if (ele === 'ADJ') {
      let jdx = getRandomIdxFromInterval(0, adj['length'] - 1);
      acc.push(adj[jdx]);
    } else if (ele === 'NOUN') {
      let jdx = getRandomIdxFromInterval(0, nouns['length'] - 1);
      acc.push(nouns[jdx]);
    } else if (ele === 'VERB') {
      let jdx = getRandomIdxFromInterval(0, verbs['length'] - 1);
      acc.push(verbs[jdx]);
    } else if (ele === 'ADV') {
      let jdx = getRandomIdxFromInterval(0, adv['length'] - 1);
      acc.push(adv[jdx]);
    } else {
      acc.push(ele);
    }
    return acc;
  }, []).join(' ');
}
// Brendan with a forEach and switch statement
let partsOfSpeech = {
    noun: ["man", "building", "cat", "dog", "ocean", "milk", "rain", "house"],
    verb: ["coughs", "reads", "sleeps", "runs", "sees", "thinks", "loves", "ate"],
    adjective: ["angry", "blue", "clear", "itchy", "evil", "nice", "odd", "salty"],
    adverb: ["lazily", "quietly", "gracefully", "never", "boldly", "safely"],
  };

  function madlibs(template) {
    template.forEach((word, i) => {
      switch (word) {
        case "noun":
          template[i] = selectRandomWordFrom(partsOfSpeech["noun"]);
          break;
        case "verb":
          template[i] = selectRandomWordFrom(partsOfSpeech["verb"]);
          break;
        case "adjective":
          template[i] = selectRandomWordFrom(partsOfSpeech["adjective"]);
          break;
        case "adverb":
          template[i] = selectRandomWordFrom(partsOfSpeech["adverb"]);
          break;
      }
    });
    console.log(template.join(" "));
  }

  function selectRandomWordFrom(array) {
    let randomIndex = getRandomIntInclusive(0, array.length - 1);

    return array[randomIndex];
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let template1 = [ "The", "adjective", "noun", "adverb", "verb", "and", "the",
    "adjective", "noun", "adverb", "verb"];
  let template2 = ["\"A'Hoy!\"", "said", "the", "noun", "as", "they", "verb",
    "adverb"];

  madlibs(template1);
  madlibs(template2);
