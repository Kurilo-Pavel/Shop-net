import React, {useState, useEffect, useCallback, useRef, useMemo} from "react";
import {getCash} from "../../store/cash/cashSlice"
import {useDispatch, useSelector} from "react-redux";
import log from "tailwindcss/lib/util/log";
import {current} from "@reduxjs/toolkit";
import Loading from "../Gallery/Loading";

const FormSelect = ({options, value, name}) => {

  const [counter, setCounter] = useState('');
  const [targetCurrent, setTargetCurrent] = useState(value.name);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCash());
  }, [, counter, targetCurrent]);

  const skedCash = useSelector((state) => state.cash.cash);
  useEffect(() => {
    if (skedCash !== '') {
      const cashValue = () => {
        const valueCurrent = skedCash.filter((cur) => cur.Cur_Abbreviation === targetCurrent)
        return targetCurrent === 'BYN' ? 0 : valueCurrent[0].Cur_OfficialRate
      }
      setCounter(cashValue())
    }
  }, [targetCurrent])

  const handleChoiceCurrently = (e) => {
    setTargetCurrent((prevCounter) => {
      return e.target.value
    })
  }

  if (!skedCash) {
    return (Loading())
  }
  return <>
    <input type="text" className="w-1/2 inline border border-blue-200 m-2"
           defaultValue={counter}
           name={name}
    />
    <select onChange={handleChoiceCurrently}
            name={name}
            defaultValue={value.name}
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
}
export default FormSelect;