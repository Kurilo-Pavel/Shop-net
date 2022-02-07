import Search from './Search'
import City from "./City";
import LoginImage from "./LoginImage";
import Account from "../Account";

const Header = (currentUser) => {

  return (
    <div className="col-span-5 relative w-full h-20 z-10 text-center
      bg-gray-400 sticky top-0 shadow-[0_0.3em_0.5em_0.15em_grey]">
      <City
      />
      <Search/>
      <LoginImage currentUser={currentUser}/>
      <Account
        currentUser={currentUser}
      />
    </div>

  );
}
export default Header;
