function displayGreeting(array, object) {
  // let name = getUserInput(`Please type your name.`)
  let name = array.join(" ");
  let occupation = object["occupation"];
  let title = object["title"];

  console.log(`Hello ${name}. It is nice to have a ${title} ${occupation} around.`)
}

// function getUserInput(prompt) {
//   let sync = require("readline-sync");

// }

let johnsArray = ["John", "Q", "Doe"];
let johnsOccupation = { title: "Master", occupation: "Plumber" };

displayGreeting(johnsArray, johnsOccupation);