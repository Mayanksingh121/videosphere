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

interface Video {
  snippet?: Snippet;
  stats?: Statistics;
}

const VideoCard: React.FC<Video> = ({ snippet, stats }) => {
  const { channelTitle, title, thumbnails } = snippet || {};
  return (
    <div className="cursor-pointer font-display p-2 m-2 w-60 shadow-lg">
      <img className="rounded-lg" alt="video" src={thumbnails?.medium.url} />
      <ul>
        <li className="text-sm font-semibold py-2">{title}</li>
        <li className="text-xs">{channelTitle}</li>
        <li className="text-xs">{stats?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
