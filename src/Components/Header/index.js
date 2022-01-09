import React, {Component,} from 'react';
 import Search from './Search'
import City from "./City";
 import Account from "./Account";


export default class Header extends Component {

  render() {
    const {onRegistClick,handleLogin,handlePassword,handleCheck} = this.props
    return (
      <div className="grid grid-cols-5
      bg-orange-300 col-start-1 col-span-5">
        <City/>
        <Search/>
        <Account onRegistClick={onRegistClick}
                 handleLogin={handleLogin}
                 handlePassword={handlePassword}
                 handleCheck={handleCheck}/>
      </div>

    );
  }
}
