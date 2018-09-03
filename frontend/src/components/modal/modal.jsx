import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';
import BusinessContainer from '../business/new_business_container';
function Modal({modal, closeModal}) {
    if(!modal){
        return null;
    }
    let component;
    if (modal === 'login') {
        component = <LoginFormContainer />
    } else if (modal === 'signup') {
        component = <SignUpFormContainer />
    } else if (modal === 'business') {
        component = <BusinessContainer />
    }

    return(
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
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
