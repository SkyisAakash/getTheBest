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
import BusinessShowContainer from './business/business_show_container';
import NewServiceContainer from './service/new_service_form_container';
import UpdateServiceContainer from './service/update_service_form_container';
import ServiceShowContainer from './service/service_show_container';
const Root = () => (
    <div>
        <GreetingContainer />
        <AuthRoute exact path='/' component={Video} />
        <Modal />
        <Route exact path='/services'  />
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <ProtectedRoute exact path='/categories' component={CategoriesIndexContainer} />
        <ProtectedRoute exact path='/businesses/:businessId' component={BusinessShowContainer} />
        <ProtectedRoute exact path='/businesses/:businessId/services/register' component={NewServiceContainer} />
        <ProtectedRoute exact path='/services/:serviceId' component={ServiceShowContainer} />
        <ProtectedRoute exact path='/services/:serviceId/update' component={UpdateServiceContainer} />
        <Footer />

    </div>
)

export default Root;