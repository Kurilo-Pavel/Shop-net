import React, {Component} from 'react';
import SignUpForm from "./SignUpForm";
import {Navigate} from 'react-router-dom';

export default class SignUp extends Component {
  render() {
    const {currentUser} = this.props
    return (
      <div className=" absolute bg-blue-400">
        {currentUser ? <Navigate to="/Shop_net"/> : <SignUpForm/>}
      </div>
    );
  }
}

