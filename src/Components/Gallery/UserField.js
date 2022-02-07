const UserField = ({value, data}) => {

  return <div className="my-2 inline-block">
    <p className="inline-block text-xl p-3 w-32">{value}</p>
    <p className="inline-block text-xl text-gray-600 border border-gray-400 mr-5 italic font-medium w-56"
    >{data}</p>
  </div>
}
export default UserField;