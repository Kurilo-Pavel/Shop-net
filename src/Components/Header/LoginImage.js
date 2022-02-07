import {Link} from "react-router-dom";
import login from "../../icon/login.png";
import basket from "../../icon/basket.png";
import {handleShowForm} from "../../store/show/showCollectionSlice";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../store/user/userSlice";

const LoginImage = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.auth.currentUser);
  const user = useSelector((state) => state.user.data);

  return (
    <div className="h-20 w-40 relative float-right top-0 ">
      <div className="h-20 align-middle  content-center grid grid-cols-2 justify-items-stretch">
        <img
          src={login}
          // onClick={han}
          onClick={() => {
            dispatch(handleShowForm())
          }}
          className="inline h-12  hover:scale-75 justify-self-center"
        />
        {currentUser ?
          <Link to={`/email/${currentUser.email}`}
                className="inline h-11 relative"
                onClick={() => dispatch(getUser(currentUser.email))}>
            <img alt={''} src={basket} className="inline w-1/2 hover:scale-75 "/>
            {user ?
              (user.buyItem && user.buyItem.length !== 0 ?
                <p
                  className={`text-red-700 p-1 absolute text-xl border rounded-full w-8 border-2
                 border-black text-center -bottom-3 right-1 p-0 h-8 bg-stone-200`}
                >{user.buyItem.length}</p> : '') : ''}
          </Link> : ''}
      </div>
    </div>
  );
}
export default LoginImage;