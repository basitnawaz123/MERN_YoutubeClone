import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoAction from "../../molecules/VideoActions";
import "./style.css";
import { ListSingleVideo } from "../../../redux/actions/videoActions";
import { useDispatch, useSelector } from "react-redux";

const SingleVideo = () => {
  const video = useSelector((state) => state.singleVideo);
  const dispatch = useDispatch();
  const [tags, SetTags] = useState("");
  var watchedVideos = JSON.parse(localStorage.getItem("watchedVideos") || "[]");
  let { id } = useParams();

  const fetchVideo = async () => {
    const data = await axios.get(`http://localhost:4000/api/videos/${id}`);
    dispatch(ListSingleVideo(data));
    SetTags(data.data.tags);
    watchedVideos.push(data.data);
    localStorage.setItem("watchedVideos", JSON.stringify(watchedVideos));
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <Fragment>
      {video.data ? (
        <div className='singl_video'>
          <video width='100%' controls>
            <source src={`/videos/${video.data.video}`} type='video/mp4' />
            <source src='mov_bbb.ogg' type='video/ogg' />
            Your browser does not support HTML video.
          </video>

          <ul className='tags'>{tags && tags.map((tag) => <li>#{tag}</li>)}</ul>
          <VideoAction videoTitle={video.data.title} />
        </div>
      ) : (
        "no found"
      )}
    </Fragment>
  );
};

export default SingleVideo;
