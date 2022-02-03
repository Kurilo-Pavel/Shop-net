function CashSelect({options, value,}) {

  return (
    <>
      <select  defaultValue={value.name}
               className="w-1/2 text-center border border-black"
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