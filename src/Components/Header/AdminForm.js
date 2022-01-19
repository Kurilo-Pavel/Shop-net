import React, {Component} from 'react';

export default class AdminForm extends Component {
  render() {
    const {handleCheck} = this.props
    return (
      <div className=
             {`fixed border-2 border-indigo-700 bottom-1/2 left-1/4 bg-emerald-600 text-center text-2xl
      ${handleCheck ? 'visible' : 'invisible'}`}>
        <form className="text-xs p-2 col-span-1">
          <div className="m-2">
            <label className="m-2 text-2xl">Name</label>
            <input
              type="text"
              className="border-double border-4 border-light-blue-500 text-2xl"
            />
          </div>

          <div className="m-2">
            <label className="m-2 text-2xl">img</label>
            <input
              type="password"
              className="border-double border-4 border-light-blue-500 text-2xl"
            />
          </div>

          <div className="m-2">
            <label className="m-2 text-2xl">price</label>
            <input
              type="password"
              className="border-double border-4 border-light-blue-500 text-2xl"
            />
          </div>

          <button
            type="submit"
            className="text-2xl bg-gray-300 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer"
          >
            OK
          </button>
          <button
            type="button"
            className="text-2xl
        bg-gray-300 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer right-0"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

