import React, { Fragment } from "react";
import "./style.css";
const Label = (props) => {
  const { variant, text } = props;
  return (
    <Fragment>
      <label className={variant}>{text}</label>
    </Fragment>
  );
};

export default Label;
