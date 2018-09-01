import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Modal from './modal/modal';
const Root = () => (
    <div>
        <h1>getThebest</h1>
        <GreetingContainer />
        <Modal />
        <Route exact path='/services'  />
        <Route exact path='/signup' component={SignUpFormContainer} />
        <Route exact path='/login' component={LoginFormContainer} />
        <Route exact path='/services' component={ServiceIndexContainer} />
    </div>
)

export default Root;