import account from "../icon/account.png";
import image from "../icon/free-icon-plus-1828921.png";
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';
import {useDispatch, useSelector} from "react-redux";
import {handleShowLogin, handleShowRegistration, handleShowForm} from "../store/show/showCollectionSlice";
import LoginForm from "./Login/LoginForm";
import {addImage} from "../store/imageSlice";
import {useRef} from "react";

const Account = () => {

  const dispatch = useDispatch();
  const fileInput = useRef()
  const currentUser = useSelector((state) => state.auth.currentUser);
  const login = useSelector((state) => state.showCollection.login);
  const showForm = useSelector((state) => state.showCollection.showForm);

  const handleInput = () => {
    fileInput.current.click();
  }

  return (
    <div className={`fixed z-20 ${showForm ? 'visible' : 'invisible'}`}>
      <div className="fixed z-10 w-full h-full bg-yellow-100/50 grid justify-items-stretch"
           onClick={dispatch(handleShowForm)}>
        <div className="w-1/3 m-auto inline-block h-auto
        flex flex-col bg-yellow-100 justify-center items-center"
             onClick={(e) => {
               e.stopPropagation()
             }}
        >
          {currentUser ?
            <div className="text-center">
              <img
                src={currentUser ? image : account}
                // src={account}
                className="block mx-auto rounded-full border border-black w-1/3 m-4
                   hover:scale-105 shadow-[0_0.6em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5
                   "
                onClick={handleInput}
              />

              <input className="hidden" type="file" ref={fileInput}
                     onChange={(e) => {
                       dispatch(addImage(e.target.files[0]))
                     }}/>

              <button
                className="inline bg-blue-300 rounded-2xl p-2 px-14
                  hover:bg-blue-200 text-2xl my-2
                   shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
                onClick={() => signOut(auth)}
              >Log Out
              </button>
            </div> : (
              <>
                {login ? <LoginForm/> : ''}
                <button
                  className="inline bg-blue-300 rounded-2xl p-2 px-14
                  hover:bg-blue-200 text-2xl
                   shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
                  onClick={() => {
                    dispatch(handleShowLogin)
                  }}> Login
                </button>
                <button
                  className=" inline bg-red-300 p-2 px-14 my-2 rounded-2xl
                     hover:bg-red-200 text-2xl
                     shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
                  onClick={() => {
                    dispatch(handleShowRegistration)
                  }}
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
export default Account;