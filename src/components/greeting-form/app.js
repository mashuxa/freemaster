import React from 'react';
import {RegisterForm} from '../register-form/app';
import {LoginForm} from '../login-form/app';

// this.props.name
class GreetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFormType: 'login',
    };
    this.switchFormType = this.switchFormType.bind(this);
  }

  switchFormType(e) {
    this.setState({selectedFormType: e.target.dataset.id});
  }

  render() {
    const {selectedFormType} = this.state;
    let currentForm = selectedFormType === 'login' ? <LoginForm/> : <RegisterForm/>;

    return (
      <div className="greeting-form">
        <h1 className="greeting-form__header">
          Choose!
        </h1>
        <form className="greeting-form__tabs-wrapper" onChange={this.switchFormType}>
          <input id="login" data-id="login" type="radio" name={'greetingFormTabs'}
                 className="greeting-form__tab greeting-form__tab--login"
                 defaultChecked={this.state.selectedFormType === 'login'}/>
          <input id="registration" data-id="registration" type="radio" name={'greetingFormTabs'}
                 className="greeting-form__tab greeting-form__tab--registration"
                 defaultChecked={this.state.selectedFormType === 'registration'}/>
        </form>
        {currentForm}
      </div>
    );
  }
}

export {GreetingForm};