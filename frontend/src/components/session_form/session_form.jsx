import React from 'react';
import { demoInfo } from './demoInfo';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            password2: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.typeEmail = this.typeEmail.bind(this);
        this.typePassword = this.typePassword.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.otherlink = this.otherlink.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        this.props.removeErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleDemo() {
        this.typeEmail()
        setTimeout(() => this.typePassword(), 100*demoInfo.email.length)
        setTimeout(() => this.props.processForm(this.state), 100*(demoInfo.password.length + demoInfo.email.length + 1))
    }

    typeEmail() {
        let em = demoInfo.email;
        const timer = () => {
            return setTimeout(() => {
            this.setState({
                "email": this.state.email + em[0]
            })
            em = em.slice(1)
            if(em.length > 0) timer();
        }, 100)
        }
        timer();
    }

    typePassword() {
        let em = demoInfo.password;
        const timer = () => {
            return setTimeout(() => {
                this.setState({
                    "password": this.state.password + em[0]
                })
                em = em.slice(1)
                if (em.length > 0) timer();
            }, 100)
        }
        timer();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(() => {
                if (this.props.errors.length === 0)
                this.props.closeModal()})
    }

    nameBlock() {
        if (this.props.formType === 'signup'){
        return (
            <div>
                fname <input type = "text"
                              value = { this.state.firstname }
                              onChange = { this.update('firstname') } />
                { this.props.errors.firstname }
                lname <input type = "text"
                             value = { this.state.lastnamename }
                             onChange = { this.update('lastname') } />
                { this.props.errors.lastname }
            </div>
        )}
    }

    password2Block() {
        if (this.props.formType === 'signup') {
            return (
                <div>
                    p2 <input type = "text"
                        value = { this.state.password2 }
                        onChange = { this.update('password2') } />
                    { this.props.errors.password2 }
                </div>
            )
        }
    }

    otherlink() {
        return (
            <p onClick={() => this.toggleModal()}>{this.props.navLink}</p>
        )
    }

    toggleModal() {
        this.props.closeModal()
        this.props.openModal(this.props.navLink)
    }

    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    please {this.props.formType} or {this.otherlink()}
                    {this.nameBlock()}
                    email<input type="text"
                        value={this.state.email}
                        onChange={this.update('email')} />
                    {this.props.errors.email}
                    p1<input type="text"
                        value={this.state.password}
                        onChange={this.update('password')} />
                    {this.props.errors.password}
                    {this.password2Block()}
                    <input type="submit" value={this.props.formType}/>
                    <input type="button" onClick={() => this.handleDemo()} value="demo"/>
                </form>
            </div>
        )
    }

}

export default SessionForm;
