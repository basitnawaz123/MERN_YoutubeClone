import React, { Fragment, useState } from "react";
import axios from "axios";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { SetVideos } from "../../../redux/actions/videoActions";

const Tag = () => {
  const dispath = useDispatch();
  const videos = useSelector((state) => state.allVideos);
  const searchByTag = async (item) => {
    const result = await axios.get(`http://localhost:4000/api/video/${item}`);
    dispath(SetVideos(result.data));
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
