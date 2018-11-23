import React from 'react';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilledForm: null,
    };
    this.checkInput.bind(this);
    this.checkForm.bind(this);
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
    return input.value.trim().search(this.getInputPattern(input)) !== -1;
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
    input.className = 'form__input';
    input.classList.add(isFilledInput ? 'form__input--success' : 'form__input--wrong');
  }

  clearFormState() {
    this.setState({isFilledForm: null});
  }

  render() {
    let currentFormClass;
    if (this.state.isFilledForm === null) {
      currentFormClass = 'form';
    } else if (this.state.isFilledForm) {
      currentFormClass = 'form form--success';
    } else if (!this.state.isFilledForm) {
      currentFormClass = 'form form--wrong';
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
        <div className="form__user-type-wrapper">
          <input type="radio" className="form__user-type form__user-type--client"
                 name="registerFormUserType" defaultChecked={true}/>
          <input type="radio" className="form__user-type form__user-type--master"
                 name="registerFormUserType"/>
        </div>
        <div className="form__hint">You will have capability to switch application mode in settings.</div>
        <label className="form__label">Email</label>
        <input className="form__input" type="email" data-input-type="login"
               onFocus={this.clearFormState.bind(this)} autoComplete="on"/>
        <label className="form__label">Password</label>
        <input className="form__input" type="password" data-input-type="password"
               onFocus={this.clearFormState.bind(this)} autoComplete="on"/>
        <label className="form__label">Repeat password</label>
        <input className="form__input" type="password" data-input-type="repeat-password"
               onFocus={this.clearFormState.bind(this)}/>
        <button className="form__btn" type="submit">Log In</button>
      </form>
    );
  }
}
