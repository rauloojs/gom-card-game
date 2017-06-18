import * as ActionTypes from '../constants'


const ACTION_HANDLERS = {
  // [ActionTypes.RESET_DECK] : (state, action) => {
  //   return newDeck()
  // },
}

const initialState = [];

export default function pile (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
