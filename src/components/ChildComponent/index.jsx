import React, { useState } from "react";

const ChildComponent = ({name, counter}) => {

  return (
    <div>
      <h3>ChildComponent</h3>
      <p>- Привет, {name}! Текущий счетчик: {counter}</p>
    </div>
  );
};

export default ChildComponent;
