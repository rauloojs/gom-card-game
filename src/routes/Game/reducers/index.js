import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers';
import currentPlayer from './currentPlayer'
import * as ActionTypes from '../constants'
import deck from './deck'
import players from './players'
import hands from './hands'
import stage from './stage'
import pile from './pile'
import * as Deck from 'gameClasses/Deck'
import * as Hand from 'gameClasses/Hand'


const ACTION_HANDLERS = {
  [ActionTypes.ADD_PLAYER] : (state, action) => {
    return {
      ...state,
      players: [
        ...state.players,
        state.players.length + 1
      ]
    }
  },
  [ActionTypes.DEAL_HANDS] : (state, action) => {
    let hands = [];
    let newState = {...state};

    state.players.forEach(player => {
      let { deck, cards } = Deck.giveCards(newState.deck, 9);
      let hand = Hand.newHand(cards);
      newState.deck = deck;
      hands.push(hand);
    });

    return {
      ...newState,
      hands
    }
  },
  [ActionTypes.PICK_CARDS] : (state, action) => {
    let hands = [];
    let newState = {...state};

    newState.hands = newState.hands.slice();
    newState.hands[state.currentPlayer] = Hand.pickCards(state.hands[state.currentPlayer]);

    return newState
  },
  [ActionTypes.PUT_CARD] : (state, action) => {
    let hands = [];
    let newState = {...state};

    newState.hands = newState.hands.slice();
    newState.hands[state.currentPlayer] = Hand.putCard(state.hands[state.currentPlayer], action.index);

    return newState
  },
  [ActionTypes.PLAY_CARD] : (state, action) => {
    let hands = [];
    let newState = {...state};

    newState.hands = newState.hands.slice();
    newState.pile = newState.pile.slice();
    let { card, hand } = Hand.playCard(state.hands[state.currentPlayer], action.index);
    newState.hands[state.currentPlayer] = hand;
    newState.pile.push(card);

    return newState
  },
}

const initialState = {
  players: [],
  hands: []
};

function main (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

let combined = combineReducers({
  currentPlayer,
  deck,
  players,
  hands,
  stage,
  pile
});

const game = reduceReducers(combined, main);

export default game
