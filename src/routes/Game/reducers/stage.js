import * as ActionTypes from '../constants'


const ACTION_HANDLERS = {
  [ActionTypes.SET_STAGE] : (state, action) => {
    return action.stage
  },
}

const initialState = 0;

export default function stage (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
