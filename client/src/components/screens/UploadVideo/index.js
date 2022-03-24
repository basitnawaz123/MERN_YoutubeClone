import React, { Fragment, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Label from "../../atoms/Label";
import "./style.css";

const UploadVideo = () => {

  const navigate = useNavigate();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const [chips, setChips] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "") {
      setError("Please enter video title");
    } else if (thumbnail === "") {
      setError("Please choose thumbnail");
    } else if (thumbnail.size > 2097152) {
      setError("Thumbnail Size Cannot be greater than 1MB");
    } else if (video === "") {
      setError("Please choose video");
    } else if (video.size > 20971520) {
      setError("Video size cannot be greater than 20MB");
    } else if (chips === "") {
      setError("Please add some tags");
    } else {
      const data = new FormData();
      data.append("title", title);
      data.append("thumbnail", thumbnail);
      data.append("video", video);
      data.append("tags", chips);
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
        <Label variant='label-danger' text={error} />

        <form onSubmit={handleSubmit} method='post'>
          <input
            className='form-control'
            type='text'
            id='title'
            placeholder='Enter video title'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <Label variant='label' text='Select video Thumbnail' />
          <input
            className='form-control'
            type='file'
            id='thumbnail'
            onChange={(e) => {
              setThumbnail(e.target.files[0]);
            }}
          />

          <Label variant='label' text='Select Video to Upload' />
          <input
            className='form-control'
            type='file'
            id='video'
            onChange={(e) => {
              setVideo(e.target.files[0]);
            }}
          />

          <input
            className='form-control'
            type='text'
            id='tags'
            placeholder='Add Comma Separated Tags'
            onChange={(e) => {
              setChips(e.target.value);
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
