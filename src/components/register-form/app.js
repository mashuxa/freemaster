import React from 'react';


export class RegisterForm extends React.Component {
  render() {
    return (
      <form className="register-form">
        <div className="register-form__user-type-wrapper">
          <input type="radio" className="register-form__user-type register-form__user-type--client"
                 name="registerFormUserType" defaultChecked={true}/>
          <input type="radio" className="register-form__user-type register-form__user-type--master"
                 name="registerFormUserType"/>
        </div>
        <label className="register-form__label">Login or Email</label>
        <input type="text" className="register-form__input"/>
        <label className="register-form__label">Password</label>
        <input type="password" className="register-form__input"/>
        <label className="register-form__label">Repeat password</label>
        <input type="password" className="register-form__input"/>
        <button className="register-form__btn" type="submit">Register</button>
      </form>
    );
  }
}
