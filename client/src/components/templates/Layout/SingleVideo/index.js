import React, { Fragment } from "react";
import PlayList from "../../../organisms/Playlist";
import SingleVideo from "../../../screens/SingleVideo";
import "./style.css";

const DetailsVideo = () => {
  return (
    <Fragment>
      <div className='video_container'>
        <div className='player'>
          <SingleVideo />
        </div>
        <div className='playlist'>
          <PlayList />
        </div>
      </div>
    </Fragment>
  );
};

export default DetailsVideo;
