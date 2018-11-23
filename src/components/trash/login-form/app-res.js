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



  componentDidMount(prevProps, prevState, prevContext) {
    // console.log(this.form);
  }

  checkInput(input) {
    input.className = 'login-form__input';
    if (input.value.trim().search(getInputPattern(input.dataset.inputType)) === -1) {
      input.classList.add('login-form__input--wrong');
      return false;
    } else {
      input.classList.add('login-form__input--success');
      return true;
    }
  }

  checkForm(form, isAddInputStyle) {
    const inputs = Array.from(form.getElementsByTagName('input'));
    let isFilledForm = inputs.map((input) => {
      return this.checkInput(input, isAddInputStyle);
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
      }} onSubmit={(e) => {
        e.preventDefault();
        this.checkForm(e.target);
      }} onChange={(e) => {
        e.preventDefault();
        this.checkInput(e.target);

      }} onFocus={
        this.clearFormState.bind(this)
      }>
        <label className="login-form__label">Login or Email</label>
        <input className="login-form__input" type="email" data-input-type="login" autoComplete="on" formNoValidate/>
        <label className="login-form__label">Password</label>
        <input className="login-form__input" type="password" data-input-type="password" autoComplete="on"/>
        <button className="login-form__btn" type="submit">Log In</button>
      </form>
    );
  }
}
