import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './App.css';
import './bootstrap.min.css';

class AuthorQuiz extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>Author Quiz. This div has been clicked {this.props.clicks} times.</div>
    );
  }
}

export default AuthorQuiz;
