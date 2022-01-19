import React, {Component,} from 'react';
import Search from './Search'
import City from "./City";
import SignUpForm from "./Sign up/SignUpForm";


export default class Header extends Component {

  render() {
       return (
      <div className="grid grid-cols-5
      bg-orange-300 col-start-1 col-span-5">
        <City/>
        <Search/>
        <SignUpForm/>
      </div>

    );
  }
}
