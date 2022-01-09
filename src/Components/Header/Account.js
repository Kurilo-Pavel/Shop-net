import React, {Component} from 'react';


export default class Account extends Component {




  render() {
    const {onRegistClick, handleLogin, handlePassword, handleCheck} = this.props;
    return (
      <form className="text-xs p-2 col-span-1">

        <div className="m-2">
          <label className="m-2">Login</label>
          <input
            type="text"
            className="border-double border-4 border-light-blue-500"
            onChange={handleLogin}
          />
        </div>

        <div className="m-2">
          <label className="m-2">Password</label>
          <input
            type="password"
            className="border-double border-4 border-light-blue-500"
            onChange={handlePassword}
          />
        </div>

        <button
          type="button"
          className="bg-gray-300 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer"
        onClick={handleCheck}
        >
          Sign in
        </button>
        <button
          type="button"
          className="
        bg-gray-300 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer right-0"
          onClick={onRegistClick}
        >
          Registration
        </button>
      </form>
    );
  }
}