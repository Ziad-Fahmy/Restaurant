import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './SignUp.css'

const SignUp = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
    alert("Passwords don't match");
    return;
    }

    console.log('Submitting sign-up form...', email, password);

    setEmail('');
    setPassword('');
    setConfirmPassword('');
};

return (
    <div className='all'>
    <div className="container mt-5 signUpContainer" >
    <h1 className="text-center mb-4">Sign Up</h1>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">
            Email address
        </label>
        <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="form-label">
            Password
        </label>
        <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
        <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
        </label>
        <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
        />
        </div>
        <button type="submit" className="btn btn-primary">
        Sign Up
        </button>
    </form>
    </div>
    </div>
);
};

export default SignUp;
