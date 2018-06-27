import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="header__login">
      <a href="#" className="icon icon-facebook">
        <i className="fab fa-facebook-square fa-lg"></i>
      </a>
      <a href="#" className="icon icon-google">
        <i className="fab fa-google-plus-square fa-lg"></i>
      </a>
      <a className="login-link" href="#">Log in</a>
    </div>
  );
};

export default Login;