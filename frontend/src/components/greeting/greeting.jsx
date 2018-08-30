import React from 'react';
import { Link } from 'react-router-dom';
const Greeting = ({ currentUser, logout}) => {
    const sessionLinks = () => (
        <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        </div>
    );
    const personalGreeting = () => (
        <div>
        <h2>hi, {currentUser.firstname}</h2>
        <button onClick={logout}>Log out</button>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks()
}

export default Greeting;