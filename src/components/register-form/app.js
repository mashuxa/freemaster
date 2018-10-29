import React from 'react';


export class RegisterForm extends React.Component {
  render() {
    return (
      <form className="register-form">

        <input type="radio" className="register-form__user-type register-form__user-type--client" name='registerFormUserType'/>
        <input type="radio" className="register-form__user-type register-form__user-type--master" name='registerFormUserType'/>

        <select name="" id="registerFormMasterSpecialization" multiple>
          <option value="0">Manicurist</option>
          <option value="0">Hairdresser</option>
        </select>

        <label className="register-form__label">Login or Email</label>
        <input type="text" className="register-form__input"/>

        <label className="register-form__label">Password</label>
        <input type="password" className="register-form__input"/>

        <label className="register-form__label">Repeat password</label>
        <input type="password" className="register-form__input"/>
      </form>
    );
  }
}
