import React, { Fragment, useState } from "react";
import axios from "axios";
import "./style.css";
const Tag = () => {
  const [videos, SetVideos] = useState([]);
  const searchByTag = async (item) => {
    const result = await axios.get(`http://localhost:4000/api/video/${item}`);
    if (result.data.length < 1) {
      alert("no record");
    } else {
      SetVideos(result);
    }
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
