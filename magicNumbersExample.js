const NUMBER_CARDS_IN_HAND = 5;

function dealHand() {
  let hand = [];
  for (let cardNumber = 0; cardNumber < NUMBER_CARDS_IN_HAND; ++cardNumber) {
    hand.push(dealCard());
  }

  return hand;
}

const FIRST_CHARACTER_CODE = 'a'.charCodeAt();
const LAST_CHARACTER_CODE = 'z'.charCodeAt();

