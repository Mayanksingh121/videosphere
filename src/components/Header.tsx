import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setSearchSuggestion, toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { RootState } from "../utils/appstore";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const searchResults: string[] = useSelector(
    (store: RootState) => store.app.searchSuggestions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const timer: number = setTimeout(
      (): Promise<void> => getSearchSuggestions(),
      200
    );

    return (): void => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async (): Promise<void> => {
    const data: Response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json: any[] = await data.json();
    dispatch(setSearchSuggestion(json[1]));
  };

  const handleToggle = (): void => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between p-5 shadow-lg">
      <div className="flex items-center text-xl col-span-1">
        <button onClick={handleToggle}>
          <GiHamburgerMenu />
        </button>
        <h1 className="font-display mx-4 font-bold">
          Video<span className="text-red-600">Sphere</span>
        </h1>
      </div>
      <div className="font-display">
        <div className="flex items-center ">
          <input
            className="px-3 w-[30rem] rounded-s-full focus:outline-none border py-1 border-[#d6d6d6]"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e): void => setSearchQuery(e.target.value)}
            onFocus={(): void => setShowResult(true)}
            onBlur={(): void => setShowResult(false)}
          />
          <button className="bg-[#e7e5e5] px-3 text-2xl border-l-0 border border-[#d6d6d6] py-1 rounded-e-full">
            <IoIosSearch />
          </button>
        </div>
        {searchResults.length > 0 && showResult && (
          <div className="absolute bg-white w-[30rem] rounded-lg shadow-lg py-2">
            <ul>
              {searchResults.map((result: string) => {
                return (
                  <li key={result} className="hover:bg-gray-100 px-5">
                    {result}
                  </li>
                );
              })} 
            </ul>
          </div>)}
      </div>
      <div className="">
        <img className="h-8" alt="user" src="" />
      </div>
    </div>
  );
};

export default Header;
