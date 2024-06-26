import { useSelector } from "react-redux";
import { RootState } from "../utils/appstore";
import useGetPopularVideos from "../hooks/useGetPopularVideos";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  interface Snippet {
    channelTitle: string;
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  }

  interface Statistics {
    viewCount: string;
  }

  useGetPopularVideos();
  const popularVideos = useSelector(
    (store: RootState) => store.videos.popularVideos
  );

  return (
    <div className="flex flex-wrap">
      {popularVideos.map(
        (video: {
          id: React.Key;
          snippet: Snippet;
          statistics: Statistics;
        }) => {
          return (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard snippet={video.snippet} stats={video.statistics} />
            </Link>
          );
        }
      )}
    </div>
  );
};

export default VideoContainer;
