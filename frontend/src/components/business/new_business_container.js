
import { connect } from 'react-redux';
import { createBusiness } from '../../actions/business_actions';
import BusinessForm from './business_form';
import { closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../util/session_api_util';
const msp = state => {
    return {
        businesses: state.entities.businesses,
        formType: 'Register',
        errors: state.errors.business,
        owner: state.session
    }
}

const mdp = dispatch => {
    return {
        processForm: (business) => dispatch(createBusiness(business)),
        closeModal: () => dispatch(closeModal()),
        removeErrors: () => dispatch(removeErrors())
    }
}

export default connect(msp, mdp)(BusinessForm);