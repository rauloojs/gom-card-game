import { connect } from 'react-redux'
import { putCard } from '../actions'
import Card from '../components/Card'
import { getCurrentPlayerHand } from '../selectors'


const mapStateToProps = (state) => ({
  stage: state.game.stage,
});

const mapDispatchToProps = {
  putCard
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
