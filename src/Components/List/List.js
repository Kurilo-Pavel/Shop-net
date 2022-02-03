import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {targetCollection} from "../../store/show/showCollectionSlice";

const listItems = require(`./list.json`)

const List = () => {

  const [totalOpenList, setTotalOpenList] = useState([]);
  const dispatch = useDispatch();

  const handleShowList = (e) => {
    const target = e.target.getAttribute('value');
    const listArray = totalOpenList.includes(target) ?
      totalOpenList.filter(item => item !== target) :
      [...totalOpenList, target]
    setTotalOpenList(listArray)
  }

  return (
    <div className="col-span-1  row-span-4 inline-block border border-black bg-orange-200 ">
      {(listItems.map((item) => (
          <dl
            key={item.name}
            className="list-disc"
            onClick={handleShowList}
          >
            <dt
              value={item.name}
              className="font-bold p-1 pl-2 text-2xl cursor-pointer hover:bg-amber-600"
            >
              {item.name}
            </dt>
            {totalOpenList.map((itemList) => itemList === item.name ? (
              item.items.map((item) => (
                <Link
                  to={`/Shop_net/collection/${item}`}
                  key={item}
                  value={item}
                  className="text-xl p-1 pl-8 block cursor-pointer hover:bg-amber-300"
                  onClick={(e) => {
                    dispatch(targetCollection(e.target.getAttribute('value')))
                  }}
                >
                  {item}
                </Link>
              ))
            ) : '')}
          </dl>)
        )
      )}
    </div>
  );
}
export default List;

