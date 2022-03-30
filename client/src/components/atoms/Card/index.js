import React, { Fragment, useState } from "react";
import "./style.css";
import Moment from "moment";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { DeleteVideo } from "../../../redux/actions/videoActions";

const Card = (props) => {
  const { layout, source, videos, likedVideos, icon } = props;
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteVideo = async (id) => {
    if (auth.token) {
      const result = await axios.delete(
        `http://localhost:4000/api/videos/${id}`,
        {
          headers: {
            Authorization: auth.token,
          },
        }
      );
      if (result) {
        dispatch(DeleteVideo(id));
      }
    }
  };
  return (
    <Fragment>
      {videos &&
        videos.map((item) => {
          return (
            <div key={item._id}>
              {layout == "grid" ? (
                <div className='videos__container'>
                  <div className='video'>
                    <Link to={`/video/${item._id}`}>
                      <div className='video__thumbnail'>
                        <img src={`/videos/${item.thumbnail}`} />
                      </div>
                    </Link>
                    <div className='video__details'>
                      <div className='author'>
                        <img src={`/videos/${item.thumbnail}`} />
                      </div>
                      <Link to={`/video/${item._id}`}>
                        <div className='title'>
                          <h3>{item.title}</h3>
                          <span>
                            10M Views •
                            {Moment(item.createdAt, "YYYYMMDD")
                              .startOf("day")
                              .fromNow()}
                          </span>
                        </div>
                      </Link>
                      {icon ? (
                        <div
                          className='del_icon'
                          onClick={() => deleteVideo(item._id)}>
                          {icon}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link to={`/video/${item._id}`}>
                  <div className='videos__container'>
                    <div className='video_list'>
                      <div className='video_list__thumbnail'>
                        <img src={`/videos/${item.thumbnail}`} />
                      </div>
                      <div className='video_list__details'>
                        <div className='list_title'>
                          <h3>{item.title}</h3>

                          <span>
                            10M Views •{" "}
                            {Moment(item.createdAt).format("YYYY-MM")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
    </Fragment>
  );
};

export default Card;
