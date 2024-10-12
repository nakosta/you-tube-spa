import React from "react";

const Array = ({ array }) => {
  return <>{array.reduce((acc, item) => acc + item)}</>;
};

export default Array;
