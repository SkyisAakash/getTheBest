import React from 'react';
import { demoInfo } from './demoInfo';
import { withRouter } from 'react-router-dom';
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


    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(() => {
                if (this.props.errors.length === 0) {
                    this.props.closeModal()
                    this.props.history.push('/categories');
                }
            })
    }

    handleDemo(e) {
        e.preventDefault();
        if(this.props.formType === 'login')  {
            this.typeEmail()
            setTimeout(() => this.typePassword(), 80*(demoInfo.email.length+1))
            setTimeout(() => {
                this.props.closeModal();
                this.props.processForm(this.state)
                    .then(() => this.props.history.push('/categories'))
            }, 80*(demoInfo.password.length + demoInfo.email.length + 3))
        } else {
            this.props.closeModal();
            this.props.loginUser(demoInfo)
                .then(() => this.props.history.push('/categories'));
        }
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
        }, 80)
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
            }, 80)
        }
        timer();
    }

    nameBlock() {
        if (this.props.formType === 'signup'){
        return (
            <section className="loginform">
                <input type = "text"
                              value = { this.state.firstname }
                              onChange = { this.update('firstname') } 
                              placeholder="Enter your firstname"
                              className="inputField"/>
                <p className="loginerrors">{ this.props.errors.firstname }</p>
                <input type = "text"
                             value = { this.state.lastnamename }
                             onChange = { this.update('lastname') } 
                             placeholder="Enter your lastname (optional)"
                             className="inputField"/>
                <p className="loginerrors">{ this.props.errors.lastname }</p>
            </section>
        )}
    }

    password2Block() {
        if (this.props.formType === 'signup') {
            return (
                <div className="loginform">
                    <input type = "password"
                        value = { this.state.password2 }
                        onChange = { this.update('password2') } 
                        placeholder="Retype your password"
                        className="inputField"/>
                    <p className="loginerrors">{ this.props.errors.password2 }</p>
                </div>
            )
        }
    }

    otherlink() {
            if (this.props.formType === 'signup') {
                return (
                    <div className="optionblock">
                        <p className="optionallogin">Already a member? </p>
                        <button className="optionallogin" id="linktoform" onClick={() => this.toggleModal()}>{this.props.navLink} here</button>
                    </div>
                )

            } else {
                return (
                <div className="optionblock">
                    <p className="optionallogin">Not registered yet?</p>
                        <button className="optionallogin" id="linktoform" onClick={() => this.toggleModal()}>{this.props.navLink} here</button>
                </div>
                )
            }
    }

    toggleModal() {
        return Promise.all([
            this.props.closeModal(),
         this.props.openModal(this.props.navLink)
        ])
    }

    render() {
        return (
            <div>
                <form className="loginform">
                    <h2 className="sessionformtitle">{this.props.formType}</h2> 
                    {this.nameBlock()}
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')} 
                        placeholder="Enter your email"
                        className="inputField"/>
                    <p className="loginerrors">{this.props.errors.email}</p>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')} 
                        placeholder="Enter your password"
                        className="inputField"/>
                    <p className="loginerrors">{this.props.errors.password}</p>
                    {this.password2Block()}
                    <button className="loginButton" onClick={(e) => this.handleSubmit(e)}>{this.props.formType}</button>
                    <button className="loginButton" onClick={(e) => this.handleDemo(e)}>Demo</button>
                    <button className="loginButton" onClick={() => this.props.closeModal()}>cancel</button>
                    {this.otherlink()}
                </form>
            </div>
        )
    }

}

export default withRouter(SessionForm);
