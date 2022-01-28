function FormInput({form, field, label, onChange, type = 'text'}) {
    const {errors, touched} = form;

    return (
        <div className="mb-2">
            <label className="p-4">{label}</label>
            <input
                type={type}{...field}
                className="pl-2 focus:outline-none focus:ring focus:ring-black-300 bg-gray-200 hover:bg-white"
                onChange={onChange}{...field}
            />
            {errors[field.name] && touched[field.name] ? <p>{errors[field.name]}</p> : null}
        </div>
    );
}

export default FormInput;