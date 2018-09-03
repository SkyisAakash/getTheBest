import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import CategoriesIndexContainer from './category/category_index_container';
import Video from './video';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Footer } from './footer';
const Root = () => (
    <div>
        <GreetingContainer />
        <AuthRoute exact path='/' component={Video} />
        <Modal />
        <Route exact path='/services'  />
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <ProtectedRoute exact path='/categories' component={CategoriesIndexContainer} />
        <Footer />

    </div>
)

export default Root;