import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cloudinaryOptions from '../../private/cloudinary';
import { getUser } from '../../util/session_api_util';


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
        return <div>
            <h1> Welcome to your dashboard {this.props.user.firstname} </h1>
            <img src={this.props.user.image}/>
            <img onClick={(e) => this.upload(e)} src="https://i.postimg.cc/4xw2H7mh/edit_button.png" className="editButton" />
            <input type="text" value={this.state.firstname} onChange={this.update('firstname')}/>
            <input type="text" value={this.state.lastname} onChange={this.update('lastname')}/>
            <input type="email" value={this.state.email} onChange={this.update('email')}/>
            <button onClick={() => this.props.updateUser(this.state)} value="Update Credentials"/>   
        </div>
    }
}

const msp = state => ({
    user: state.session
})

const mdp = dispatch => ({
    updateUser: (user) => dispatch(getUser(user))
})


export default connect(msp, mdp)(withRouter(User));
