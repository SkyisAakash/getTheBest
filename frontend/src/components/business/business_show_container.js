import { connect } from 'react-redux';
import { getBusiness } from '../../actions/business_actions';
import BusinessShow from './business_show';

const msp = (state, ownProps) => {
    return {
        business: state.entities.businesses[ownProps.match.params.businessId]
    }
}

const mdp = (dispatch, ownProps) => {
    return { 
        getBusiness: () => dispatch(getBusiness(ownProps.match.params.businessId))
    }
}

export default connect(msp, mdp)(BusinessShow);
