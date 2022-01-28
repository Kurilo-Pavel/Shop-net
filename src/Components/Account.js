import React, {Component} from 'react';
import account from "../icon/account.png";
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';
import LoginForm from "./Login/LoginForm";
import plus from "../icon/free-icon-plus-1828921.png"

export default class Account extends Component {


  render() {
    const {currentUser, showForm, showRegistration, showLogin, login, handleShowForm, image} = this.props;
    return (
      <div className={`fixed z-10 ${showForm ? 'visible' : 'invisible'}`}>
        <div className="fixed w-full h-full bg-yellow-100/50 grid justify-items-stretch" onClick={handleShowForm}>
          <div className="w-1/3 m-auto inline-block h-auto
        flex flex-col bg-yellow-100 justify-center items-center"
               onClick={(e) => {
                 e.stopPropagation()
               }}
          >
            <img src={currentUser ? image : account} className="inline rounded-full border border-black w-1/3 m-3"/>
            {currentUser ?
              <button
                className="inline bg-blue-300 rounded-2xl p-2 px-14
                  hover:bg-blue-200 text-2xl my-2
                   shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
                onClick={() => signOut(auth)}
              >Log Out</button> : (
                <>
                  {login ? <LoginForm/> : ''}
                  <button
                    className="inline bg-blue-300 rounded-2xl p-2 px-14
                  hover:bg-blue-200 text-2xl
                   shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
                    onClick={showLogin}> Login
                  </button>
                  <button
                    className=" inline bg-red-300 p-2 px-14 my-2 rounded-2xl
                     hover:bg-red-200 text-2xl
                     shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
                    onClick={showRegistration}
                  >Sign up
                  </button>
                </>

              )
            }
          </div>
        </div>
      </div>
    );
  }
}

