import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appstore";

const Body = () => {
  const isMenuOpen: boolean = useSelector(
    (store: RootState) => store.app.isMenuOpen
  );
  
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
