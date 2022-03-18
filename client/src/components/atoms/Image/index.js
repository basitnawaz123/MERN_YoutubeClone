import React, { Fragment } from "react";

const Image = (props) => {
  return (
    <Fragment>
      <img src={props.src} className={props.class} />
    </Fragment>
  );
};

export default Image;
