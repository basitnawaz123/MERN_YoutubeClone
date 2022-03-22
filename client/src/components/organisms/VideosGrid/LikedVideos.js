import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TagsBar from "../TagsBar";

const LikedVideos = () => {
  const [videos, SetVideos] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://localhost:4000/api/video/like");
    SetVideos(result.data);
  }, []);

  return (
    <Fragment>
      <div className='home'>
        <div className='tags_bar'>
          <TagsBar />
        </div>
        <div className='videoGrid'>
          {videos &&
            videos.map((item) => {
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
