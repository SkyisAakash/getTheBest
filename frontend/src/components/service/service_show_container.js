import { connect } from 'react-redux';
import { getService, deleteService } from '../../actions/service_actions';
import { getReviews } from  '../../actions/review_actions';
import ServiceShow from './service_show';
import { filterReviews } from '../reviews/filterReviews';
import { getCategoryFilter, removeAllCategoryFilters } from '../../actions/filter_actions';
import { showFixedMsg } from '../../actions/msg_actions';

const msp = (state, ownProps) => {
    return {
        business: Object.values(state.entities.businesses)[0],
        service: state.entities.services[ownProps.match.params.serviceId],
        reviews: filterReviews(state.entities.reviews, ownProps.match.params.serviceId)
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        remAllCatFilter: () => dispatch(removeAllCategoryFilters()),
        getCatFilter: (category) => dispatch(getCategoryFilter(category)),
        getReviews: () => dispatch(getReviews({type: 'service', id:ownProps.match.params.serviceId})),
        fetchService: () => dispatch(getService(ownProps.match.params.serviceId)),
        delete: () => dispatch(deleteService(ownProps.match.params.serviceId)),
        showMsg: (msg) => dispatch(showFixedMsg(msg))
    }
}

export default connect(msp, mdp)(ServiceShow);