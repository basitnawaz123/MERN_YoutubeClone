import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navigation from "./components/organisms/Navigation";
import UploadVideo from "./components/screens/UploadVideo";
import Dashboard from "./components/templates/Layout/Dashboard";
import DetailsVideo from "./components/templates/Layout/SingleVideo";
import UserLogin from "./components/screens/Auth/UserLogin";
import { loadUser } from "./redux/actions/authActions";
import { SetLikedVideos } from "./redux/actions/videoActions";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const token = localStorage.getItem("_token");
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(token));
    dispatch(SetLikedVideos());
  }, [dispatch]);
  return (
    <Fragment>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path='/*' element={<Dashboard />} />
          <Route
            exact
            path='/upload'
            element={
              <ProtectedRoute redirectTo='/' user={auth.isLoggedIn}>
                <UploadVideo />
              </ProtectedRoute>
            }
          />
          <Route exact path='/login' element={<UserLogin />} />
          <Route exact path='/video/:id' element={<DetailsVideo />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
