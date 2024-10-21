import React, { useState, useRef } from "react";
import List from "./components/List";

const App = () => {
  const [arr, setArr] = useState(["kostya", "tanya", "pasha", "masha"]);
  const [inputValue, setInputValue] = useState("");
  const ref = useRef(null);

  const focus = () => {
    ref.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      // Добавляем новое значение в массив
      setArr((prevArr) => [...prevArr, inputValue]);
      setInputValue(""); // Очищаем поле ввода
    }
  };

  return (
    <>
      <input
        ref={ref}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={focus}>Фокус</button>
      <List arr={arr} />
    </>
  );
};

export default App;
