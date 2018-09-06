import React from 'react';

class Greeting extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        if (this.props.currentUser.firstname)  {
            return (
                <div className="auth">
                    <h2 className="logo">getTheBest</h2>
                    <div className="buttons">
                        <h2 className="demouser">Hi, {this.props.currentUser.firstname}</h2>
                        <button className="login" onClick={() => this.props.logout()}>Log out</button>
                    <button className="login" onClick={() => this.props.openModal('RegisterBusiness')}>Register your business</button>
                    </div>
                </div>
            )
    } else {
            return (
                <div className="auth">
                    <h2 className="logo">getTheBest</h2>
                    <div className="buttons">
                        <button className="login" onClick={() => this.props.openModal('login')}>Login</button>
                        <button className="login" onClick={() => this.props.openModal('signup')}>Signup</button>
                    </div>
                </div>
            )
        }
    }
}
export default Greeting;