import React from 'react';


class greetingForm extends React.Component {
  render() {
    return `<h1>Hello, ${this.props.name}</h1>`;
  }
}