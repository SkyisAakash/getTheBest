import { connect } from 'react-redux';
import { getService, deleteService } from '../../actions/service_actions';
import { getReviews } from  '../../actions/review_actions';
import ServiceShow from './service_show';
import { filterReviews } from '../reviews/filterReviews';
import { getCategoryFilter } from '../../actions/filter_actions';

const msp = (state, ownProps) => {
    return {
        service: state.entities.services[ownProps.match.params.serviceId],
        reviews: filterReviews(state.entities.reviews, ownProps.match.params.serviceId)
    }
}

const mdp = (state, dispatch, ownProps) => {
    return {
        getCatFilter: () => dispatch(getCategoryFilter(state.entities.services[ownProps.match.params.serviceId].category)),
        getReviews: () => dispatch(getReviews({type: 'service', id:ownProps.match.params.serviceId})),
        fetchService: () => dispatch(getService(ownProps.match.params.serviceId)),
        delete: () => dispatch(deleteService(ownProps.match.params.serviceId)),
    }
}

export default connect(msp, mdp)(ServiceShow);