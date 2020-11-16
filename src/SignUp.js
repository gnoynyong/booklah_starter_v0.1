import React from 'react';
import './SignUp.css';
import {Link} from "react-router-dom";

function SignUp() {
    return (
    <div className="signup-page">
        <Link to="/"> 
        <h2>Booklah!</h2>
        </Link>
        <h3>Sign Up</h3>
        <div className="form-sign-up">
            <form className="s-form">
            <label for="Name">User name</label>
            <input type="text" placeholder="Name"></input>
            <label for="email">Email</label>
            <input type="email" placeholder="email"></input>
            <label for="password">Password</label>
            <input type="password"></input>
            <label for="password">Confirm your password</label>
            <input type="password"></input>
            <input type="submit" value="Submit"></input>
            </form>
        </div>
    </div>
    )
}

export default SignUp
