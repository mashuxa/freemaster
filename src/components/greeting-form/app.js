import React from 'react';
import {RegisterForm} from '../register-form/app';
import {LoginForm} from '../login-form/app';

// this.props.name
class GreetingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFormType: 'registration'
    };
  }

  setFormType(selectedFormType){
    // this.setState({selectedFormType});
    // change
  }

  render() {
    const {selectedFormType} = this.state;
    let currentForm = selectedFormType === 'login' ? <LoginForm/> : <RegisterForm/>;

    return (
      <div className="greeting-form">
        <h1 className="greeting-form__header">
          Choose!
        </h1>
        <div className="greeting-form__tabs-wrapper">
          <input type="radio" name={'greeting-form__tabs'} className="greeting-form__tab greeting-form__tab--login"
                 defaultChecked/>
          <input type="radio" name={'greeting-form__tabs'}
                 className="greeting-form__tab greeting-form__tab--registration"/>
        </div>
        {currentForm}
      </div>
    );
  }
}

export {GreetingForm};