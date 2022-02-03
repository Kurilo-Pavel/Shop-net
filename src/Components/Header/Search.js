import React, {Component} from 'react';
import {targetItem} from "../../store/show/showCollectionSlice";
import {useDispatch} from "react-redux";
import {searchItem} from "../../store/show/showCollectionSlice";

const Seach = () => {
  const dispatch = useDispatch();

  return (
    <form className="col-start-2 col-span-3
      flex justify-center items-center ">
      <input
        type="text"
        placeholder='Search items'
        className="cursor-pointer w-96 h-8 rounded-2xl px-4"
        onClick={(e) => {
          dispatch(searchItem(e.target.value))
        }}
      />
    </form>
  );
}

export default Seach;
