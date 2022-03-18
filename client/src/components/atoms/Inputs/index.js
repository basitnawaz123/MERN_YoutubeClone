import React, { Fragment } from "react";
import "./style.css";

const InputField = (props) => {
  let { placeholder, className, type, name, value, onCustomChange } = props;
  return (
    <Fragment>
      <input
        type={type}
        name={name}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onCustomChange}
      />
    </Fragment>
  );
};

export default InputField;
