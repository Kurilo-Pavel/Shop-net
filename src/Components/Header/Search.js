import {useDispatch} from "react-redux";
import {searchItem} from "../../store/show/showCollectionSlice";

const Seach = () => {
  const dispatch = useDispatch();

  return (
    <form className="inline relative top-6">
      <input
        type="text"
        placeholder='Search items'
        className="cursor-pointer h-8 w-1/2 rounded-2xl px-4 text-black bg-stone-200 italic"
        onChange={(e) => {
          dispatch(searchItem(e.target.value))
        }}
      />
    </form>
  );
}

export default Seach;
