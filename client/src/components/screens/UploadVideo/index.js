import React, { Fragment, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Label from "../../atoms/Label";
import { useSelector } from "react-redux";
import "./style.css";

const UploadVideo = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const token = auth.token;
  const user_id = auth._id;

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
      const bodyFormData = new FormData();
      bodyFormData.append("title", title);
      bodyFormData.append("user_id", user_id);
      bodyFormData.append("thumbnail", thumbnail);
      bodyFormData.append("video", video);
      bodyFormData.append("tags", chips);

      axios({
        method: "post",
        url: "http://localhost:4000/api/videos",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
        .then(function (response) {
          alert(response.data.message);
          navigate("/library");
        })
        .catch(function (response) {
          setError(response.data.message);
        });
    }
  };

  return (
    <Fragment>
      {!auth.isLoggedIn ? navigate("/") : ""}
      <div className='upload_section'>
        <Label variant='label-danger' text={error} />

        <form onSubmit={handleSubmit}>
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
