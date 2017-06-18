import getInmutableArray from './utils'


export function newHand(cards) {
  let setCards = cards.slice(0, 3);
  let openCards = cards.slice(3, 6);
  let handCards = cards.slice(6, 9);

  return {
    setCards,
    openCards,
    handCards
  }
}

export function pickCards(hand) {
  let openCards = hand.openCards.slice();
  let handCards = hand.handCards.slice();

  return {
    ...hand,
    openCards: [],
    handCards: [
      ...openCards,
      ...handCards
    ]
  }
}

export function putCard(hand, index) {
  let openCards = hand.openCards.slice();
  let handCards = hand.handCards.slice();

  openCards.push(handCards[index]);
  handCards.splice(index, 1);

  return {
    ...hand,
    openCards,
    handCards
  }
}

export function playCard(hand, index) {
  let handCards = hand.handCards.slice();
  let card = handCards[index];

  handCards.splice(index, 1);

  return {
    card,
    handCards
  }
}

// export class Hand {
//   constructor() {
//     this.setCards = [];
//     this.openCards = [];
//     this.handCards = [];
//   }
//   static addCards(hand, cards) {
//     let newHand = getMutableObject(hand);
//     newHand.handCards = getMutableArray(newHand.handCards);
//
//     return [
//
//     ]
//   }
//   static giveCards(hand) {
//     let newDeck = getInmutableArray(hand);
//
//     return {
//       cards: newDeck.slice(0, integer),
//       hand: newDeck.slice(integer, newDeck.length)
//     };
//   }
// }
