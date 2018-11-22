import React from 'react';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilledForm: null,
    };
  }

  cleanFormStyle(form) {
    form.classList.remove('login-form--success');
    form.classList.remove('login-form--wrong');
    this.setState({isFilledForm: true});
  }

  cleanInputStyle(input) {
    input.classList.remove('login-form__input--success');
    input.classList.remove('login-form__input--wrong');
  }

  checkForm(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = Array.from(form.getElementsByClassName('login-form__input'));
    this.cleanFormStyle(form);

    inputs.forEach((input) => {
      this.cleanInputStyle(input);
      let pattern;
      switch (input.dataset.inputType) {
        case 'login':
          pattern = /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;
          break;
        case 'password':
          pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/;
          break;
        default:
          console.log('default');
      }
      const inputValue = input.value;

      if (inputValue.search(pattern) === -1) {
        input.classList.add('login-form__input--wrong');
        this.setState({isFilledForm: false});
      } else {
        input.classList.add('login-form__input--success');
      }
    });
  }

  render() {
    let currentFormClass;
    console.log(this.state.isFilledForm);
    console.log(this.state.isFilledForm);
    if (this.state.isFilledForm === null ) {
      currentFormClass = 'login-form';
    } else if (this.state.isFilledForm) {
      currentFormClass = 'login-form login-form--success';
    } else if (!this.state.isFilledForm) {
      currentFormClass = 'login-form login-form--wrong';
    }

    return (
      <form className={currentFormClass} onSubmit={this.checkForm.bind(this)}>
        <label className="login-form__label">Login or Email</label>
        <input type="email" className="login-form__input" data-input-type="login" autoComplete="on" formNoValidate />
        <label className="login-form__label">Password</label>
        <input type="password" className="login-form__input" data-input-type="password" autoComplete="on"/>
        <button className="login-form__btn" type="submit">Log In</button>
      </form>
    );
  }
}
