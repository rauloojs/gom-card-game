import { connect } from 'react-redux'
import { resetDeck, addPlayer, dealHands } from '../actions'
import Game from '../components/Game'


const mapStateToProps = (state) => ({
  deck: state.game.deck
});

const mapDispatchToProps = {
  resetDeck,
  addPlayer,
  dealHands
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
