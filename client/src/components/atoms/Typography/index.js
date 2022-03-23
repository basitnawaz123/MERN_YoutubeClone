import React, { Fragment } from "react";

const TypoGraphy = (props) => {
  const { heading, text, className } = props;
  return (
    <Fragment>
      <h2 className={className}>{text}</h2>
    </Fragment>
  );
};

export default TypoGraphy;
