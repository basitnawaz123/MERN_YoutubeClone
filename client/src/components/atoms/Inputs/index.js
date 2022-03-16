import React, { Fragment } from "react";
import "./style.css";

const InputField = (props) => {
  let { placeholder, className, type, name } = props;
  return (
    <Fragment>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
      />
    </Fragment>
  );
};

export default InputField;
