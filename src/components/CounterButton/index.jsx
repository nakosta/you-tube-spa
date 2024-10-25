import React from "react";

const CounterButton = ({ count, incrementCount }) => {
  return (
    <button onClick={incrementCount}>
      Счётчик: {count}
    </button>
  );
};

export default CounterButton;
