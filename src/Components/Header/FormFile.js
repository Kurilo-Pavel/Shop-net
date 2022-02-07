const FormFile = ({form, field, label, onChange}) => {
  const {errors, touched} = form;

  return (
    <div className="mb-2">
      <label htmlFor="myFile" className="p-4">{label}</label>
      <input
        type="file"
        name="myFile"
        className="pl-2 focus:outline-none focus:ring focus:ring-black-300 bg-gray-200 hover:bg-white"
        onChange={onChange}
      />
      {errors[field.name] && touched[field.name] ? <p>{errors[field.name]}</p> : null}
    </div>
  );
}

export default FormFile;