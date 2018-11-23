import React from 'react';
import {RegisterForm} from '../trash/register-form/app';
import {Form} from '../form/app';


class GreetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFormType: 'login',
    };
  }

  switchFormType(e) {
    this.setState({selectedFormType: e.target.dataset.id});
  }

  render() {
    const {selectedFormType} = this.state;
    let currentForm = selectedFormType === 'login' ? <Form/> : <RegisterForm/>;

    return (
      <div className="greeting-form">
        <h1 className="greeting-form__header">
          Choose!
        </h1>
        <form className="greeting-form__tabs-wrapper" onChange={this.switchFormType.bind(this)}>
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