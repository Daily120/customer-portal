import React from 'react';
import './LoginPageHolder.css';
import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';

const LoginPageHolder = () => {

    return (
        <div id="loginPageHolder">
            <Header />
            <LoginForm />
        </div>
    )
}

export default LoginPageHolder;