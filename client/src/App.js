import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Navigation from "./components/organisms/Navigation";
import Dashboard from "./components/templates/Layout/Dashboard";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navigation />
        <Dashboard />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
