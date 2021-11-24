import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Link to="/">
            <button className="registerBtn">Register</button>
            </Link>
        </div>
    )
}

export default Register
