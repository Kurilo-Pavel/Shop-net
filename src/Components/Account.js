import React, {Component} from 'react';
import {Link} from "react-router-dom";
import account from "../icon/account.png";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default class Account extends Component {


  render() {
    const {currentUser} = this.props;
    return (
        <div
          className={`mx-2 fixed top-16 w-1/6 bg-yellow-100 right-0`}>
          <div className="h-auto flex flex-col justify-center items-center">
            <img src={account} className=" inline  w-1/5 my-2"/>
            {currentUser ?
              <button
                className="inline bg-blue-300 p-2"
                onClick={() => signOut(auth)}
              >Log Out</button> : (
                <>
                  <Link to="/Shop_net/login" className="inline bg-blue-300 p-2">Login</Link>
                  <Link to="/Shop_net/sing-up" className=" inline bg-red-300 p-2 my-2">Sin up</Link>
                </>
              )
            }
          </div>
      </div>
    );
  }
}

