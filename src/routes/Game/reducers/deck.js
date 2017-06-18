import * as ActionTypes from '../constants'
import newDeck from 'gameClasses/Deck'


const ACTION_HANDLERS = {
  [ActionTypes.RESET_DECK] : (state, action) => {
    return newDeck()
  },
}

const initialState = [];

export default function deck (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
