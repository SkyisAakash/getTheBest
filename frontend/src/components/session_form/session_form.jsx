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

    // renderErrors() {
    //     return(
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                 {error}
    //                 </li>
    //             ))}
    //             </ul>
    //     )
    // }

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
                    {/* {this.renderErrors()} */}
                    fname<input type="text"
                           value={this.state.firstname}
                           onChange={this.update('firstname')}/>
                    {this.props.errors.firstname}
                    lname<input type="text"
                        value={this.state.lastnamename}
                        onChange={this.update('lastname')} />
                    {this.props.errors.lastname}
                    email<input type="text"
                        value={this.state.email}
                        onChange={this.update('email')} />
                    {this.props.errors.email}
                    p1<input type="text"
                        value={this.state.password}
                        onChange={this.update('password')} />
                    {this.props.errors.password}
                    p2<input type="text"
                        value={this.state.password2}
                        onChange={this.update('password2')} />
                    {this.props.errors.password2}
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }

}

export default SessionForm;
