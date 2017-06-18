import { createSelector } from 'reselect'

const getCurrentPlayer = (state) => state.game.currentPlayer
const getHands = (state) => state.game.hands
const getPile = (state) => state.game.pile

export const getCurrentPlayerHand = createSelector(
  [ getCurrentPlayer, getHands ],
  (player, hands) => {
    if (hands[player]) {
      return hands[player]
    }
    return null
  }
)

export const getTopFromPile = createSelector(
  [ getPile ],
  (pile) => {
    if (pile.length) {
      return pile[0]
    }
    return null
  }
)
