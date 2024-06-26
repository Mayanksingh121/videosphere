import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appstore";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen: boolean = useSelector(
    (store: RootState) => store.app.isMenuOpen
  );

  return (
    <div className="flex">
      {isMenuOpen && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
