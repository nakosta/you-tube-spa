import React from "react";

const CounterButton = ({ count, incrementCount }) => {
  console.log("CounterButton");
  return (
    <button onClick={incrementCount}>
      Счётчик: {count}
    </button>
  );
};

export default CounterButton;
