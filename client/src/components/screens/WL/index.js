import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WatchLater = () => {
  const { auth } = useSelector((state) => state);
  const [wtVideos, setWtVideos] = useState([]);
  const [loading, SetLoading] = useState(true);
  const fetchWtVideos = async () => {
    if (auth._id) {
      const result = await axios.get(
        `http://localhost:4000/api/video/watch_later?user=${auth._id}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: auth.token,
          },
        }
      );
      if (result) {
        setWtVideos(result.data);
        SetLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchWtVideos();
  }, []);
  //   console.log(wtVideos);
  return (
    <Fragment>
      <div className='home'>
        <div className='videoGrid'>
          {wtVideos.length > 0 ? "" : "No videos found at Watch Later"}
          {Array.isArray(wtVideos) &&
            wtVideos.map((item) => {
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

export default WatchLater;
