import React from 'react';
// (?=.*\d)          // should contain at least one digit
// (?=.*[a-z])       // should contain at least one lower case
// (?=.*[A-Z])       // should contain at least one upper case
// [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.checkForm = this.checkForm.bind(this);
    this.state = {
      isFilledForm: null,
    };
  }

  componentDidMount(){
// ???????
  }

  cleanFormStyle(form){
    form.classList.remove('login-form--success');
    form.classList.remove('login-form--wrong');
    this.setState({isFilledForm: true});
    console.log(this.state.isFilledForm);
  }
  cleanInputStyle(input){
    input.classList.remove('login-form__input--success');
    input.classList.remove('login-form__input--wrong');
  }

  checkForm(e) {
    console.log(this.state.isFilledForm);
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

    if (this.state.isFilledForm) {
      form.classList.add('login-form--success');
    } else {
      form.classList.add('login-form--wrong');
    }
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.checkForm}>
        <label className="login-form__label">Login or Email</label>
        <input type="email" className="login-form__input" data-input-type="login" autoComplete="on"/>
        <label className="login-form__label">Password</label>
        <input type="password" className="login-form__input" data-input-type="password" autoComplete="on"/>
        <button className="login-form__btn" type="submit">Log In</button>
      </form>
    );
  }
}
