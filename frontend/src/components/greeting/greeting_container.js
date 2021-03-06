import { connect } from 'react-redux';
import { logoutUser } from '../../util/session_api_util';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({session}) => {
    return {
        currentUser: session
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);