import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../../organisms/sidebar";
import VideosGrid from "../../../organisms/VideosGrid";
import LikedVideos from "../../../organisms/VideosGrid/LikedVideos";
import History from "../../../screens/History";
import "./style.css";
const Dashboard = () => {
  return (
    <Fragment>
      <div className='main'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<VideosGrid />} />
          <Route path='/history' element={<History />} />
          <Route path='/liked' element={<LikedVideos />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default Dashboard;
