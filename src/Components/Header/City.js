import {Link} from "react-router-dom";

const City = () => {
  return (
    <Link
      to="/Shop_net"
      type="submit"
      className=" m-4 text-3xl cursor-pointer text-stone-200
        hover:text-blue-900 float-left"
    >
      SHOP_NET
    </Link>

  );
}
export default City;
