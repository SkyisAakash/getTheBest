import { connect } from 'react-redux';
import { getService, deleteService } from '../../actions/service_actions';
import ServiceShow from './service_show';
import { filterReviews } from '../reviews/filterReviews';
const msp = (state, ownProps) => {
    return {
        service: state.entities.services[ownProps.match.params.serviceId],
        reviews: filterReviews(state.entities.reviews, ownProps.match.params.serviceId)
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchService: () => dispatch(getService(ownProps.match.params.serviceId)),
        delete: () => dispatch(deleteService(ownProps.match.params.serviceId)),
    }
}

export default connect(msp, mdp)(ServiceShow);