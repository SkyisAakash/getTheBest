import { connect } from 'react-redux';
import { getService } from '../../actions/service_actions';
import ServiceShow from './service_show';
const msp = (state, ownProps) => {
    return {
        service: state.entities.services[ownProps.match.params.serviceId],
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchService: () => dispatch(getService(ownProps.match.params.serviceId))
    }
}

export default connect(msp, mdp)(ServiceShow);