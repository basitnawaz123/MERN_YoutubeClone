import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LikedVideos = () => {
  const { auth, likedVideos } = useSelector((state) => state);
  const [loading, SetLoading] = useState(true);
  const [myLikedVideos, SetMyLikedVideos] = useState([]);
  const fetchLikedVideos = async () => {
    const result = await axios.get(
      `http://localhost:4000/api/video/Userliked?user=${auth._id}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: auth.token,
        },
      }
    );
    if (result) {
      SetMyLikedVideos(result.data);
      SetLoading(false);
    }
  };
  useEffect(() => {
    fetchLikedVideos();
  }, []);

  return (
    <Fragment>
      <div className='home'>
        <div className='videoGrid'>
          {myLikedVideos.length > 0 ? "" : "No didn't liked any video yet"}
          {Array.isArray(myLikedVideos) &&
            myLikedVideos.map((item) => {
              return (
                <Link to={`/video/${item.video._id}`} key={item.video.title}>
                  <div className='videos__container'>
                    <div className='video'>
                      <div className='video__thumbnail'>
                        <img src={`/videos/${item.video.thumbnail}`} />
                      </div>
                      <div className='video__details'>
                        <div className='author'>
                          <img src={`/videos/${item.video.thumbnail}`} />
                        </div>

                        <div className='title'>
                          <h3>{item.video.title}</h3>

                          <span>
                            10M Views •{" "}
                            {moment(item.video.createdAt).format("YYYY-MM")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default LikedVideos;
