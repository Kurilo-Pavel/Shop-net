import {useState, useEffect} from "react";

function FormSelect({options, value, name}) {

  const [counter, setCounter] = useState('');
  const [targetCurrent, setTargetCurrent] = useState(value.name);

  useEffect(() => {
    fetch(`https://www.nbrb.by/api/exrates/rates/${targetCurrent}?parammode=2`)
      .then((response) => response.json())
      .then((response) =>
        setCounter(response));
    console.log('UseEffect');
  }, [targetCurrent])


  function handleChoiceCurrently(e) {
setTargetCurrent((prevCounter) =>{
  return e.target.value} )
  }

  return (
    <>
      <input type="text" className="w-1/2 inline border border-blue-200 m-2"
             value={counter.Cur_OfficialRate}
             name={name}
      />
      <select onChange={handleChoiceCurrently}
              name={name}
      >
        {options ? (
          options.map((option) => (
            <option
              key={option.name}
              selected={option.name === value.name}
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