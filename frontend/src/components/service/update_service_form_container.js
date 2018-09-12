import { connect } from 'react-redux';
import { updateService, getService } from '../../actions/service_actions';
import ServiceForm from './service_form';
import { removeErrors } from '../../util/session_api_util';
import { getCategoryTitles } from '../../selectors/category_title_selector';
import { getCategories } from '../../actions/category_actions';

const msp = (state, ownProps) => {
    return {
        service: state.entities.services[ownProps.match.params.serviceId] || {},
        errors: state.errors.service,
        categories: getCategoryTitles(state.entities.categories),
        formType: 'Update'
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        processForm: (service) => dispatch(updateService(service, ownProps.match.params.serviceId)), 
        removeErrors: () => dispatch(removeErrors()),
        getCategories: () => dispatch(getCategories()),
        getService: () => dispatch(getService(ownProps.match.params.serviceId))
    }
}

export default connect(msp, mdp)(ServiceForm);