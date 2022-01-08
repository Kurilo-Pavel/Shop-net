import React, {Component} from 'react';


export default class Account extends Component {

  render() {
    const {onRegistClick} = this.props;
    return (
      <form className="text-xs p-2 col-span-1">

        <div className="m-2">
          <label className="m-2">Login</label>
          <input
            type="text"
            className="border-double border-4 border-light-blue-500"
          />
        </div>

        <div className="m-2">
          <label className="m-2">Password</label>
          <input
            type="password"
            className="border-double border-4 border-light-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-300 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer"
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