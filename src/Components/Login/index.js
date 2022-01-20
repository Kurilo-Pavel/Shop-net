import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import {Navigate} from 'react-router-dom';

class Index extends Component {
  render() {
    const {currentUser} = this.props;
    return (<div className="absolute bg-amber-300 w-1/4 h-1/4">
      {currentUser ? <Navigate to="/Shop_net"/> : <LoginForm/>}
    </div>);
  }
}

export default Index;