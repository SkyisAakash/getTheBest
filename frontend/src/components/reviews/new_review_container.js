import {connect} from 'react-redux';
import ReviewForm from './review_form';
import {removeErrors} from '../../util/session_api_util';
import { createReview } from '../../actions/review_actions';

const msp = (state, props) => ({
    // business: ownProps.match.params.business,
    reviewer: state.session.firstname,
    formType: 'Register',
    review: {},
    errors: state.errors.review
})

const mdp = (dispatch) => ({
    removeErrors: () => dispatch(removeErrors()),
    processForm: (review) => dispatch(createReview(review)),
    getReview: () => {}
})

export default connect(msp, mdp)(ReviewForm);