import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../../../ProtectedRoute";
import Sidebar from "../../../organisms/sidebar";
import VideosGrid from "../../../organisms/VideosGrid";
import LikedVideos from "../../../organisms/VideosGrid/LikedVideos";
import History from "../../../screens/History";
import Library from "../../../screens/Library";
import YourVideos from "../../../screens/YourVideos";
import "./style.css";
const Dashboard = () => {
  const { auth } = useSelector((state) => state);
  return (
    <Fragment>
      <div className='main'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<VideosGrid />} />
          <Route
            path='/library'
            element={
              <ProtectedRoute redirectTo='/login' user={auth.isLoggedIn}>
                <Library />
              </ProtectedRoute>
            }
          />
          <Route path='/history' element={<History />} />
          <Route
            path='/liked'
            element={
              <ProtectedRoute redirectTo='/login' user={auth.isLoggedIn}>
                <LikedVideos />
              </ProtectedRoute>
            }
          />
          <Route
            path='/your-videos'
            element={
              <ProtectedRoute redirectTo='/login' user={auth.isLoggedIn}>
                <YourVideos />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Fragment>
  );
};

export default Dashboard;
