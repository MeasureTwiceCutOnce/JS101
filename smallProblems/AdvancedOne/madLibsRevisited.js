function madlibs(template) {
    // let adj = ["quick", "lazy", "sleepy", "noisy", "hungry", "ugly"];
    // let noun = ["fox", "dog", "head", "leg", "tail", "cat"];
    // let adv = ["easily", "lazily", "noisily", "excitedly", "awkwardly", "carefully"];
    // let verb = ["jumps", "lifts", "bites", "licks", "pats","runs"];
    // let randomNum = Math.floor(Math.random() * noun.length + 1)

    // let newString = template.replace(/adj/i, adj[randomNum]).replace(/adj/i, adj[randomNum]).replace(/noun/i,noun[randomNum]).replace(/adv/i, adv[randomNum]).replace(/verb/i, verb[randomNum]).replace(/adj/i, adj[randomNum]).replace(/adj/i, adj[randomNum]).replace(/noun/i, noun[randomNum])

    // return newString;
    const templateArray = template.split(' ').map(word => word.split(','));
    return templateArray;
  }

  // These examples use the following list of replacement texts:
//   adjectives: quick lazy sleepy noisy hungry
//   nouns: fox dog head leg tail cat
//   verbs: jumps lifts bites licks pats
//   adverbs: easily lazily noisily excitedly
//   ------
console.log(
  madlibs(`The adj adj noun adv verb, the adj adj noun.`));
  // The "sleepy" brown "cat" "noisily"
  // "licks" the "sleepy" yellow
  // "dog", who "lazily" "licks" his
  // "tail" and looks around.

//   madlibs(template1);
//   // The "hungry" brown "cat" "lazily"
//   // "licks" the "noisy" yellow
//   // "dog", who "lazily" "licks" his
//   // "leg" and looks around.

//   madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

//   madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

