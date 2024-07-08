export const BUTTON_DATA: string[] = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Comedy",
  "Fashion",
  "Coding",
];

const API_KEY: string = "AIzaSyD41fKzbQnx1tqiyxdYjQfSvpLI4QIeUgs";

export const YOUTUBE_API: string =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=` +
  API_KEY;

export const YOUTUBE_SEARCH_API: string =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
