import { createSelector } from 'reselect'

const getCurrentPlayer = (state) => state.game.currentPlayer
const getHands = (state) => state.game.hands

export const getCurrentPlayerHand = createSelector(
  [ getCurrentPlayer, getHands ],
  (player, hands) => {
    if (hands[player]) {
      return hands[player]
    }
    return null
  }
)
