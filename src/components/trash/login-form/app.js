import React from 'react';
import getInputPattern from '../common/getInputPattern.js';


export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilledForm: null,
    };
    this.checkInput.bind(this);
    this.checkForm.bind(this);
  }

  checkInput(input) {
    return input.value.trim().search(getInputPattern(input.dataset.inputType)) !== -1;
  }

  checkForm() {
    const inputs = Array.from(this.form.getElementsByTagName('input'));
    return inputs.map((input) => {
      return this.checkInput(input);
    }).reduce((prevVal, nextVal) => {
      return prevVal && nextVal;
    });
  }

  addInputStyle(input, isFilledInput) {
    input.className = 'login-form__input';
    input.classList.add(isFilledInput ? 'login-form__input--success' : 'login-form__input--wrong');
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
      }} onSubmit={(e) => {
        e.preventDefault();
        this.setState({isFilledForm: this.checkForm()});
      }} onChange={(e) => {
        this.addInputStyle(e.target, this.checkInput(e.target));
      }} noValidate>
        <label className="login-form__label">Login or Email</label>
        <input className="login-form__input" type="email" data-input-type="login"
               onFocus={this.clearFormState.bind(this)} autoComplete="on"/>
        <label className="login-form__label">Password</label>
        <input className="login-form__input" type="password" data-input-type="password"
               onFocus={this.clearFormState.bind(this)} autoComplete="on"/>
        <button className="login-form__btn" type="submit">Log In</button>
      </form>
    );
  }
}
