import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser, removeErrors } from '../../util/session_api_util';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup"> Signup instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(loginUser(user)),
        removeErrors: () => dispatch(removeErrors()),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);