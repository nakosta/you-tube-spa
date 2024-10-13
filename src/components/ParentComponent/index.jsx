import React, { useState } from "react";
import ChildComponent from "../ChildComponent";
import SiblingComponent from "../SiblingComponent";

const ParentComponent = () => {
  const [counter, setСounter] = useState(0);

  const increment = () => {
    setСounter((counter) => counter + 1);
  };

  const reset = () => {
    setСounter(0);
  };

  const random = () => {
    setСounter(Math.floor(Math.random() * 10) + 1);
  };

  const decrement = () => {
    counter > 0 && setСounter((counter) => counter - 1);
  };

  return (
    <div>
      <h3>ParentComponent</h3>
      <p>- Счетчик: {counter}</p>
      <button onClick={increment}>Увеличить</button>
      <button onClick={reset}>Сбросить</button>
      <button onClick={random}>Случайное значение</button>
      <button onClick={decrement}>Уменьшить</button>
      <ChildComponent name={"Kostya"} counter={counter} />
      <SiblingComponent />
    </div>
  );
};

export default ParentComponent;
