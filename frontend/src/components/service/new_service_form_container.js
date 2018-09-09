import { connect } from 'react-redux';
import { createService } from '../../actions/service_actions';
import ServiceForm from './service_form';
import { removeErrors } from '../../util/session_api_util';
import { getCategoryTitles } from '../../selectors/category_title_selector';
import { getCategories } from '../../actions/category_actions';

const msp = (state, ownProps) => ({
    service: {},
    business: ownProps.match.params.businessId,
    errors: state.errors.service,
    categories: getCategoryTitles(state.entities.categories)
})

const mdp = (dispatch) => ({
    processForm: (service) => dispatch(createService(service)),
    removeErrors: () => dispatch(removeErrors()),
    getCategories: () => dispatch(getCategories())
})

export default connect(msp, mdp)(ServiceForm);