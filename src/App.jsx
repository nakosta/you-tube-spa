import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import ThemedComponent from "./components/ThemedComponent";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
