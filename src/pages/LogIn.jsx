import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting log-in form...', email, password);

    setEmail('');
    setPassword('');
    };

    return (
    <div className="login-container">
    <h1 className="login-heading">Welcome Back!</h1>
    <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-input">
        <label>Email address</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </div>
        <div className="login-input">
        <label>Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
        <button type="submit" className="login-button">
        Log In
        </button>
        <a href="/sign-up" className="forgot-password-link">
        <span className="dont-have-acount">You don't have account,</span>
        <br></br>Sign up?
        </a>
    </form>
    </div>
);
};

export default LogIn;
