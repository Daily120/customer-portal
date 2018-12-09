import React from 'react';
import './LoginForm.css';

const handleLogin = (app) => {
    const email = document.getElementById('emailField').value;
    const password = document.getElementById('passwordField').value;

    fetch('http://localhost:3001/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(res => res.json())
    .then(data => {
        if(data.token) {
            localStorage.setItem('token', data.token);
            app.setState(data);
        } else {
            alert('Wrong Credentials!')
        }
    })
}

const LoginForm = ( {app} ) => {

    return (
            <div id="loginForm">
                <div className="div-under-loginForm">
                    <label className="label" htmlFor="emailField">Email</label>
                    <input type="email" name="emailField" id="emailField"/>
                    <label className="label" htmlFor="passwordField">Password</label>
                    <input type="password" name="passwordField" id="passwordField"/>
                    <input onClick={() => handleLogin(app)} type="submit" value="Login" className="submitButton"/>
                </div>
            </div>
    )
}
export default LoginForm;