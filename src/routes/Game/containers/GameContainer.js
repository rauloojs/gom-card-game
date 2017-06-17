import { connect } from 'react-redux'
import { getFLowsList } from '../actions'
import FlowsList from '../components/FlowsList'


const mapStateToProps = (state) => ({
  flows: state.list.flows
});

const mapDispatchToProps = {
  getFLowsList
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowsList);
