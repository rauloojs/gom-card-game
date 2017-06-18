import getMutableArray from './utils'


const suits = [
  'CLUBS',
  'HEARTS',
  'DIAMONDS',
  'SPADES'
]

const values = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
]


export default function newDeck() {
  let cards = [];
  for (let suit of suits) {
    for (let value of values) {
      cards.push({ suit, value });
    }
  }

  return shuffle(cards);
}

const shuffle = deck => {
  let newDeck = getMutableArray(deck);

  for (let i = newDeck.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [newDeck[i - 1], newDeck[j]] = [newDeck[j], newDeck[i - 1]];
  }

  return newDeck;
}

static giveCards(deck) {
  let newDeck = getMutableArray(deck, integer);

  return {
    cards: newDeck.slice(0, integer),
    deck: newDeck.slice(integer, newDeck.length)
  };
}
