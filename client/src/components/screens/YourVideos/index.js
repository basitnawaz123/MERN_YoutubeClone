import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { MdClear, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { SetMyVideos } from "../../../redux/actions/videoActions";
import Card from "../../atoms/Card";
import TagsBar from "../../organisms/TagsBar";

const YourVideos = () => {
  const { auth, myVideos } = useSelector((state) => state);

  const dispatch = useDispatch();
  const fetchMyVideos = async () => {
    if (auth.isLoggedIn) {
      const result = await axios.get(
        `http://localhost:4000/api/videos?user=${auth._id}`
      );
      // setMyVideos(result.data);
      dispatch(SetMyVideos(result.data));
    }
  };

  useEffect(() => {
    fetchMyVideos();
  }, []);

  console.log(myVideos.myVideos);
  return (
    <Fragment>
      <div className='home'>
        <div className='tags_bar'>
          <TagsBar />
        </div>
        <div className='videoGrid'>
          {myVideos.myVideos.length > 0 ? (
            <Card videos={myVideos.myVideos} layout='grid' icon={<MdClear />} />
          ) : (
            "No videos found"
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default YourVideos;
