import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers';
import currentPlayer from './currentPlayer'
import * as ActionTypes from '../constants'
import deck from './deck'
import players from './players'


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
    return {
      ...state,
      players: [
        ...state.players,
        state.players.length + 1
      ]
    }
  },
}

const initialState = {
  players: []
};

function main (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

let combined = combineReducers({
  currentPlayer,
  deck,
  players
});

const game = reduceReducers(combined, main);

export default game
