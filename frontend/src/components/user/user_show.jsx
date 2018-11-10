import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cloudinaryOptions from '../../private/cloudinary';
import { getUser } from '../../util/session_api_util';
import { showFixedMsg } from '../../actions/msg_actions';
import ServiceIndexContainer from '../service/service_index_container';

import './user.css'

class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.user
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    addImage(data) {
        this.setState({
            image: data
        }, () => {
            this.myWidget.close()
            this.updateUser(this.state)});
    }

    upload(e) {
        e.preventDefault();
        e.stopPropagation();
        this.myWidget = window.cloudinary.openUploadWidget(cloudinaryOptions, (error, images) => {
            if (images.event === "success") {
                this.addImage(images.info.secure_url)
            }
        })
    }

    render() {
        if (!this.props.user.firstname)return null;
        return <div>
            <h1 className="userwelcome"> Welcome to your dashboard {this.props.user.firstname} </h1>
            <div className="userProfile">
                <div className="imageBox">
                    <img src={this.props.user.image} className="userPagePic"/>
                    <p onClick={(e) => this.upload(e)} className="changeImage"> Change Image </p>
                </div>
                <div className="infoBox">
                    <div className="firstRow">
                        <p className="fieldName"> Firstname </p>
                        <input type="text" value={this.state.firstname} onChange={this.update('firstname')} className="updateFirstname"/>
                    </div>
                    <div className="secondRow">
                        <p className="fieldName"> Lastname </p>
                        <input type="text" value={this.state.lastname} onChange={this.update('lastname')} className="updateFirstname"/>
                    </div>
                    <button id="updateUser" className="loginButton" onClick={() => this.props.updateUser(this.state).then(() => this.props.showUpdateMsg())}>Update Credentials</button>   
                </div>
            </div>
            <h1 className="sectionTitle"> Manage your businesses </h1>
            <ServiceIndexContainer userServices={this.state.businesses} isBusiness="true"/>
            <h1 className="sectionTitle"> Manage your services </h1>
            <ServiceIndexContainer userServices={this.state.services}/>
        </div>
    }
}

const msp = state => ({
    user: state.session
})

const mdp = dispatch => ({
    updateUser: (user) => dispatch(getUser(user)),
    showUpdateMsg: () => dispatch(showFixedMsg("Successfully updated profile"))
})


export default connect(msp, mdp)(withRouter(User));
