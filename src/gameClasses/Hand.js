import getInmutableArray from './utils'

export class Hand {
  constructor() {
    this.setCards = [];
    this.openCards = [];
    this.handCards = [];
  }
  static addCards(hand, cards) {

  }
  static giveCards(hand) {
    let newDeck = getInmutableArray(hand);

    return {
      cards: newDeck.slice(0, integer),
      hand: newDeck.slice(integer, newDeck.length)
    };
  }
}
