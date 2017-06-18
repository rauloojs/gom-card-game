import getMutableArray from './utils'


const suits = [
  'CLUBS',
  'HEARTS',
  'DIAMONDS',
  'SPADES'
]

const values = [
  {value: 'A', realValue: 11},
  {value: '2', realValue: 0},
  {value: '3', realValue: 1},
  {value: '4', realValue: 2},
  {value: '5', realValue: 3},
  {value: '6', realValue: 4},
  {value: '7', realValue: 5},
  {value: '8', realValue: 6},
  {value: '9', realValue: 7},
  {value: '10', realValue: 0},
  {value: 'J', realValue: 8},
  {value: 'Q', realValue: 9},
  {value: 'K', realValue: 10},
]

const shuffle = deck => {
  let newDeck = getMutableArray(deck);

  for (let i = newDeck.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [newDeck[i - 1], newDeck[j]] = [newDeck[j], newDeck[i - 1]];
  }

  return newDeck;
}

export function giveCards(deck, number) {
  let newDeck = getMutableArray(deck, number);

  return {
    cards: newDeck.slice(0, number),
    deck: newDeck.slice(number, newDeck.length)
  };
}

export function newDeck() {
  let cards = [];
  for (let suit of suits) {
    for (let v of values) {
      cards.push({ suit, value: v.value, realValue: v.realValue });
    }
  }

  return shuffle(cards);
}
