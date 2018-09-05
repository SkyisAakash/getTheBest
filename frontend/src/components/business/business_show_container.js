import { connect } from 'react-redux';
import { getBusiness } from '../../actions/business_actions';
import GroupShow from './business_show';

const msp = (state, ownProps) => {
    business: state.entities.businesses[ownProps.match.params.businssId]
}

const mdp = dispatch => {
    getBusiness: () => dispatch(getBusiness())
}

export default connect(msp, mdp)(GroupShow);
