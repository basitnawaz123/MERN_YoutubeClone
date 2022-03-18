import React, { Fragment } from "react";
import "./style.css";
const Label = (props) => {
  return (
    <Fragment>
      <label className='label'>{props.text}</label>
    </Fragment>
  );
};

export default Label;
