import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import VideoAction from "../../molecules/VideoActions";
import Tag from "../../atoms/Tags";
import "./style.css";

const SingleVideo = () => {
  const [video, SetVideo] = useState({});
  const [tags, SetTags] = useState("");
  let { id } = useParams();

  const fetchVideo = async () => {
    const data = await axios.get(`http://localhost:4000/api/videos/${id}`);
    SetVideo({ data: data.data });
    SetTags(data.data.tags);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  console.log("tags", tags);

  return (
    <Fragment>
      {video.data ? (
        <div className='singl_video'>
          <video width='100%' controls>
            <source src={`/videos/${video.data.video}`} type='video/mp4' />
            <source src='mov_bbb.ogg' type='video/ogg' />
            Your browser does not support HTML video.
          </video>

          <ul className='tags'>{tags && tags.map((tag) => <li>#{tag}</li>)}</ul>
          <VideoAction videoTitle={video.data.title} />
        </div>
      ) : (
        "no found"
      )}
    </Fragment>
  );
};

export default SingleVideo;
