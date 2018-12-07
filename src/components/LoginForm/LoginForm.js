import React from 'react';
import './LoginForm.css';

const LoginForm = () => {

    return (
            <div id="loginForm">
                <div className="div-under-loginForm">
                    <label className="label" htmlFor="emailField">Email</label>
                    <input type="email" name="emailField" id="emailField"/>
                    <label className="label" htmlFor="passwordField">Password</label>
                    <input type="password" name="passwordField" id="passwordField"/>
                    <input type="submit" value="Login" className="submitButton"/>
                </div>
            </div>
    )
}
export default LoginForm;