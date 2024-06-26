import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const url: string | null = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + url + "?autoplay=1"}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default WatchPage;
