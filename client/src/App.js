import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navigation from "./components/organisms/Navigation";
import UploadVideo from "./components/screens/UploadVideo";
import Dashboard from "./components/templates/Layout/Dashboard";
import DetailsVideo from "./components/templates/Layout/SingleVideo";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path='/*' element={<Dashboard />} />
          <Route exact path='/upload' element={<UploadVideo />} />
          <Route exact path='/video/:id' element={<DetailsVideo />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
