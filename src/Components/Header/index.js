import React, {Component,} from 'react';
import Search from './Search'
import City from "./City";
import LoginImage from "./LoginImage";
import Account from "../Account";

export default class Header extends Component {

  render() {
    const {searchItem, currentUser, handleShowForm, showForm, showRegistration, showLogin,login,image} = this.props;
    return (
      <div className="grid grid-cols-5
      bg-orange-300 col-start-1 col-span-5">
        <City/>
        <Search searchItem={searchItem}/>
        <LoginImage handleShowForm={handleShowForm}/>
        <Account
          showForm={showForm}
          showRegistration={showRegistration}
          showLogin={showLogin}
          login={login}
          handleShowForm={handleShowForm}
          currentUser={currentUser}
          image={image}
        />
      </div>

    );
  }
}
