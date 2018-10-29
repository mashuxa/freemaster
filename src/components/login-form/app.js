import React from 'react';

export class LoginForm extends React.Component {
  render() {
    return (
      <form className="login-form">
        <label className="login-form__label">Login or Email</label>
        <input type="text" className="login-form__input"/>
        <label className="login-form__label">Password</label>
        <input type="password" className="login-form__input"/>
      </form>
    );
  }
}
