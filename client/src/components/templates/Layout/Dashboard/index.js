import React, { Fragment } from "react";
import Sidebar from "../../../organisms/sidebar";
import VideosGrid from "../../../organisms/VideosGrid";
import "./style.css";

import { Routes, Route } from "react-router-dom";
import UploadVideo from "../../../screens/UploadVideo";
import SingleVideo from "../../../screens/SingleVideo";

const Dashboard = () => {
  return (
    <Fragment>
      <div className='main'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<VideosGrid />} exact />
          <Route path='/video/:id' element={<SingleVideo />} exact />
          <Route path='/upload' element={<UploadVideo />} exact />
        </Routes>
      </div>
    </Fragment>
  );
};

export default Dashboard;
