import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../../store/items/itemsSlice";
import {targetItem} from "../../store/show/showCollectionSlice";


const Gallery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  dispatch(getItems());

  const items = useSelector((state) => state.items.items);
  const searchValue = useSelector((state) => state.searchItem.searchValue);


  const filterItems = () => {
    return items.filter(item => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
      }
    )
  }


  //   const filterItems = useSelector((state) => state.filterItem.filterItem)
// console.log(filterItems)

  return (
    <div className="h-screen scroll-smooth col-start-2 col-span-3 row-span-4
        inline-block bg-orange-400 ">
      {filterItems().map((item, index) => (
        <div key={index} className="align-bottom inline-block bg-white w-1/3 h-96">
          <img src={process.env.PUBLIC_URL + item.img}
               className="mr-auto ml-auto h-1/2 hover:scale-105">
          </img>
          <Link to={`/Shop_net/${item.name}`}
                value={item.name}
                className="hover:text-slate-900 hover:underline text-lime-600
                    line-clamp-3 pb-0 text-center px-2"
                onClick={(e) => {
                  dispatch(targetItem(e.target.getAttribute('value')))
                }}
          >
            {item.name}
          </Link>
          <p className="mb-4 font-bold text-2xl text-center"
          >{item.price}$</p>
        </div>)
      )
      }
    </div>
  );
}

export default Gallery;