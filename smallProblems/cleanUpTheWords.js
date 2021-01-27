// function cleanUp(text) {
//     let cleanText = '';

//     for (let idx = 0; idx < text.length; idx += 1) {
//       if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
//         cleanText += text[idx];
//       } else if (cleanText[cleanText.length - 1] !== ' ') {
//         cleanText += ' ';
//       }
//     }

//     return cleanText;
//   }

//   function isLowerCaseLetter(char) {
//     return char >= 'a' && char <= 'z';
//   }

//   function isUpperCaseLetter(char) {
//     return char >= 'A' && char <= 'Z';
//   }
// While my code below does work, I like the LS answer (seen above) which is smooth because they are doing an array search as a for loop and seeing if the character is a lower case letter or upper case letter, and just adding it to a new string if it is a letter. They are also looking for white space and replacing it with a single space. Very clean.
function cleanUp(string) {
    // let cleanString = string.slice(0);
    let nonAlphaRegex = /[^a-zA-Z\d\s:]/g;
    return string.replaceAll(nonAlphaRegex, " ").replace(/\s+/g,' ');
}


console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

