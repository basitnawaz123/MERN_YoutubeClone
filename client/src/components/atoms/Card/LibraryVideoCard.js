import React, { Fragment } from "react";
import "./style.css";
import Moment from "moment";
import { Link } from "react-router-dom";

const LibraryVideoCard = (props) => {
  const { showAuthor, layout, liked, videos } = props;
  return (
    <Fragment>
      {videos &&
        videos.map((item) => {
          return (
            <Link to={`/video/${item._id}`} key={item.title}>
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

                      <span>
                        10M Views • {Moment(item.createdAt).format("YYYY-MM")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </Fragment>
  );
};

export default LibraryVideoCard;
