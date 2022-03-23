import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Card from "../../atoms/Card";

const PlayList = () => {
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    axios.get("http://localhost:4000/api/videos").then((res) => {
      setVideos(res);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <Card videos={videos.data} layout='single' />
    </Fragment>
  );
};

export default PlayList;
