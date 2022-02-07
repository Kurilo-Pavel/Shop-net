import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {targetItem} from "../../store/show/showCollectionSlice";
import {getItems} from "../../store/items/itemsSlice";
import React, {useEffect} from "react";
import ChoiceCash from "../Cash/SwitchCash";

const PlaceItems = () => {
  const dispatch = useDispatch();
  const targetValue = useSelector((state) => state.showCollection.showCollection);
  dispatch(getItems());
  const items = useSelector((state) => state.items.items);
  const searchValue = useSelector((state) => state.searchItem.searchValue);
  const cashItem = useSelector((state) => state.cash.cashItem);

  const filterItems = () => {
    return items.filter(item => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
      }
    )
  }
  const url = useParams();
  useEffect(() => {
    return url
  }, [])

  return (
    <div className="relative col-start-2 col-span-3 row-start-2 h-full scroll-smooth  inline">
      <p className="text-center text-2xl bg-white py-2">{targetValue}</p>
      {filterItems().map((item, index) => (
        item.collection === targetValue || item.collection === url.collection ?
          <div key={index} className="align-bottom inline-block bg-white w-1/3 h-96">
            <img src={process.env.PUBLIC_URL + item.img}
                 id={item.id}
                 className="mr-auto ml-auto h-1/2 hover:scale-105"
            >
            </img>
            <Link to={`/Shop_net/${item.name}`}
                  value={item.name}
                  className="hover:text-black hover:underline text-gray-400
                    line-clamp-3 pb-0 text-center px-2"
                  onClick={(e) => {
                    dispatch(targetItem(e.target.getAttribute('value')))
                  }}
            >
              {item.name}
            </Link>
            <p className="mb-4 font-bold text-2xl text-center"
            >{ChoiceCash(item.price, cashItem)}</p>
          </div> : '')
      )
      }

    </div>
  );
}

export default PlaceItems;