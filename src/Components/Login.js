import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Link to="/login" className="bg-blue-300 p-2 mx-4">Login</Link>
        <Link to="/sing-up" className="bg-red-300 p-2">Sin up</Link>
      </div>
    );
  }
}

