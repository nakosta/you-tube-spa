import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const ThemedComponent = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: isDarkTheme ? "#333" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
  };

  return <div style={styles}>Это компонент с изменяемой темой!</div>;
};

export default ThemedComponent;
