import { connect } from 'react-redux'
import { putCard, playCard } from '../actions'
import Card from '../components/Card'
import { getTopFromPile } from '../selectors'


const mapStateToProps = (state) => ({
  stage: state.game.stage,
  top: getTopFromPile(state),
});

const mapDispatchToProps = {
  putCard,
  playCard
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
