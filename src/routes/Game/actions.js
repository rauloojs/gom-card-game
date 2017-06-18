import * as ActionTypes from './constants'

// ------------------------------------
// Actions
// ------------------------------------
export const setStage = (stage) => ({
  type: ActionTypes.SET_STAGE,
  stage
});

export const resetDeck = () => ({
  type: ActionTypes.RESET_DECK
});

export const addPlayer = () => ({
  type: ActionTypes.ADD_PLAYER
});

export const dealHands = () => ({
  type: ActionTypes.DEAL_HANDS
});

export const pickCards = () => ({
  type: ActionTypes.PICK_CARDS
});

export const putCard = (index) => ({
  type: ActionTypes.PUT_CARD,
  index
});

export const playCard = (index) => ({
  type: ActionTypes.PLAY_CARD,
  index
});
