import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <form className="col-start-2 col-span-3
      flex items-end justify-center">
        <input type="text" className="mb-8 cursor-pointer w-96 h-8"/>
        <button
          type="submit"
          className="bg-gray-300 h-8 mb-8 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer"
        >
          Search
        </button>
      </form>
    );
  }
}
