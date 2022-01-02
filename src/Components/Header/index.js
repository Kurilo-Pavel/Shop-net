import React, {Component,} from 'react';
 import Search from './Search'
import City from "./City";
 import Account from "./Account";


export default class Header extends Component {

  render() {
    const {onRegistClick} = this.props
    return (
      <div className="grid grid-cols-5
      bg-orange-300 col-start-1 col-span-5">
        <City/>
        <Search/>
        <Account onRegistClick={onRegistClick}/>
        <button type="submit" onClick={onRegistClick}>push me</button>
      </div>

    );
  }
}
