import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { VideosContext } from "../MainLayOut/MainLayOut";
const Home = () => {
  const videos = useContext(VideosContext)
  const [activeButton, setActiveButton] = useState("All");
  const [sortBtn, setSortBtn] = useState(true);
//   const [displayVideos, setDisplayVideos] = useState(videos);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const handleSortBtn = () => {
    setSortBtn(!sortBtn);
    console.log("hello");
  };
  return (
    
      <div className="text-center my-7">
        {/* Category */}
        <div className="mb-10 ">
          <div className="space-x-3 ">
            <Link
              onClick={() => handleClick("All")}
              className={`${
                activeButton === "All"
                  ? "bg-[#FF1F3D] text-white px-3 lg:px-5 py-2 rounded font-semibold"
                  : "bg-[#25252526] text-[#252525B3] px-2 lg:px-5 py-2 rounded font-medium"
              }`}
            >
              All
            </Link>
            <Link
              onClick={() => handleClick("Music")}
              className={
                activeButton === "Music"
                  ? "bg-[#FF1F3D] text-white px-2 lg:px-5 py-2 rounded font-semibold"
                  : "bg-[#25252526] text-[#252525B3] px-2 lg:px-5 py-2 rounded font-medium"
              }
            >
              Music
            </Link>
            <Link
              onClick={() => handleClick("Comedy")}
              className={
                activeButton === "Comedy"
                  ? "bg-[#FF1F3D] text-white px-2 lg:px-5 py-2 rounded font-semibold"
                  : "bg-[#25252526] text-[#252525B3] px-2 lg:px-5 py-2 rounded font-medium"
              }
            >
              Comedy
            </Link>
            <Link
              onClick={() => handleClick("Drawing")}
              className={
                activeButton === "Drawing"
                  ? "bg-[#FF1F3D] text-white px-2 lg:px-5 py-2 rounded font-semibold"
                  : "bg-[#25252526] text-[#252525B3] px-2 lg:px-5 py-2 rounded font-medium"
              }
            >
              Drawing
            </Link>
          </div>
          <div className="mt-7">
            <Link
              onClick={handleSortBtn}
              className={
                sortBtn === true
                  ? "bg-[#FF1F3DDD] px-3 lg:px-5 py-2 text-white  rounded"
                  : "px-3 lg:px-5 py-2 text-[#252525] bg-[#25252533] rounded"
              }
            >
              Sort by view
            </Link>
          </div>
        </div>
        {/* Video Card */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-4">
          {videos.map((video, idx) => (
            <VideoCard key={idx} video={video}></VideoCard>
          ))}
        </div>
      </div>
  );
};

export default Home;
