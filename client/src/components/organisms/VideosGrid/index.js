import React, { Fragment, useEffect, useState } from "react";
import Card from "../../atoms/Card";
import axios from "axios";
import "./style.css";
import TagsBar from "../TagsBar";
import { useDispatch, useSelector } from "react-redux";
import { SetVideos } from "../../../redux/actions/videoActions";

const VideosGrid = () => {
  const videos = useSelector((state) => state.allVideos);
  const dispatch = useDispatch();

  const fetchData = async () => {
    axios.get("http://localhost:4000/api/videos").then((res) => {
      // setVideos(res);
      dispatch(SetVideos(res.data));
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className='home'>
        <div className='tags_bar'>
          <TagsBar />
        </div>
        <div className='videoGrid'>
          <Card videos={videos.videos} layout='grid' />
        </div>
      </div>
    </Fragment>
  );
};

export default VideosGrid;
