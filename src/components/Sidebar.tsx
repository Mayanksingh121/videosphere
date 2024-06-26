import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineLiveTv } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <motion.div className="h-96 overflow-y-scroll font-display p-5 shadow-lg w-52">
      <ul>
        <Link to="/">
          <li className="flex items-center gap-4 py-2">
            <span className="text-2xl">
              <IoMdHome />
            </span>
            Home
          </li>
        </Link>
        <li className="flex items-center gap-4 py-2">
          <span className="text-2xl">
            <SiYoutubeshorts />
          </span>
          Shorts
        </li>
        <li className="flex items-center gap-4 py-1">
          <span className="text-2xl">
            <MdOutlineLiveTv />
          </span>
          Live
        </li>
        <li className="flex items-center gap-4 py-1">
          <span className="text-2xl">
            <BiSolidVideos />
          </span>
          Videos
        </li>
      </ul>
      <div>
        <h2 className="font-bold mt-8">Trending</h2>
        <ul className="">
          <li className="py-1">Music</li>
          <li className="py-1">Sports</li>
          <li className="py-1">Gaming</li>
          <li className="py-1">News</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold mt-8">Explore</h2>
        <ul>
          <li className="py-1">Movies</li>
          <li className="py-1">Music</li>
          <li className="py-1">Sports</li>
          <li className="py-1">Podcasts</li>
          <li className="py-1">Shopping</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
