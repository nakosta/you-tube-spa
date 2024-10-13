import React from "react";
import Count from "./components/Count";
import Invisible from "./components/Invisible";
import Input from "./components/Input";
import Button from "./components/Button";
import ParentComponent from "./components/ParentComponent";

const App = () => {
  return (
    <div>
      <Count />
      <Invisible />
      <Input />
      <Button />
      <h2>ТЗ: Практика работы с props и state в React:</h2>
      <ParentComponent />
    </div>
  );
};

export default App;
