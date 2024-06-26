import { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../utils/videoSlice";

const useGetPopularVideos = (): void => {
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async (): Promise<void> => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      dispatch(addPopularVideos(json.items));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useGetPopularVideos;
