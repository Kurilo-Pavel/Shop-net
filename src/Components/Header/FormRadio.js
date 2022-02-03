function FormRadio({field, form, label, options,}) {
  const {errors, setFieldValue} = form;

  const handleChange = (event) => {
    setFieldValue(field.name, event.target.value);
  }

  return (
    <div>
      {options ? (
        options.map((option) => (
          <span className="mr-7" key={option.value}>
                        <input
                          {...field}
                          type="radio"
                          id={option.label}
                          value={option.label}
                          checked={field.label}
                          onChange={handleChange}
                          name={option.name}
                          className="accent-red-500 cursor-pointer"
                        />
                        <label htmlFor={option.label} className="pl-2">{option.label}</label>
                    </span>
        ))
      ) : (
        <div>
          <input
            {...field}
            type="radio"
            id={field.label}
          />
          <label htmlFor={field.name}>{label}</label>
        </div>
      )}
      {errors[field.name] ? <p>{errors[field.name]}</p> : null}
    </div>
  );
}

export default FormRadio;