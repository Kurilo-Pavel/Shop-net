import {useEffect, useState} from "react";
import {useDispatch,} from "react-redux";
import {getCashItem} from "../../store/cash/cashSlice";

const CashSelect = ({options, value,}) => {

  const [cash, setCash] = useState(value.name)
  const dispatch = useDispatch()

  useEffect(() => {
    if (cash !== "BYN") {
      dispatch(getCashItem(cash))
    } else {
      dispatch(getCashItem("AUD"))
    }
  }, [cash])

  const handleChangeCash = (e) => {
    setCash((prevCounter) => {
      return e.target.value
    })
  }
  return (
    <>
      <select defaultValue={value.name}
              className="w-1/2 text-center border border-black"
              onChange={handleChangeCash}
      >
        {options ? (
          options.map((option) => (
            <option
              key={option.name}
            >
              {option.name}
            </option>
          ))
        ) : ''}
      </select>
    </>
  )
}

export default CashSelect;