import React, { Fragment, useEffect, useState } from "react";
import Card from "../../atoms/Card";
import axios from "axios";
import "./style.css";
import TagsBar from "../TagsBar";

const VideosGrid = () => {
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    axios.get("http://localhost:4000/api/videos").then((res) => {
      setVideos(res);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(videos.items);
  return (
    <Fragment>
      <div className='home'>
        <div className='tags_bar'>
          <TagsBar />
        </div>
        <div className='videoGrid'>
          <Card videos={videos.data} />
        </div>
      </div>
    </Fragment>
  );
};

export default VideosGrid;
