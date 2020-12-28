let words = {
  "hello": 5,
  "real": 1,
  "furry": 0
}

console.log("hello world");

var express = require("express");

let app = express();

let server = app.listen(3000, listening);

function listening() {
  console.log("I hear you loud and clear.")
}

app.use(express.static("public"));

app.get("/add/:word/:score?", addWord);

function addWord(request, response) {
  let data = request.params;
  let word = data.word;
  let score = Number(data.score);
  let reply;
  if (!score) {
    reply = {
      msg: "score is required."
  } else {
    words[word] = score;

    reply = {
      msg: "Thank you for your word."
  }
  }
}




  let num = data.num;
  let reply = "";
  for (i = 0; i < num; i++) {
    reply += `"I love ${dat.flower} too."`
  }
  response.send(reply);
}

app.get("all", sendAll);

function sendAll(request, response) {
  response.send(words);
}

app.get("search/:word", searchWord);

function searchWord(request, response) {
  let word = request.params.word; 
  let reply;
  if (words[word]) {
    reply = {
      status: "found",
      word: word,
      score: words[word]
    }
  } else {
    reply = {
      status: "word not found",
      
    }
  }
  response.send(reply);
}