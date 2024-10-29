import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Переключить на {isDarkTheme ? "светлую" : "тёмную"} тему
    </button>
  );
};

export default ThemeToggle;
