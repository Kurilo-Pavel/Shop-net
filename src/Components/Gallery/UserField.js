import {useDispatch} from "react-redux";
// import {setFieldUser} from "../../store/user/userSlice";
// import Button from "../Cash/Button";

import {inputField, searchItem} from "../../store/show/showCollectionSlice";

const UserField = ({value, data, user}) => {

// const bib=()=>{return console.log('e.target.getAttribute()')}
//
  const dispatch = useDispatch()
  return <div className="my-2 inline-block">
    <p className="inline-block text-xl p-3 w-32">{value}</p>
    <input className="inline-block text-xl text-gray-600 border border-gray-400 mr-5 italic font-medium w-56"
           type="text"
           defaultValue={data}
           onChange={(e) => {
             dispatch(inputField(e.target.value))
           }}
    />
    {/*{Button({*/}
    {/*  id: {value},*/}
    {/*  // clickValue:()=>dispatch(setFieldUser({valueField: data, field: value, user: user})),*/}
    {/*clickValue: {bib},*/}
    {/*  name: "Edit",*/}
    {/*})}*/}
  </div>
}
export default UserField;