import React from 'react';


export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilledForm: null,
    };
  }

  // checkInput(input) {
  //
  // }
  componentDidMount(prevProps, prevState, prevContext) {
    console.log(this.form);
  }

  checkForm(e) {
    e.preventDefault();
    const inputs = Array.from(this.form.getElementsByTagName('input'));
    this.setState({isFilledForm: null});

    inputs.forEach((input) => {
      input.classList.remove('login-form__input--success');
      input.classList.remove('login-form__input--wrong');
      let pattern;
      switch (input.dataset.inputType) {
        case 'login':
          pattern = /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;
          break;
        case 'password':
          pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/;
          break;
        default:
          console.warn('Pattern undefined');
      }

      if (input.value.trim().search(pattern) === -1) {
        input.classList.add('login-form__input--wrong');
        this.setState({isFilledForm: false});
      } else {
        input.classList.add('login-form__input--success');
      }
    });
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
      <form className={currentFormClass}
            ref={(node) => {this.form = node;}}
            onSubmit={this.checkForm.bind(this)}>
        <label className="login-form__label">Login or Email</label>
        <input type="email" className="login-form__input" data-input-type="login" autoComplete="on" formNoValidate/>
        <label className="login-form__label">Password</label>
        <input type="password" className="login-form__input" data-input-type="password" autoComplete="on"/>
        <button className="login-form__btn" type="submit">Log In</button>
      </form>
    );
  }
}
