import * as ActionTypes from './constants'

// ------------------------------------
// Actions
// ------------------------------------
export const resetDeck = () => ({
  type: ActionTypes.RESET_DECK
});

export const addPlayer = () => ({
  type: ActionTypes.ADD_PLAYER
});

export const dealHands = () => ({
  type: ActionTypes.DEAL_HANDS
});
