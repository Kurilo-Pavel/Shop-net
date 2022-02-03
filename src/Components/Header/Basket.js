import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {pushItemBasket} from "../../store/items/itemsSlice";
import {getUser} from "../../store/user/userSlice";

const Basket = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    dispatch(getUser(currentUser.email))
  }, [])

  const user = useSelector((state) => state.user.data);
console.log(user)

  useEffect(() => {

    ;
  }, [])


  if (!user) {
    return <div className="col-start-2 col-span-3 row-span-4
         inline-block bg-blue-400"/>;
  }
  return <div className="min-h-screen col-start-2 col-span-3 row-span-4
         inline-block bg-blue-400">
    <div><p className="inline">First name</p><p className="inline">{user.firstName}</p></div>
    <div><p className="block">Last name</p><p>{user.lastName}</p></div>
    <div><p className="block">Email</p><p>{user.email}</p></div>
    <div><p className="block">City</p><p>{user.city}</p></div>
    {!user.buyItem ? null : (user.buyItem.map((buy, index) => (
      <div key={index}>
       <div className="w-24 h-24 bg-white ">
         <img className="m-auto h-full" src={process.env.PUBLIC_URL + buy.img}/>
       </div>
        <Link
          to={`/Shop_net/${buy.name}`}
          value={buy.name}
          className="hover:text-slate-900 hover:underline block text-lime-600 p-2
                      line-clamp-3 pb-0"
        >{buy.name}</Link>
        <p>{buy.price}</p>
        <button>delete</button>

      </div>
    )))
    }
    <p>{user.buyItem.map((buy)=>[...buy.price])}</p>
  </div>;
}
export default Basket;
