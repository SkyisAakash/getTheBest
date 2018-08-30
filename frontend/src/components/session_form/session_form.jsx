import React from 'react';

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
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                    {error}
                    </li>
                ))}
                </ul>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <input type="text"
                           value={this.state.firstname}
                           onChange={this.update('firstname')}/>
                    <input type="text"
                        value={this.state.firstname}
                        onChange={this.update('lastname')} />
                    <input type="text"
                        value={this.state.firstname}
                        onChange={this.update('email')} />
                    <input type="text"
                        value={this.state.firstname}
                        onChange={this.update('password')} />
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }

}

export default SessionForm;
