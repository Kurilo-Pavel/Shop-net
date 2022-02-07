import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {pushItemBasket,} from "../../store/items/itemsSlice";
import {getUser} from "../../store/user/userSlice";
import UserField from "./UserField";
import Loading from "./Loading";
// import Button from "../Cash/Button";

const Cart = () => {

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    dispatch(getUser(currentUser.email))
  }, [])

  const user = useSelector((state) => state.user.data);

  const deleteItem = (id) => {
    if (user) {
      const idItem = user.buyItem.map(item => item.id).indexOf(id * 1)
      if (idItem > -1) {
        const arrayItems = user.buyItem.filter(item => item)
        arrayItems.splice(idItem, 1)
        const value = {
          user: currentUser.email,
          buyItem: arrayItems,
        }
        dispatch(pushItemBasket(value))

      }
    }
  }
  useEffect(() => {
    if (currentUser) {
      dispatch(getUser(currentUser.email))
    }
  }, [deleteItem])

  if (!user) {
    return (Loading)
  }
  return <div className="col-start-2 col-span-3 row-start-2 row-end-4 scroll-smooth block ">

    {UserField({value: "First name", data: user.firstName, user: currentUser.email})}
    {/*{Button({name: "Edit", value: "First name"})}*/}

    {UserField({value: "Last name", data: user.lastName, user: currentUser.email})}
    {/*{Button({name: "Edit", value: "Last name"})}*/}

    {UserField({value: "Email", data: user.email, user: currentUser.email})}
    {/*{Button({name: "Edit", value: "Email"})}*/}

    {UserField({value: "City", data: user.city, user: currentUser.email})}
    {/*{Button({name: "Edit", value: "City"})}*/}

    {!user.buyItem ? null : (user.buyItem.map((buy, index) => (
      <div key={index}>
        <div className="w-24 h-24 bg-white ">
          <img alt={''} className="m-auto h-full" src={process.env.PUBLIC_URL + buy.img}/>
        </div>
        <Link
          to={`/Shop_net/${buy.name}`}
          value={buy.name}
          className="hover:text-slate-900 hover:underline block text-lime-600 p-2
                      line-clamp-3 pb-0"
        >{buy.name}</Link>
        <p>{buy.price}</p>
        <button
          value={buy.id}
          className="px-4 border border-black bg-stone-200 rounded-xl mb-3
           hover:bg-red-200 text-xl
           shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
           active:translate-x-0.5 active:translate-y-0.5"
          onClick={(e) => {
            deleteItem(e.target.getAttribute('value'))
          }}
        >Delete
        </button>

      </div>
    )))}
    {/*{!user.buyItem ? null :*/}
    {/* <p>{user.buyItem.map((buy) => (buy.price))}</p>}*/}
  </div>;
}
export default Cart;
