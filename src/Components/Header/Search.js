import React, {Component} from 'react';
import basket from '../../icon/basket.png'

export default class Header extends Component {
  render() {
    return (
      <form className="col-start-2 col-span-3
      flex justify-center items-center ">
        <input type="text" className="cursor-pointer w-96 h-8"/>
        <button
          type="button"
          className="bg-gray-300 h-8 pr-4 pl-4 ml-3 rounded-tl-lg rounded-br-lg cursor-pointer"
        >
          Search
        </button>

      </form>
    );
  }
}
