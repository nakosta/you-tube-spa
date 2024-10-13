import React, { useState } from "react";

const Button = () => {
  const [color, setColor] = useState("black");

  const buttonClick = () => {
    setColor(color === "black" ? "red" : "black");
  };

  const style = {
    color: color,
  };

  return (
    <button style={style} onClick={buttonClick}>
      Сменить цвет текста
    </button>
  );
};

export default Button;
