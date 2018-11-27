import React from 'react';


export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilledForm: null,
    };
  }

  getInputPattern(input) {
    switch (input.dataset.inputType) {
      case 'login':
        return (/^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/);
      case 'password':
        return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/);
      case 'repeat-password':
        return new RegExp(this.form.querySelector('[data-input-type=password]').value.trim());
      default:
        console.warn(input);
        return (/^.*$/);
    }
  }

  checkInput(input) {
    let isFilledInput = input.value.trim().search(this.getInputPattern(input)) !== -1;
    input.className = 'login-form__input';
    input.classList.add(isFilledInput ? 'login-form__input--success' : 'login-form__input--wrong');
    return isFilledInput;
  }

  checkForm(e) {
    e.preventDefault();
    const inputs = Array.from(this.form.getElementsByTagName('input'));
    let isFilledForm = inputs.map((input) => {
      return this.checkInput(input);
    }).reduce((prevVal, nextVal) => {
      return prevVal && nextVal;
    });
    this.setState({isFilledForm: isFilledForm});
  }

  clearFormState() {
    this.setState({isFilledForm: null});
  }

  render() {
    let currentFormClass;
    if (this.state.isFilledForm === null) {
      currentFormClass = 'login-form';
    } else if (this.state.isFilledForm) {
      currentFormClass = 'login-form login-form--success';
    } else if (!this.state.isFilledForm) {
      currentFormClass = 'login-form login-form--wrong';
    }

    return (
      <form className={currentFormClass} ref={(node) => {
        this.form = node;
      }} onSubmit={this.checkForm.bind(this)} onChange={(e) => {this.checkInput(e.target)}} noValidate>
        <label className="login-form__label">Email</label>
        <input className="login-form__input" type="email" data-input-type="login"
               onFocus={this.clearFormState.bind(this)} autoComplete="on"/>
        <label className="login-form__label">Password</label>
        <input className="login-form__input" type="password" data-input-type="password"
               onFocus={this.clearFormState.bind(this)} autoComplete="on"/>
        <label className="login-form__label">Repeat password</label>
        <button className="login-form__btn" type="submit">Log In</button>
      </form>
    );
  }
}
