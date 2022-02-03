import {useState, useEffect, useCallback, useRef, useMemo} from "react";
import {getCash} from "../../store/cash/cashSlice"
import {useDispatch, useSelector} from "react-redux";
import log from "tailwindcss/lib/util/log";


const FormSelect = ({options, value, name}) => {

  const [counter, setCounter] = useState('');
  const [targetCurrent, setTargetCurrent] = useState(value.name);
  const dispatch = useDispatch();
  const isMount = useRef(true);

  useEffect(() => {
    dispatch(getCash(targetCurrent));
  }, [targetCurrent]);

  const skedCash = useSelector((state) => state.cash.cash);

// console.log(skedCash)
  useEffect(() => {
    // console.log(skedCash)
    // if (isMount.current) {
    //   isMount.current = false;
    //   return;
    // }
    //
    // const cash = () => {
    //   const value = handle.filter(currensy => {
    //     return currensy.Cur_Abbreviation === targetCurrent ? currensy : null
    //   })
    //   console.log(value)
    //   return value === [] ? 'null' :
    //     (targetCurrent === 'BYN' ? '0' : value[0].Cur_OfficialRate)
    // }
    // setCounter(cash)
    setCounter(skedCash)
  }, [targetCurrent]);


  const handleChoiceCurrently = (e) => {
    setTargetCurrent((prevCounter) => {
      return e.target.value
    })
  }

  return (
    <>
      <input type="text" className="w-1/2 inline border border-blue-200 m-2"
             value={skedCash}
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
  )
}

export default FormSelect;