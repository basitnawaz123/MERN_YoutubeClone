import React, { Fragment } from "react";

const Button = (props) => {
  let { icon, text, type, variant } = props;
  return (
    <Fragment>
      <button className={`btn ${variant}`} type={type}>
        {icon}
        {text}
      </button>
    </Fragment>
  );
};

export default Button;
