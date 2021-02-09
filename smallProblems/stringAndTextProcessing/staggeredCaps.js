// function staggeredCase(string) {
//     let newString = string.split("")
//     let sillyString = [];
//     let capString = [];
//     // for loop
//     for (let i = 0; i < newString.length; i++) {
//         if (i % 2 === 1) {
//             capString.push(newString[i].toLowerCase());
//         } else {
//             capString.push(newString[i].toUpperCase());
//         }
//     }

//     // forEach method
//         newString.forEach((letter, index) => {
//             if (index % 2 === 0) {
//                 sillyString.push(letter.toLowerCase());
//             } else {
//                 sillyString.push(letter.toUpperCase());
//             }
//         })

//     // map
//     string.map((letter,index) => )

//     console.log(sillyString.join(""))
//     console.log(capString.join(""))
// }
console.log(
staggeredCase('I Love Launch School!'),        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL CAPS'),                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers'),   // "IgNoRe 77 ThE 4444 nUmBeRs"
)
// For this one, I got it right and not much to say. I liked Bilal's answer the most because it was the most succinct.
function staggeredCase(string) {
    // return string.split('')
    //   .map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
    //   .join('');

    return string.split(" ")
  }