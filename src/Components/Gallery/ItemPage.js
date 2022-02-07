import {useDispatch, useSelector} from "react-redux";
import {buyItems, getItems, pushItemBasket} from "../../store/items/itemsSlice";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import ChoiceCash from "../Cash/SwitchCash";
import Loading from "./Loading";
import {getUser} from "../../store/user/userSlice";

const ItemPage = () => {
  const dispatch = useDispatch()
  const targetItem = useSelector((state) => state.showCollection.showItem)
  const items = useSelector((state) => state.items.items);
  const buyItem = useSelector((state) => state.items.itemByu);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const cashItem = useSelector((state) => state.cash.cashItem);

  const value = {
    'user': currentUser ? currentUser.email : null,
    'buyItem': buyItem,
  }
  useEffect(() => {
    dispatch(pushItemBasket(value))
  }, [value])

  const url = useParams();
  useEffect(() => {
    dispatch(getItems())
    return url
  }, [])

  const loadingBuy = useSelector((state) => state.cash.loading);
  const itemBuy = (e) => {
    dispatch(buyItems(e.target.getAttribute('id')))

  }
  useEffect(() => {
    if (currentUser) {
      dispatch(getUser(currentUser.email))
    }
  }, [itemBuy])

  return (
    <div className=" col-start-2 col-span-3 row-start-2 h-full scroll-smooth  inline">
      {loadingBuy === "loading" ? (Loading()) : null}
      {items.map((item, index) => (
        item.name === targetItem || item.name === url.items ? (

          <div className="grid grid-cols-2"
               key={index}>
            <div className="col-span-1 flex">
              <img src={process.env.PUBLIC_URL + item.img}
                   className="m-auto items-center "/>

            </div>
            <div className=" col-span-1 relative">
              <span className="inline-block  w-full top-0 text-2xl p-2">{item.name}</span>
              <p className="font-bold text-2xl absolute bottom-0 left-4 ">Price {ChoiceCash(item.price, cashItem)} </p>
              <button className="text-2xl px-6 border rounded-2xl bg-gray-400 py-1 right-4
                  hover:bg-gray-300 shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none active:translate-x-0.5
                  active:translate-y-0.5 mb-10"
                      id={item.id}
                      onClick={itemBuy}
              >Buy
              </button>
            </div>

            <ul className="m-2 col-start-1 col-span-2 mb-4">
              {item.aboutThisItem.map((list, index) => (
                <li key={index} type="disc" className="ml-5">{list}</li>))}
            </ul>
          </div>
        ) : '')
      )}
    </div>
  );
}

export default ItemPage;