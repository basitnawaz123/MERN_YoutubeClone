import React, { Fragment, useState } from "react";
// import InputField from "../atoms/Inputs";
// import Button from "../atoms/Buttons";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Label from "../atoms/Label";

const UploadVideo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "") {
      alert("Please enter video title");
    } else if (thumbnail === "") {
      alert("Please choose thumbnail");
    } else if (video === "") {
      alert("Please choose video");
    } else {
      const data = new FormData();
      data.append("title", title);
      data.append("thumbnail", thumbnail);
      data.append("video", video);

      const result = await axios.post("http://localhost:4000/api/videos", data);
      if (result.status === 200) {
        alert(result.data.message);
        return navigate("/");
      }
    }
   
  };

  return (
    <Fragment>
      <div className='upload_section'>
        <form onSubmit={handleSubmit} method='post'>
          <Label text='Enter video title' />
          <input
            className='form-control'
            type='text'
            id='title'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <Label text='Select video Thumbnail' />
          <input
            className='form-control'
            type='file'
            id='thumbnail'
            onChange={(e) => {
              setThumbnail(e.target.files[0]);
            }}
          />
          <Label text='Select Video to Upload' />
          <input
            className='form-control'
            type='file'
            id='video'
            onChange={(e) => {
              setVideo(e.target.files[0]);
            }}
          />

          <button type='submit' className='btn red'>
            Upload Video
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default UploadVideo;
