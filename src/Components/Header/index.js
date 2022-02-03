import React, {Component,} from 'react';
import Search from './Search'
import City from "./City";
import LoginImage from "./LoginImage";
import Account from "../Account";

const Header = (currentUser) => {

  return (
    <div className="grid grid-cols-5 z-10
      bg-orange-300 col-start-1 col-span-5 sticky top-0">
      <City
      />
      <Search/>
      <LoginImage currentUser={currentUser}/>
      <Account
        currentUser={currentUser}
      />
    </div>

  );
}
export default Header;
