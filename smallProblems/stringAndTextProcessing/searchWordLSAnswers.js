// Seo's answer. I like how she used the reduce method and this better helps me to understand the intricacies of the reduce method. I see how you can put an initial value (here zero) and then just add each element of the array to it.

function searchWord(word, str) {
    return str.split(" ").reduce((acc, current) => {
        if (word.toLowerCase() === current.toLowerCase()) {
            return acc + 1;
        }
        return acc;
    }, 0);
}


// Nick's answer. Again there are so many ways to do this. Here he is using the filter method and utilizing its callback feature that allows one to go through each element and do something with it.

const searchWord = (word, text) => {
    return text.split(" ").filter((el) => el.toLowerCase() === word.toLowerCase()).length;
  };

//   Liz has a nice answer as well. I was also trying to use regex and match, but I could not get it to work because the argument was being read as "word" literally and not as a variable for the actual word. Here Liz figured out how to get the variable into regex.

function searchWord(word, text) {
    // let regex = /\sWORD\s|^WORD\s/gi;
    let regex = "\\s".concat(word,"\\s|^",word,"\\s");
    let re = new RegExp(regex, "gi");
    let matches = [...text.matchAll(re, text)];
    return matches.length; //+ matches2.length;
  };