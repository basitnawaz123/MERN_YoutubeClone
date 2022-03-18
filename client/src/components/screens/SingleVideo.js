import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const SingleVideo = () => {
  const [video, SetVideo] = useState({});
  let { id } = useParams();

  const fetchVideo = async () => {
    const data = await axios.get(`http://localhost:4000/api/videos/${id}`);
    SetVideo({ data: data.data });
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  //   console.log(video.data.title);
  return (
    <Fragment>
      {video.data ? (
        <div className='singl_video'>
          <video width='400' controls>
            <source src={`/videos/${video.data.video}`} type='video/mp4' />
            <source src='mov_bbb.ogg' type='video/ogg' />
            Your browser does not support HTML video.
          </video>

          <h2>{video.data.title}</h2>
        </div>
      ) : (
        "no found"
      )}
    </Fragment>
  );
};

export default SingleVideo;
