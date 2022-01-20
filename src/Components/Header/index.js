import React, {Component,} from 'react';
import Search from './Search'
import City from "./City";
import LoginImage from "../LoginImage";

export default class Header extends Component {

  render() {
const{currentUser}=this.props;
    return (
      <div className="grid grid-cols-5
      bg-orange-300 col-start-1 col-span-5">
        <City/>
        <Search/>
        <LoginImage currentUser={currentUser}/>
      </div>

    );
  }
}
