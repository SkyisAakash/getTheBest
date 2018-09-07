import { connect } from react-redux;
import { createService } from '../../actions/service_actions';
import ServiceForm from './service_form';
const msp = state => ({
    service: {}
})

const mdp = dispatch => ({
    createService: (service) => dispatch(createService(service))
})

export default connect(msp, mdp)(ServiceForm);