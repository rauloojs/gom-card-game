import { connect } from 'react-redux'
// import { pickCards, setStage } from '../actions'
import Pile from '../components/Pile'
import { getTopFromPile } from '../selectors'


const mapStateToProps = (state) => ({
  pile: state.game.pile,
  top: getTopFromPile(state),
  stage: state.game.stage,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Pile);
