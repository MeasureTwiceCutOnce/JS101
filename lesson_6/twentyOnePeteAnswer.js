const readline = require('readline-sync');

const SUITS = ['s', 'h', 'd', 'c']; // spade, heart, diamond, club
const CARD_VALUE = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const PLAYER = 'Player';
const DEALER = 'Dealer';
const JQK_VALUE = 10;
const ACE_VALUE_11 = 11;
const MAX_HAND_VALUE = 21;
const DEALER_STAY_VALUE = 17;

// Prompt message
function prompt(message) {
  console.log(`\n=> ${message}`);
}

// Clear console and Display Game Info
function displayGameInfo() {
  console.clear();
  console.log('*** Twenty-One Game ***');
}

// Initialize the full deck of cards
function initializeDeck() {
  let fullDeck = [];

  for (let indexSuits = 0; indexSuits < SUITS.length; indexSuits++) {
    for (let indexCardValue = 0; indexCardValue < CARD_VALUE.length;
      indexCardValue++) {
      fullDeck.push([SUITS[indexSuits], CARD_VALUE[indexCardValue]]);
    }
  }
  return fullDeck;
}

// Shuffle the deck
function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
}

// Deal cards to player and dealer
function dealACard(deck) {
  return deck.shift();
}

// Calculate total card value
function totalCardsValue(cards) {
  let totalValue = 0;

  for (let index = 0; index < cards.length; index++) {

    if (['J', 'Q', 'K'].includes(cards[index][1])) {
      totalValue += JQK_VALUE;

    } else if (cards[index][1] === 'A') {
      totalValue += ACE_VALUE_11;

    } else {
      totalValue += Number(cards[index][1]);
    }
  }

  // Correcting Ace Value if required
  let aceOnHand = cards.filter(cardArr => cardArr[1] === 'A');
  aceOnHand.forEach(_ => {
    if (totalValue > MAX_HAND_VALUE) {
      totalValue -= 10;
    }
  });

  return totalValue;
}

// Display all player's or dealer's card and total Value
function displayCardsAndTotalValue(cards, person) {

  prompt(`${person}'s cards: ${allCards(cards)}
  \t\t   Total = ${totalCardsValue(cards)}`);
}

// Helper function to display all cards
function allCards(cards) {
  let allCardsToDisplay = '';
  for (let num = 0; num < cards.length; num++) {
    allCardsToDisplay += ('[' + cards[num][1] + ']');
  }

  return allCardsToDisplay;
}

// Display the first card of the dealer
function displayFirstDealerCard(dealerCards) {
  prompt(`Dealer's card: [${dealerCards[0][1]}]`);
}

// Display Table before Dealer's turn
function displayTable(playerCards, dealerCards) {
  displayGameInfo();
  displayCardsAndTotalValue(playerCards, PLAYER);
  displayFirstDealerCard(dealerCards);
}

// Busted condition
function busted(cards) {
  return totalCardsValue(cards) > MAX_HAND_VALUE;
}

// Ask to hit or stay
function hitOrStay() {
  prompt('Hit or Stay? (type "h" or "s")');
  let answer = readline.question().toLowerCase();

  while (answer !== 'h' && answer !== 's')  {
    prompt('Please input "h" or "s"');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

// Display table after dealer's return (Game End)
function displayGameEndTable(playerCards, dealerCards) {
  displayGameInfo();
  displayCardsAndTotalValue(playerCards, PLAYER);
  displayCardsAndTotalValue(dealerCards, DEALER);
}

// Display winner of the round
function displayWinner(playerCards, dealerCards) {

  if (totalCardsValue(dealerCards) > MAX_HAND_VALUE) {
    prompt('Dealer Busted! You win!');

  } else if (totalCardsValue(playerCards) > totalCardsValue(dealerCards)) {
    prompt('You win!');

  } else if (totalCardsValue(playerCards) === totalCardsValue(dealerCards)) {
    prompt('It\'s a tie!');

  } else {
    prompt('You lose!');
  }
}

// Ask to play another game
function playAnotherGame() {
  prompt('Would you like to play another game? (y or n)');
  let answer = readline.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('Please input "y" or "n"');
    answer = readline.question().toLowerCase();
  }
  return answer;
}


// The Main Game Loop
while (true) {

  displayGameInfo();
  let deck = initializeDeck();

  shuffle(deck);

  let playerCards = [dealACard(deck), dealACard(deck)];
  let dealerCards = [dealACard(deck), dealACard(deck)];

  displayTable(playerCards, dealerCards);

  while (true) {
    let answerHitOrStay = hitOrStay();

    if (answerHitOrStay === 's' || busted(playerCards)) break;

    else {
      playerCards.push(dealACard(deck));
      displayTable(playerCards, dealerCards);
      if (busted(playerCards)) break;
    }
  }

  if (busted(playerCards)) {
    prompt(`Busted! You lose.`);
    let answerPlayAnotherGame = playAnotherGame();
    if (answerPlayAnotherGame === 'n') break;

  } else {
    while (totalCardsValue(dealerCards) < DEALER_STAY_VALUE) {
      dealerCards.push(dealACard(deck));
    }

    displayGameEndTable(playerCards, dealerCards);
    displayWinner(playerCards, dealerCards);

    let answerPlayAnotherGame = playAnotherGame();
    if (answerPlayAnotherGame === 'n') break;
  }
}

prompt('Thank you for playing :)');