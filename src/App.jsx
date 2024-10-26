import React, { useState, useCallback, useMemo } from "react";
import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import CounterButton from "./components/CounterButton";

const App = () => {
  console.log("App");

  const arr = useMemo(
    () => [
      { name: "Kostya", id: 1 },
      { name: "Tanya", id: 2 },
      { name: "Pasha", id: 3 },
      { name: "Masha", id: 4 },
    ],
    []
  );

  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const [inputValue, setInputValue] = useState("");

  const updateInputValue = useCallback((value) => {
    setInputValue(value);
  }, []);

  return (
    <>
      <CounterButton count={count} incrementCount={incrementCount} />
      <SearchInput
        inputValue={inputValue}
        updateInputValue={updateInputValue}
      />
      <ItemList inputValue={inputValue} arr={arr} />
    </>
  );
};

export default App;
