import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';

function Modal({modal}) {
    if(!modal){
        return null;
    }
    let component;
    if (modal === 'login') {
        component = <LoginFormContainer />
    } else if (modal === 'signup') {
        component = <SignUpFormContainer />
    }

    return(
        <div className="modal-baclground">
            <div className="modal-child">
                {component}
            </div>
        </div>
    );
}

    const msp = state => {
        return {
            modal: state.ui.modal
        };
    };

    const mdp = dispatch => {
        return {
            closeModal: () => dispatch(closeModal())
        }
    };

    export default connect(msp, mdp)(Modal);
