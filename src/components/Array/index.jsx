import React from "react";

const Array = ({ array }) => {
  return <div>{array.reduce((acc, item) => acc + item)}</div>;
};

export default Array;
