import React, { Fragment } from "react";
import "./style.css";
const Tag = () => {
  const searchByTag = (item) => {
    console.log(item);
  };
  const items = [
    "All",
    "html",
    "css",
    "bootstrap",
    "php",
    "react",
    "node",
    "mongoDb",
    "Atif Aslam",
    "Bollywood",
    "PTV",
    "News",
    "OIC",
  ];
  return (
    <Fragment>
      <ul className='tags'>
        {items &&
          items.map((item) => {
            return (
              <li onClick={() => searchByTag(item)} key={item}>
                {item}
              </li>
            );
          })}
      </ul>
    </Fragment>
  );
};

export default Tag;
