import { connect } from 'react-redux'
import { resetDeck, addPlayer, dealHands, setStage } from '../actions'
import Game from '../components/Game'
import { getCurrentPlayerHand } from '../selectors'


const mapStateToProps = (state) => ({
  deck: state.game.deck,
  stage: state.game.stage,
});

const mapDispatchToProps = {
  resetDeck,
  addPlayer,
  dealHands,
  setStage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
