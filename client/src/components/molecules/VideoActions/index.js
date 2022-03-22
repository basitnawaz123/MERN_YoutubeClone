import React, { Fragment, useState } from "react";
import TypoGraphy from "../../atoms/Typography";
import "./style.css";
import {
  MdPlaylistAdd,
  MdShare,
  MdThumbDown,
  MdThumbDownOffAlt,
  MdThumbUp,
  MdThumbUpAlt,
  MdThumbUpOffAlt,
} from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const VideoAction = (props) => {
  const { id } = useParams();
  const [like, SetLike] = useState({ like: false, video_id: "" });
  const [isLiked, SetIsLiked] = useState(false);
  const handleLike = async (e) => {
    e.preventDefault();
    SetLike({ like: true, video_id: id });
    if (like.video_id != "") {
      const result = await axios.post(
        "http://localhost:4000/api/video/like",
        like
      );
      SetIsLiked(true);
      alert(result.data.message);
    }
  };

  return (
    <Fragment>
      <div className='video_actions'>
        <TypoGraphy className='heading' text={props.videoTitle} />
        <ul className='video_icon'>
          <li>
            <a onClick={handleLike}>
              {isLiked ? <MdThumbUp /> : <MdThumbUpOffAlt />}
            </a>
          </li>
          <li>
            <a>
              <MdThumbDownOffAlt />
            </a>
          </li>
          <li>
            <a>
              <MdShare />
            </a>
          </li>
          <li>
            <a>
              <MdPlaylistAdd />
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default VideoAction;
