// function searchWord(word, text) {
//     // let regex = /word/g
//     // let numOfOccurs = text.match(new RegExp(word)).length;


//     // using a split method
//     let numOfOccurs = text.toLowerCase().split(word).length - 1;



    // console.log(regex)
    // Using a hash table and for loop.
//     let split = text.toLowerCase().split(" ");
//     let obj = {};

// for (var i = 0; i < split.length; i++) {
//     if (obj[split[i]] === undefined) {
//     obj[split[i]] = 1;
//     } else {
//     obj[split[i]]++;
//     }
//     if (obj[split[i]] = undefined) {
//       obj(split[i]) = 0
//     }
// }

// console.log(numOfOccurs)
// }
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

searchWord('sed', text);     // 4
searchWord('est', text);     // 0
searchWord('est,', text);    // 2

// The LS answer. This one is really easy and I am not sure why I didn't get it. Maybe because I was looking for some really elaborate answer, when just using the basics is the best thing to do. This one compared the word to the each word in the text which is better than using the match or split methods which count even substrings as a match and add those to their count.
function searchWord(word, text) {
    let ucWord = word.toUpperCase();
    let ucWordsInText = text.toUpperCase().split(' ');
    let count = 0;

    for (let index = 0; index < ucWordsInText.length; index += 1) {
      if (ucWordsInText[index] === ucWord) {
        count += 1;
      }
    }

    console.log( count);
  }