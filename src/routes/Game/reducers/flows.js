import { GET_FLOWS_LIST } from '../constants'


const ACTION_HANDLERS = {
  [GET_FLOWS_LIST] : (state, action) => {
    return action.payload.results
  },
}

const initialState = []

export default function flows (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
