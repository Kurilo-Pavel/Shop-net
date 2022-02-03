import {Link} from "react-router-dom";
import login from "../../icon/login.png";
import basket from "../../icon/basket.png";
import handleShowForm from "../../store/show/showCollectionSlice";
import {useDispatch, useSelector} from "react-redux";


const LoginImage = () => {
  const dispatch = useDispatch()
  const showForm = useSelector((status) => status.showCollection.showForm);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const user = useSelector((state) => state.user.data);
console.log(user)

  return (
    <div className="m-auto">
      <div className="">
        <img
          src={login}
          onClick={() => {
            dispatch(handleShowForm(true))
            console.log(showForm)
          }}
          className="inline h-1/4 w-1/4 mx-10 hover:scale-75 "
        />
        {currentUser ?
          <Link to={`/${currentUser.email}`}
          className="relative" >
            <img src={basket} className=" inline h-1/4 w-1/5 ml-4 hover:scale-75 "/>
            {user?
         <p
           className="text-red-700 p-1 absolute text-2xl top-0 left-0"
         >{user.buyItem.length}</p>:'null'}
          </Link> : ''}
      </div>

    </div>
  );
}
export default LoginImage;