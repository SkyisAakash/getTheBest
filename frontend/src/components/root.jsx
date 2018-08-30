import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Switch, Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';

const Root = () => (
    <div>
        <h1>getThebest</h1>
        <GreetingContainer />
        <Route exact path='/signup' component={SignUpFormContainer} />
    </div>
)

export default Root;