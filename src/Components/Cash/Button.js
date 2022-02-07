import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser, setFieldUser} from "../../store/user/userSlice";

const Button = ({name, value}) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const input = useSelector((state) => state.showCollection.inputField)
  const editField = () => {
    dispatch(setFieldUser({valueField: input, field: value, user: currentUser.email}))
    dispatch(getUser(currentUser.email))
  }
  return <button
    className="px-4 border border-black bg-stone-200 rounded-xl
    hover:bg-stone-300
    shadow-[0_0.3em_0.5em_0.15em_grey] active:shadow-none
    active:translate-x-0.5 active:translate-y-0.5"
    onClick={editField}
  >{name}
  </button>
}
export default Button;