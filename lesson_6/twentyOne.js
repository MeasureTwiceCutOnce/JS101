const readline = require('readline-sync');
// const CARDS = [null,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
const CARDS = {
    2:4,3:4,4:4,5:4,6:4,7:4,8:4,9:4,10:40,11:4
}
let availableCards = Object.keys(CARDS).length
let currentHand = [];
let possibleCards = Object.keys(CARDS)

//Game Set up

function initializeCards() {
    return Object.keys(CARDS);
}

function displayCards() {
    return currentHand;
}

//Dealing


function randomCard() {
    return Math.ceil(availableCards * Math.random())
}

function dealCard() {
    let singleCard = randomCard();
    currentHand.push(possibleCards[singleCard])
    CARDS[singleCard]--;
}

function dealTwoCards() {
    dealCard();
    dealCard();
}
//Counting Cards and picking winners

function total(cards) {
    let sum = 0;

    for (let value of cards) {
        sum += Number(value);
    }

    cards.forEach(value => {
        if (value === 11) {
            if (sum > 21) {
                sum -= 10;
            }
        }
    })

    return sum;
}


function detectResult(currentHand,dealerHand) {
    let playerTotal = total(currentHand);
    let dealerTotal = total(dealerHand);

    if (playerTotal > 21) {
        return 'PLAYER_BUSTED';
      } else if (dealerTotal > 21) {
        return 'DEALER_BUSTED';
      } else if (dealerTotal < playerTotal) {
        return 'PLAYER';
      } else if (dealerTotal > playerTotal) {
        return 'DEALER';
      } else {
        return 'TIE';
      }
}

function displayResults(dealerCards, playerCards) {
    let result = detectResult(dealerCards, playerCards);

    switch (result) {
      case 'PLAYER_BUSTED':
        prompt('You busted! Dealer wins!');
        break;
      case 'DEALER_BUSTED':
        prompt('Dealer busted! You win!');
        break;
      case 'PLAYER':
        prompt('You win!');
        break;
      case 'DEALER':
        prompt('Dealer wins!');
        break;
      case 'TIE':
        prompt("It's a tie!");
    }
  }

  function playAgain() {
    console.log('-------------');
    prompt('Do you want to play again? (y or n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  }
//Game Play Loop


while (true) {
    prompt(`Welcome to 21`)

    let deck = initializeCards();
    let currentHand = [];
    let dealerCards = [];

    dealTwoCards();
    let handTotal = 0;
    handTotal = total(currentHand);

    displayCards();

    let userChoice = readline.question(`Would you like to hit or stay?`)

    if (total(currentHand) > 21) {
        prompt(`Sorry you busted!!!!`)
        break;
    }

    if (userChoice === "hit") {
        dealCard();
    }
    if (userChoice === "stay") {
        console.log(`You chose to stay`)
        break;
    }
}

console.log(
initializeCards()
)