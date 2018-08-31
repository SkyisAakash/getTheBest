import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentUser.firstname)  {
            return (
                <div>
                    <h2>hi, {this.props.currentUser.firstname}</h2>
                    <button onClick={this.props.logout()}>Log out</button>
                </div>
            )
    } else {
            return (
                <div>
                    <p onClick={() => this.props.openModal('login')}>Login</p>
                    <p onClick={() => this.props.openModal('signup')}>Signup</p>
                </div>
            )
        }
    }
}
export default Greeting;