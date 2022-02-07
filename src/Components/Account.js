import account from "../icon/account.png";
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';
import {useDispatch, useSelector} from "react-redux";
import {handleShowLogin, handleShowRegistration, handleShowForm} from "../store/show/showCollectionSlice";
import LoginForm from "./Login/LoginForm";
import {addImage} from "../store/image/imageSlice";
import {useEffect, useRef} from "react";
import {getUser} from "../store/user/userSlice";
import {Link} from "react-router-dom";

const Account = () => {

  const dispatch = useDispatch();
  const fileInput = useRef()
  const currentUser = useSelector((state) => state.auth.currentUser);
  const login = useSelector((state) => state.showCollection.login);
  useEffect(() => {
    if (currentUser)
      dispatch(getUser(currentUser.email))
  },[])

  const showForm = useSelector((state) => state.showCollection.showForm);
  const user = useSelector((state) => state.user.data);
  const handleInput = () => {
    fileInput.current.click();
  }

  return (
    <div className={`fixed z-20 ${showForm ? 'visible' : 'invisible'}`}>
      <div className="fixed top-0 z-10 w-full h-full bg-gray-100/70 grid justify-items-stretch"
           onClick={() => {
             dispatch(handleShowForm())
           }}>
        <div className="w-1/3 m-auto inline-block h-auto
        flex flex-col bg-gray-500 justify-center items-center
        shadow-[0_1em_0.5em_0.8em_gray] border border-3-gray p-5"
             onClick={(e) => {
               e.stopPropagation()
             }}
        >
          {currentUser ?
            <div className="text-center">
              <img alt=''
                   src={user && user.image ? user.image : account}
                   className="block mx-auto rounded-full border border-black w-1/3 m-4
                   hover:scale-105 shadow-[0_0.1em_1em_0.1em_white] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5 "
                   onClick={handleInput}
              />

              <input className="hidden" type="file" ref={fileInput}
                     onChange={(e) => {
                       dispatch(addImage({file: e.target.files[0], userName: currentUser.email}))
                     }}/>

              <Link to={`/Shop_net`}
                className="inline bg-gray-400  p-2 px-14
                  hover:bg-gray-200 text-2xl my-2
                   shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
                onClick={() => signOut(auth)}
              >Log Out
              </Link>
            </div> : (
              <>
                {login ? <LoginForm/> : ''}
                <button
                  className="inline bg-gray-400  p-2 px-14
                  hover:bg-gray-200 text-2xl my-2
                   shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
                  onClick={() => {
                    dispatch(handleShowLogin())
                  }}> Login
                </button>
                <button
                  className="inline bg-gray-400  p-2 px-14
                  hover:bg-gray-200 text-2xl my-2
                   shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
                   active:translate-x-0.5 active:translate-y-0.5"
                  onClick={() => {
                    dispatch(handleShowRegistration())
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