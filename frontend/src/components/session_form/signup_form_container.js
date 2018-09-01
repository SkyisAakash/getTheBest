import { connect } from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
import { registerUser, removeErrors, loginUser } from '../../util/session_api_util';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: 'login',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(registerUser(user)),
        removeErrors: () => dispatch(removeErrors()),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        loginUser: (user) => dispatch(loginUser(user)) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);