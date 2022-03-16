import React, { Fragment } from "react";
import InputField from "../atoms/Inputs";
import Button from "../atoms/Buttons";

const UploadVideo = () => {
  function handleSubmit(e) {
    e.preventDefault();
    let video_title = e.target.video_title.value;
    let thumbnail = e.target.thumbnail.thumbnail;
    let video = e.target.video.value;

    console.log(video_title);
    console.log(thumbnail);
    console.log(video);
  }

  return (
    <Fragment>
      <div className='upload_section'>
        <form onSubmit={handleSubmit} method='post'>
          <InputField
            placeholder='Video Title'
            className='form-control'
            value=''
            type='text'
            name='video_title'
            onChange='handleChange'
          />

          <InputField
            name='thumbnail'
            className='form-control'
            value=''
            type='file'
          />
          <InputField
            name='video'
            className='form-control'
            value=''
            type='file'
          />

          <Button type='submit' text='Upload Video' variant='red' />
        </form>
      </div>
    </Fragment>
  );
};

export default UploadVideo;
