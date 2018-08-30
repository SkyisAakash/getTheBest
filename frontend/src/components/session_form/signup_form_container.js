import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'reacrt-router-dom';
import { registerUser } from '../../util/session_api_util';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login"> Log in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(registerUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);