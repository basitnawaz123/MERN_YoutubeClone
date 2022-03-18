import React, { Fragment } from "react";
import "./style.css";
const Tag = (props) => {
  return (
    <Fragment>
      <ul className='tags'>
        <li>All</li>
        <li>React Routers</li>
        <li>Angular</li>
        <li>Coke Studio</li>
        <li>Python</li>
        <li>Sports</li>
        <li>Hum New</li>
        <li>PTV News</li>
        <li>PTV Sports</li>
        <li>Politics</li>
        <li>ARY News</li>
      </ul>
    </Fragment>
  );
};

export default Tag;
