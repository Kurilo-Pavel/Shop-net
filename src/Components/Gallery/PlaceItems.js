import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {targetItem} from "../../store/show/showCollectionSlice";
import {getItems} from "../../store/items/itemsSlice";

const PlaceItems = () => {
  const dispatch = useDispatch();
  const targetValue = useSelector((state) => state.showCollection.showCollection);
  // const filterItems = useSelector((state) => state.filterItem.filterItem)

 dispatch(getItems());
  const items = useSelector((state) => state.items.items);
  const searchValue = useSelector((state) => state.searchItem.searchValue);

  const filterItems = () => {
    return items.filter(item => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
      }
    )
  }

  return (
    <div className="col-start-2 col-span-3 row-span-4
          grid grid-cols-3 mx-auto max-w-screen-lg">
      <p className="text-center text-2xl col-start-1 col-end-4 bg-white py-2">{targetValue}</p>
      <div className="col-span-3 ">
        {filterItems().map((item, index) => (
          item.collection === targetValue ?
            <div key={index} className="align-bottom inline-block bg-white w-1/3 h-96">
              <img src={process.env.PUBLIC_URL + item.img}
                   className="mr-auto ml-auto h-1/2 hover:scale-110 p-3">
              </img>
              <Link to={`/Shop_net/${item.name}`}
                    value={item.name}
                    className=" hover:text-slate-900 hover:underline block text-lime-600 p-2
                      line-clamp-3 pb-0 text-center"
                    onClick={(e) => {
                      dispatch(targetItem(e.target.getAttribute('value')))
                    }}
              >
                {item.name}
              </Link>
              <p className="mb-4 font-bold text-2xl text-center"
              >{item.price}$</p>
            </div> : '')
        )
        }
      </div>
    </div>
  );
}

export default PlaceItems;