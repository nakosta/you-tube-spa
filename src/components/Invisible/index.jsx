import React, { useState } from "react";

const Invisible = () => {
  const [showText, setShowText] = useState("hidden");

  const buttonFA = () => {
    setShowText(showText === "hidden" ? "visible" : "hidden");
  };

  const style = {
    visibility: showText
  };

  return (
    <div>
      <button onClick={buttonFA}>Показать/скрыть текст</button>
      <p style={style}>Этот текст может быть скрыт или показан</p>
    </div>
  );
};

export default Invisible;
