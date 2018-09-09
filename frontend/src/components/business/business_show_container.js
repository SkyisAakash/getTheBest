import { connect } from 'react-redux';
import { getBusiness, updateBusiness, saveBusinessId, removeBusiness } from '../../actions/business_actions';
import BusinessShow from './business_show';
import { openModal } from '../../actions/modal_actions';
const msp = (state, ownProps) => {
    return {
        business: state.entities.businesses[ownProps.match.params.businessId],
    }
}

const mdp = (dispatch, ownProps) => {
    return { 
        saveBusinessId: () => dispatch(saveBusinessId(ownProps.match.params.businessId)),
        openModal: (modal) => dispatch(openModal(modal)),
        updateBusiness: (business) => dispatch(updateBusiness(business)),
        getBusiness: () => dispatch(getBusiness(ownProps.match.params.businessId)),
        deleteBusiness: () => dispatch(removeBusiness(ownProps.match.params.businessId)),
    }
}

export default connect(msp, mdp)(BusinessShow);
