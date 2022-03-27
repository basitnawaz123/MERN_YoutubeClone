import React, { Fragment, useEffect, useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { SetLikedVideos } from "../../../redux/actions/videoActions";

const VideoAction = (props) => {
  const { id } = useParams();
  const { auth } = useSelector((state) => state);
  const [like, SetLike] = useState({
    isLiked: "",
    video_id: "",
  });
  const dispatch = useDispatch();

  const handleLike = async (e) => {
    e.preventDefault();
    if (!auth._id) {
      alert("Only logged In Users can Like Videos");
    } else {
      const result = await axios.post(
        "http://localhost:4000/api/video/like",
        {
          video_id: id,
          like: true,
          likedBy: auth._id,
        },
        {
          headers: {
            Authorization: auth.token,
          },
        }
      );
      if (result.status === 200) {
        SetLike({ isLiked: true });
      }
    }
  };

  const handleUnlike = () => {};
  const fetchLikedVideos = async () => {
    if (auth.token) {
      const result = await axios.get(
        `http://localhost:4000/api/video/like?user=${auth._id}&video=${id}`,
        {
          headers: {
            Authorization: auth.token,
          },
        }
      );

      if (result) {
        if (result.data[0].video === id) {
          SetLike({ isLiked: true, video_id: id });
        }
      }
    }
  };

  useEffect(() => {
    fetchLikedVideos();
  }, []);

  // console.log(like);

  const { videoTitle } = props;
  return (
    <Fragment>
      <div className='video_actions'>
        <TypoGraphy className='heading' text={videoTitle} />
        <ul className='video_icon'>
          <li>
            <a onClick={like.isLiked ? handleUnlike : handleLike}>
              {like.isLiked ? <MdThumbUpAlt /> : <MdThumbUpOffAlt />}
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
