import { connect } from 'react-redux';
import { createService } from '../../actions/service_actions';
import ServiceForm from './service_form';
const msp = (state, ownProps) => ({
    service: {},
    business: ownProps.match.params.businessId
})

const mdp = (dispatch) => ({
    createService: (service) => dispatch(createService(service)),
})

export default connect(msp, mdp)(ServiceForm);