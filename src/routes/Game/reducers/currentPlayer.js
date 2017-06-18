import * as ActionTypes from '../constants'


const ACTION_HANDLERS = {
  [ActionTypes.SET_CURRENT_PLAYER] : (state, action) => {
    return action.index
  },
}

const initialState = 1

export default function currentPlayer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
