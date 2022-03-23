import React, { Fragment, useEffect, useState } from "react";
import TagsBar from "../../organisms/TagsBar";
import Card from "../../atoms/Card";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import LikedVideos from "../../organisms/VideosGrid/LikedVideos";

const Library = () => {
  const [videos, SetVideos] = useState([]);
  const [likeVideos, SetLikeVideos] = useState([]);
  const fetchWatchedVideos = () => {
    const data = JSON.parse(localStorage.getItem("watchedVideos"));
    SetVideos(data);
  };

  const fetchLikedVideos = async () => {
    const result = await axios.get("http://localhost:4000/api/video/like");
    SetLikeVideos(result);
  };

  useEffect(() => {
    fetchWatchedVideos();
    fetchLikedVideos();
  }, []);

  return (
    <Fragment>
      <section className='library'>
        <div className='row'>
          <div className='row_heading'>
            <h2>History</h2>
          </div>
        </div>

        <div className='row'>
          {videos &&
            videos.map((item) => {
              return (
                <div className='video_col'>
                  <Link to={`/video/${item._id}`} key={item._id}>
                    <div className='videos__container'>
                      <div className='video'>
                        <div className='video__thumbnail'>
                          <img src={`/videos/${item.thumbnail}`} />
                        </div>
                        <div className='video__details'>
                          <div className='author'>
                            <img src={`/videos/${item.thumbnail}`} />
                          </div>

                          <div className='title'>
                            <h3>{item.title}</h3>

                            <span>10M Views • </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>

        <div className='row'>
          <div className='row_heading'>
            <h2>Liked Videos</h2>
          </div>
        </div>

        <div className='row'>
          <LikedVideos videos={likeVideos} />
        </div>
      </section>
    </Fragment>
  );
};

export default Library;
