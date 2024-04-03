import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "../../index.css";
import { createContext } from "react";

export const VideosContext = createContext(null);
const MainLayOut = () => {
  const loadingVideos = useLoaderData();
  const videos = loadingVideos.data;
  return (
    <VideosContext.Provider value={videos}>
      <div className="interFont lg:w-[1321px] mx-auto lg:mt-3">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </VideosContext.Provider>
  );
};

export default MainLayOut;
