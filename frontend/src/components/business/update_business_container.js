import { connect } from 'react-redux';
import business_form from './business_form';
import { closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../util/session_api_util';
import { updateBusiness } from '../../actions/business_actions';

const mapStateToProps = state => {
    return {
        business: state.entities.businesses[state.ui.temp],
        formType: 'Update',
        errors: state.errors.business,
        owner: state.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (business, id) => dispatch(updateBusiness(business, id)),
        closeModal: (business) => dispatch(closeModal(business)),
        removeErrors: () => dispatch(removeErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(business_form)