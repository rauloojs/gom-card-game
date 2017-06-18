import { connect } from 'react-redux'
import { pickCards, setStage } from '../actions'
import Hand from '../components/Hand'
import { getCurrentPlayerHand } from '../selectors'


const mapStateToProps = (state) => ({
  hand: getCurrentPlayerHand(state),
  stage: state.game.stage,
});

const mapDispatchToProps = {
  pickCards,
  setStage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hand);
