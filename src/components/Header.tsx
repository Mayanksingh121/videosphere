import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggle = (): void => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between p-5 mb-2 shadow-lg">
      <div className="flex items-center text-xl col-span-1">
        <button onClick={handleToggle}>
          <GiHamburgerMenu />
        </button>
        <h1 className="font-display mx-4 font-bold">
          Video<span className="text-red-600">Sphere</span>
        </h1>
      </div>
      <div className="flex items-center font-display">
        <input
          className="px-3 w-[30rem] rounded-s-full focus:outline-none border py-1 border-[#d6d6d6]"
          type="text"
          placeholder="Search"
        />
        <button className="bg-[#e7e5e5] px-3 text-2xl border-l-0 border border-[#d6d6d6] py-1 rounded-e-full">
          <IoIosSearch />
        </button>
      </div>
      <div className="">
        <img className="h-8" alt="user" src="" />
      </div>
    </div>
  );
};

export default Header;
