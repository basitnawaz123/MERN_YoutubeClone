import React, { Fragment } from "react";
import "./style.css";
import Moment from "moment";
import { Link } from "react-router-dom";

const Card = (props) => {
  const data = props.videos;

  return (
    <Fragment>
      {data &&
        data.map((item) => {
          return (
            <article key={item._id} className='video-container'>
              <Link to={`/video/${item._id}`}>
                <div className='thumbnail' data-duration='12:24'>
                  <img
                    className='thumbnail-image'
                    src={`/videos/${item.thumbnail}`}
                  />
                </div>
                <div className='video-bottom-section'>
                  <img
                    className='channel-icon'
                    src={`/videos/${item.thumbnail}`}
                  />

                  <div className='video-details'>
                    <div className='video-title'>{item.title}</div>

                    <div className='video-metadata'>
                      <span>12K views</span>•
                      <span>{Moment(item.createdAt).format("YYYY-MM")}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
    </Fragment>
  );
};

export default Card;
