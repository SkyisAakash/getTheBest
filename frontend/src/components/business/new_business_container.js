
import { connect } from 'react-redux';
import createBusiness from '../../actions/business_actions';
import BusinessForm from './business_form';

const msp = state => {
    return {
        businesses: state.entities.businesses
    }
}

const mdp = dispatch => {
    return {
        newBusiness: () => dispatch(createBusiness())
    }
}

export default connect(msp, mdp)(BusinessForm);