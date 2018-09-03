
import { connect } from 'react-redux';
import { createBusiness } from '../../actions/business_actions';
import BusinessForm from './business_form';
import { closeModal } from '../../actions/modal_actions';

const msp = state => {
    return {
        businesses: state.entities.businesses,
        formType: 'Register new business',
        errors: state.errors.business
    }
}

const mdp = dispatch => {
    return {
        newBusiness: () => dispatch(createBusiness()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(BusinessForm);