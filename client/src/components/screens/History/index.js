import React, { Fragment, useEffect, useState } from "react";
import Card from "../../atoms/Card";
import TagsBar from "../../organisms/TagsBar";

const History = () => {
  const [videos, SetVideos] = useState([]);
  const fetchWatchedVideos = () => {
    const data = JSON.parse(localStorage.getItem("watchedVideos"));
    SetVideos(data);
  };

  useEffect(() => {
    fetchWatchedVideos();
  }, []);

  return (
    <Fragment>
      <div className='home'>
        <div className='tags_bar'>
          <TagsBar />
        </div>
        <div className='videoGrid'>
          {videos === null ? (
            "No Video Found in your Watch History"
          ) : (
            <Card videos={videos} layout='grid' />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default History;
