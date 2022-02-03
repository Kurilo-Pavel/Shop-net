import {Link} from "react-router-dom";

const City = () => {
  return (
    <Link
      to="/Shop_net"
      type="submit"
      className=" col-span-1 m-4 text-3xl cursor-pointer text-white
        hover:text-blue-900 "
    >
      SHOP_NET
    </Link>

  );
}
export default City;
