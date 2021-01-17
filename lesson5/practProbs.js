let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);

  return totalAScore - totalBScore;
});

// Below my answer which is hard coded which doesn't take into account how would you deal with situations when you don't know how many games each player had played. For example, what if one player only played two gamesa and another player played five games. My function would not work for that situation. The LS answer above would though.

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a,b) => (a[0] + a[1] + a[2] - (b[0] + b[1] + b[2])) )

console.log(scores);

// let words = ['go', 'ahead', 'and', 'jump'];

// words.sort((a,b) => a.length - b.length);
// console.log(words);
// let vowels = ['u', 'i', 'a', 'e', 'o']
// vowels.slice().sort()
// // [ 'a', 'e', 'i', 'o', 'u' ]
//  vowels
// // [ 'u', 'i', 'a', 'e', 'o' ]

// console.log(vowels.map(char => char.charCodeAt()));