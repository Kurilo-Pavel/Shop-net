import React, {Component} from 'react';
import {isVisible} from "@testing-library/user-event/dist/utils";

export default class Regist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    }
  }


  handleShow = () => {

    this.setState({
      isVisible: false,
    })
  }


  render() {
    const {showRegist} = this.props;
    const {isVisible} = this.state;
    return (
      <div className={`bg-yellow-200 fixed inset-1/5 rounded-xl
      p-4 border-double border-8 border-black ${isVisible ? 'visible' : 'invisible'}`}
           ref={showRegist}
      >
        <div className="text-3xl text-center mb-3">Registration</div>
        <form className="bg-blue-200 p-4 h-full rounded-xl text-xl">

          <div className="mb-2">
            <label className="p-4">First name</label>
            <input type="text"
                   className="focus:outline-none focus:ring focus:ring-black-300 bg-gray-200 hover:bg-white"/>
          </div>

          <div className="mb-2">
            <label className="p-4">Last name</label>
            <input type="text"
                   className="focus:outline-none focus:ring focus:ring-black-300 bg-gray-200 hover:bg-white"/>
          </div>

          <div className="mb-2">
            <label className="p-4">Tel. number</label>
            <input type="text"
                   className="focus:outline-none focus:ring focus:ring-black-300 bg-gray-200 hover:bg-white"/>
          </div>

          <div className="mb-2">
            <label className="p-4">Email</label>
            <input type="text"
                   className="focus:outline-none focus:ring focus:ring-black-300 bg-gray-200 hover:bg-white"/>
          </div>

          <div className="mb-2">
            <label className="p-4">Password</label>
            <input type="password"
                   className="focus:outline-none focus:ring focus:ring-black-300 bg-gray-200 hover:bg-white"/>
          </div>

          <div className="mb-2">
            <label className="p-4">Repeat password</label>
            <input type="password"
                   className="focus:outline-none focus:ring focus:ring-black-300 bg-gray-200 hover:bg-white"/>
          </div>

          <fieldset className="mb-2 pl-4">
            <legend> Gender</legend>
            <span className="">
              <input type="radio" name="gender" className="cursor-pointer"/>
              <label className="p-4">Male</label>
            </span>
            <span className="">
              <input type="radio" name="gender" className="cursor-pointer"/>
              <label className="p-4">Female</label>
            </span>
          </fieldset>

          <div className="mb-2">
            <label className="p-4">Your city</label>
            <input type="text"
                   className="focus:outline-none focus:ring focus:ring-black-300 bg-gray-200 hover:bg-white"/>
          </div>

          <div className="mb-2 pl-4">
            <input type="checkbox" className="cursor-pointer bg-gray-300"/>
            <label className="p-4">I Agree with Terms and Conditions</label>
          </div>

          <div className="text-center">
            <button type="submit" onClick={this.handleShow}
                    className="p-1 px-4 font-bold text-2xl rounded-xl mr-8 hover:bg-green-400">OK
            </button>
            <button type="submit" onClick={this.handleShow}
                    className="p-1 px-4 font-bold text-2xl rounded-xl hover:bg-red-400">Cancel
            </button>
          </div>
        </form>
      </div>

    );
  }
}
