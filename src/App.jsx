import React from "react";
import Number from "./components/Number";
import String from "./components/String";
import Boolean from "./components/Boolean";
import Object from "./components/Object";
import FunAF from "./components/FunAF";
import Array from "./components/Array";

const App = () => {
  const number = 14;
  const string = "Kostya";
  const boolean = true;
  const object = { city: "Mozyr" };
  const funAF = () => "i am AF!";
  const array = [1, 2, 3];
  return (
    <>
      <Number number={number} />
      <String string={string} />
      <Boolean boolean={boolean} />
      <Object object={object} />
      <FunAF funAF={funAF} />
      <Array array={array} />
    </>
  );
};

export default App;
