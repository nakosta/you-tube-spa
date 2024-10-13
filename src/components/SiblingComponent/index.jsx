import React, { useState } from "react";

const SiblingComponent = () => {
  const [text, setText] = useState("абадакедавра");

  const redev = () => {
    setText(text === "абадакедавра" ? "REDEV" : "абадакедавра");
  };

  return (
    <div>
      <h3>- SiblingComponent (опционально)</h3>
      <p>- Текущий текст: {text}</p>
      <button onClick={redev}>Изменить текст</button>
    </div>
  );
};

export default SiblingComponent;
